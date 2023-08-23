import Hero from '../hero/Hero';
import Header from '../hero/Header';

const Home = ({ movies }) => {
  return (
    <>
      <Header />
      <Hero movies={movies} />
    </>
  )
}

export default Home