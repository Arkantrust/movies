package dev.dvrgnx.movies.service;

import dev.dvrgnx.movies.model.Movie;
import dev.dvrgnx.movies.model.Review;
import dev.dvrgnx.movies.repo.ReviewRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepo repo;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review addReview(String imdbId, String reviewBody) {
        Review review = repo.insert(new Review(reviewBody, LocalDateTime.now(), LocalDateTime.now()));

        mongoTemplate.update(Movie.class)
                .matching(Criteria.where("imdbId").is(imdbId))
                .apply(new Update().push("reviewIds").value(review.getId()))
                .first();

        return review;
    }

}