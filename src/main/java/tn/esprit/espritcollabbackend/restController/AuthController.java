package tn.esprit.espritcollabbackend.restController;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.stream.Collectors;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;
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
import tn.esprit.espritcollabbackend.services.FilesStorageService;
import org.springframework.beans.factory.annotation.Value;

//import tn.esprit.espritcollab.entities.ERole;
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600, allowCredentials="true")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Value("${spring.security.oauth2.client.registration.google.client-id}")
    private String googleClientId;
    private final ClientRegistrationRepository clientRegistrationRepository;

    public AuthController(ClientRegistrationRepository clientRegistrationRepository) {
        this.clientRegistrationRepository = clientRegistrationRepository;
    }
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;
    @Autowired
    FilesStorageService storageService;


    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;


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
                                          @RequestParam("file") MultipartFile file) throws ParseException {
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

        // Save the image and get the image URL
        String imageUser = storageService.saveImage(file);

        signUpRequest.setBirthdateFromString(String.valueOf(signUpRequest.getBirthdate()));

        // Construct the image URL relative to the backend server's base URL
        String imageUrl = "http://localhost:8087/uploads/" + file.getOriginalFilename(); // Adjust if necessary

        // Create new user's account with additional fields
        User user = new User(signUpRequest.getFirstName(),
                signUpRequest.getLastName(),
                signUpRequest.getEmail(),
                signUpRequest.getUsername(),
                signUpRequest.getBirthdate(),
                encoder.encode(signUpRequest.getPassword()),
                imageUrl, // Assign the image URL
                signUpRequest.getLevel(),
                signUpRequest.getClassNumber(),
                signUpRequest.getMajor());

        // Set the role STUDENT by default
        user.setRole(Role.STUDENT);

        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
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

    @GetMapping("/google/login")
    public String googleLogin() {
        ClientRegistration registration = clientRegistrationRepository.findByRegistrationId("google");
        return "redirect:" + registration.getProviderDetails().getAuthorizationUri();
    }

    @GetMapping("/oauth2/callback")
    public String oauth2Callback(OAuth2User oauth2User) {
        String email = oauth2User.getAttribute("email");
        String name = oauth2User.getAttribute("name");
        return "redirect:/home";
    }
}

