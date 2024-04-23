package tn.esprit.espritcollabbackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.espritcollabbackend.entities.Event;
import tn.esprit.espritcollabbackend.entities.Rating;
import tn.esprit.espritcollabbackend.entities.User;
import tn.esprit.espritcollabbackend.repositories.RatingRepository;

import java.util.List;

@Service
public class RatingServiceImpl implements RatingService {

    @Autowired
    private RatingRepository ratingRepository;

    @Override
    public Rating addRating(Rating rating, Event event, User user) {

        rating.setEvent(event);
        rating.setUser(user);

        return ratingRepository.save(rating);
    }

    @Override
    public List<Rating> getAllRatingsForEvent(Long eventId) {
        return ratingRepository.findByEventId(eventId);

    }


    @Override
    public Rating updateRating(Long id, Rating newRating) {
        Rating existingRating = ratingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Rating not found with id: " + id));

        existingRating.setValueR(newRating.getValueR()); // Assuming you can update the value only
        return ratingRepository.save(existingRating);
    }

    @Override
    public void deleteRating(Long id) {
        Rating rating = ratingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Rating not found with id: " + id));

        ratingRepository.delete(rating);
    }

    @Override
    public Rating getRatingById(Long id) {
        return ratingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Rating not found with id: " + id));
    }

    @Override
    public List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }
}
