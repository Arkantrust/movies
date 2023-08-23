import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Trailer from './components/trailer/Trailer';
import NotFound from './components/not_found/NotFound';
import NotFound from './components/review/Reviews';

function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  const getMovies = async () => {
    try {
      const res = await api.get("/v1/movies");
      setMovies(res.data);
    } catch (err) {
      console.error(err)
    }
  }

  const getMovie = async (movieId) => {
    try {
      const res = await api.get(`/v1/movies/${movieId}`);
      setMovie(res.data);
      setReviews(movie?.reviews)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} ></Route>
          <Route path="/trailers/:videoId" element={<Trailer />} ></Route>
          <Route path="/reviews/:movieId" element={<Reviews />} ></Route>
          <Route path="*" element={<NotFound />} ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
