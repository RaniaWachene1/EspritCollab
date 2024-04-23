package tn.esprit.espritcollabbackend.restController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.esprit.espritcollabbackend.entities.Event;
import tn.esprit.espritcollabbackend.entities.Rating;
import tn.esprit.espritcollabbackend.entities.User;
import tn.esprit.espritcollabbackend.services.EventService;
import tn.esprit.espritcollabbackend.services.RatingService;
import tn.esprit.espritcollabbackend.services.UserServiceIMP;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200", "https://2e97-197-31-160-181.ngrok-free.app"}, maxAge = 3600, allowCredentials = "true")
@RestController
@RequestMapping("/api")
public class RatingController {

    @Autowired
    private RatingService ratingService;

    @Autowired
    private EventService eventService;

    @Autowired
    private UserServiceIMP userService;

    @PostMapping("/events/{eventId}/ratings/{userId}")
    public Rating addRating(@PathVariable Long eventId, @RequestBody Rating rating, @PathVariable Long userId) {

        Event event = eventService.retrieveById(eventId);
        User user = userService.retrieveById(userId);

        return ratingService.addRating(rating, event, user);
    }
    @GetMapping("/events/{eventId}/ratings")
    public List<Rating> getAllRatingsForEvent(@PathVariable Long eventId) {
        return ratingService.getAllRatingsForEvent(eventId);
    }
    @GetMapping("/events/{eventId}/average-rating")
    public double getAverageRatingForEvent(@PathVariable Long eventId) {
        List<Rating> ratings = ratingService.getAllRatingsForEvent(eventId);
        if (ratings.isEmpty()) {
            return 0.0; // Return 0 if there are no ratings
        } else {
            int totalRating = ratings.stream().mapToInt(Rating::getValueR).sum();
            double averageRating = (double) totalRating / ratings.size();
            // Round the average rating to two decimal places
            return Math.round(averageRating * 100.0) / 100.0;
        }
    }


}
