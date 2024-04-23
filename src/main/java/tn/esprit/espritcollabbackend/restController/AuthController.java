package tn.esprit.espritcollabbackend.restController;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
import org.springframework.web.servlet.view.RedirectView;
import org.springframework.web.util.HtmlUtils;
import tn.esprit.espritcollabbackend.payload.request.LoginRequest;
import tn.esprit.espritcollabbackend.payload.request.SignupRequest;
import tn.esprit.espritcollabbackend.payload.request.response.JwtResponse;
import tn.esprit.espritcollabbackend.payload.request.response.MessageResponse;
import tn.esprit.espritcollabbackend.payload.request.response.UserInfoResponse;
import tn.esprit.espritcollabbackend.repositories.UserRepository;
import tn.esprit.espritcollabbackend.security.jwt.JwtUtils;
import tn.esprit.espritcollabbackend.security.services.UserDetailsImpl;
import tn.esprit.espritcollabbackend.entities.User;
import tn.esprit.espritcollabbackend.entities.Role;
import tn.esprit.espritcollabbackend.services.EmailSenderService;
import tn.esprit.espritcollabbackend.services.FilesStorageService;
import org.springframework.beans.factory.annotation.Value;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import tn.esprit.espritcollabbackend.services.UserServiceIMP;

//import tn.esprit.espritcollab.entities.ERole;
@CrossOrigin(origins  = {"http://localhost:4200", "https://2e97-197-31-160-181.ngrok-free.app"}, maxAge = 3600, allowCredentials="true")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Value("${spring.security.oauth2.client.registration.google.client-id}")
    private String googleClientId;
    private final ClientRegistrationRepository clientRegistrationRepository;
    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    public AuthController(ClientRegistrationRepository clientRegistrationRepository) {
        this.clientRegistrationRepository = clientRegistrationRepository;
    }
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private EmailSenderService emailSenderService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    FilesStorageService storageService;
    @Autowired
    private UserServiceIMP userService;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    EmailSenderService emailService;
    @Value("${recaptcha.secret-key}")
    private String recaptchaSecretKey;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {


        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        // Extract role from UserDetailsImpl
        Role role = userDetails.getUser().getRole();

        // Pass role to JwtResponse constructor as a list
        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getIdUser(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                Collections.singletonList(role.name()))); // Convert enum to string
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @ModelAttribute SignupRequest signUpRequest,
                                          @RequestParam(name = "file", required = false) MultipartFile file) throws ParseException {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Generate a verification token
        String verificationToken = UUID.randomUUID().toString();

        // Initialize imageUrl to null
        String imageUrl = null;

        // Check if file is not null before saving image and constructing image URL
        if (file != null) {
            // Save the image and get the image URL
            imageUrl = storageService.saveImage(file);

            signUpRequest.setBirthdateFromString(String.valueOf(signUpRequest.getBirthdate()));

            // Construct the image URL relative to the backend server's base URL
            imageUrl = "http://localhost:8087/uploads/" + file.getOriginalFilename(); // Adjust if necessary
        }

        // Encode password only if it's not null
        String encodedPassword = null;
        if (signUpRequest.getPassword() != null) {
            encodedPassword = encoder.encode(signUpRequest.getPassword());
        }

        // Create new user's account with additional fields
        User user = new User(signUpRequest.getFirstName(),
                signUpRequest.getLastName(),
                signUpRequest.getEmail(),
                signUpRequest.getUsername(),
                signUpRequest.getBirthdate(),
                encodedPassword, // Assign the encoded password
                imageUrl,
                signUpRequest.getLevel(),
                signUpRequest.getClassNumber(),
                signUpRequest.getMajor());

        // Set the role STUDENT by default
        user.setRole(Role.STUDENT);

        // Set verification token
        user.setVerificationToken(verificationToken);

        userRepository.save(user);

        // Send verification email
        emailSenderService.sendVerificationEmail(user, verificationToken);

        return ResponseEntity.ok(new MessageResponse("User registered successfully! Please check your email for verification."));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logoutUser() {
        // Clear JWT token from the browser by setting an empty token and expiration in the past
        ResponseCookie jwtCookie = ResponseCookie.from("jwt", "")
                .httpOnly(true)
                .secure(true) // Make sure to configure this appropriately
                .maxAge(0)
                .path("/")
                .build();

        return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
                .body(new MessageResponse("Logged out successfully"));
    }

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestParam String email) {
        System.out.println("Received email: " + email);
        User user = userService.findByEmail(email);
        if (user != null) {
            userService.generatePasswordResetToken(user);
            emailService.sendPasswordResetEmail(user);
            return ResponseEntity.ok().build(); // Return a success response
        } else {
            return ResponseEntity.badRequest().body("User not found"); // Return a response indicating that the email is not registered
        }
    }

    @PostMapping("/reset-password")
    public void resetPassword(@RequestParam String token, @RequestParam String newPassword) {
        String encodedPassword = encoder.encode(newPassword);
        userService.resetPassword(token, encodedPassword);
    }

    @GetMapping("/verifyEmail")
    public String verifyEmail(@RequestParam("token") String verificationToken) {
        // Verify the email using the verification token
        boolean emailVerified = userService.verifyEmail(verificationToken);

        if (emailVerified) {
            return "Email verified successfully!";
        } else {
            return "Invalid verification token!";
        }
    }

    private boolean verifyRecaptcha(String recaptchaResponse) {
        String url = "https://www.google.com/recaptcha/api/siteverify";
        String params = "secret=" + recaptchaSecretKey + "&response=" + recaptchaResponse;

        ResponseEntity<String> response = new RestTemplate().postForEntity(url, null, String.class, params);
        if (response.getStatusCode() == HttpStatus.OK) {

        }
        return false;
    }
    @GetMapping("/id")
    public ResponseEntity<Long> getCurrentUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated() && authentication.getPrincipal() instanceof UserDetailsImpl) {
            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            Long userId = userDetails.getIdUser();
            return ResponseEntity.ok(userId);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }







    @GetMapping("/facebook/login")
    public String facebookLogin() {
        ClientRegistration registration = clientRegistrationRepository.findByRegistrationId("facebook");
        return "redirect:" + registration.getProviderDetails().getAuthorizationUri();
    }
    @GetMapping("/oauth2/facebook/callback")
    public String facebookCallback(@RequestParam("code") String code, OAuth2User oauth2User) {
        logger.info("Facebook OAuth2 callback method called");
        String email = oauth2User.getAttribute("email");
        String firstName = oauth2User.getAttribute("first_name");
        String lastName = oauth2User.getAttribute("last_name");

        // Check if the user exists in your database
        Optional<User> optionalUser = userRepository.findByEmail(email);
        User user;
        if (optionalUser.isPresent()) {
            // If user exists, get the user
            user = optionalUser.get();
        } else {
            // If user doesn't exist, create a new user
            user = new User();
            user.setEmail(email);
            user.setFirstName(firstName);
            user.setLastName(lastName);
            userRepository.save(user);
        }

        // Authenticate the user
        Authentication authentication = new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Redirect the user to the home page
        return "redirect:/home";
    }

    @GetMapping("/google/login")
    public String googleLogin() {
        ClientRegistration registration = clientRegistrationRepository.findByRegistrationId("google");
        return "redirect:" + registration.getProviderDetails().getAuthorizationUri();
    }

    @GetMapping("/oauth2/callback")
    public String oauth2Callback(OAuth2User oauth2User) {
        String email = oauth2User.getAttribute("email");
        String firstName = oauth2User.getAttribute("given_name");
        String lastName = oauth2User.getAttribute("family_name");

        Optional<User> optionalUser = userRepository.findByEmail(email);
        User user;
        if (optionalUser.isPresent()) {
            user = optionalUser.get();
        } else {
            user = new User();
            user.setEmail(email);
            user.setFirstName(firstName);
            user.setLastName(lastName);
            userRepository.save(user);
        }

        Authentication authentication = new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        return "redirect:/home";
    }




}


