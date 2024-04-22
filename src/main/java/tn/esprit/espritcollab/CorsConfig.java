package tn.esprit.espritcollab;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Définit le mapping CORS pour toutes les URL de l'application
                .allowedOrigins("http://localhost:4200") // Autorise les requêtes provenant de ce domaine
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Autorise ces méthodes HTTP
                .allowedHeaders("*")
                .allowCredentials(true); // Autorise l'envoi de cookies
    }
}