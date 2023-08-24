package dev.dvrgnx.movies.controller;

import dev.dvrgnx.movies.model.Review;
import dev.dvrgnx.movies.service.ReviewService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/v1/reviews")
public class ReviewController {

    @Autowired
    private ReviewService service;

    // TODO: fix using good practices
    // Having a movie id in the reviews/{id} path is misleading
    @PostMapping("/{imdbId}")
    public ResponseEntity<Review> createReview(@PathVariable String imdbId, @RequestBody Map<String, String> body) {
        return new ResponseEntity<Review>(service.addReview(imdbId, body.get("")), HttpStatus.OK);
    }

}