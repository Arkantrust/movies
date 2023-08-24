package dev.dvrgnx.movies.service;

import dev.dvrgnx.movies.model.Movie;
import dev.dvrgnx.movies.repo.MovieRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    @Autowired
    private MovieRepo repo;

    public List<Movie> getAll() {
        return repo.findAll();
    }

    public Optional<Movie> getByImdbId(String imdbId) {
        return repo.findByImdbId(imdbId);
    }

}