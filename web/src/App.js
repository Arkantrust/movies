import api from './api/axiosConfig';
import {useState, useEffect} from 'react';

function App() {
  
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    
    try {
      
      const res = await api.get("/v1/movies");
      setMovies(res.data);

    } catch (err) {
      console.error(err)
    }

  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
