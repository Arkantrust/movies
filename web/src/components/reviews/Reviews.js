import React, { useEffect, useRef } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../review_form/ReviewForm';

function Reviews() {

  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId; // imdbId

  useEffect(() => {
    getMovieData();
  }, [])

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      await api.post(`/v1/movies/${movieId}/reviews`, {
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
                  <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a review!" />
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
            reviews?.map((r) => (
              <Row key={r.id}>
                <Col>
                  <p>{r.body}</p>
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