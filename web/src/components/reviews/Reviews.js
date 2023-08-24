import React, { useEffect, useRef } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../review_form/ReviewForm';

function Reviews({ getMovie, movie, setReviews, reviews }) {

  const reviewText = useRef();
  let params = useParams();
  const movieId = params.movieId; // imdbId

  useEffect(() => {
    getMovie();
  }, [])

  const addReview = async (e) => {
    e.preventDefault();

    const rev = reviewText.current;

    try {
      await api.post(`/v1/movies/${movie?.imdbId}/reviews`, {
        body: rev.value
      });

      const updatedReviews = [...reviews, { body: rev.value }];
      rev.value = '';
      setReviews(updatedReviews);
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <img src={movie?.poster}></img>
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm handleSubmit={addReview} reviewText={reviewText} labelText="Write a review!" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {
            reviews?.map((review) => (
              <Row key={review.id}>
                <Col>
                  <p>{review.body}</p>
                </Col>
              </Row>
            ))
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Reviews