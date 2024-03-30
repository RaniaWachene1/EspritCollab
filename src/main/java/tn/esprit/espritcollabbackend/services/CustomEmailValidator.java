package tn.esprit.espritcollabbackend.services;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;
public class CustomEmailValidator  implements ConstraintValidator<ValidEmail, String>{
    @Override
    public void initialize(ValidEmail constraintAnnotation) {
    }

    @Override
    public boolean isValid(String email, ConstraintValidatorContext context) {
        if (email == null) {
            return false;
        }

        // Check if the email ends with '@esprit.tn'
        return email.endsWith("@esprit.tn");
    }
}
