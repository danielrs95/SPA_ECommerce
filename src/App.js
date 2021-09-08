import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Rating } from 'react-simple-star-rating';

const App = () => {
  const [comic, setComic] = useState({});
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const getData = async () => {
    let randomNum = Math.floor(Math.random() * (2500 - 1) + 1);

    console.log(randomNum);

    const { data } = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://xkcd.com/${randomNum}/info.0.json`
    );
    console.log(data);
    setComic(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container justify-content-center'>
          <span className='navbar-brand mb-0 h6'>Masiv Comic</span>
        </div>
      </nav>

      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-8 text-center'>
            <h2>Comic Title: {comic.title}</h2>
            <img
              src={comic.img}
              alt={comic.alt}
              className='rounded mx-auto d-block'
            />
            <div className="mt-4 d-flex justify-content-center">
              <span>Rate this comic:</span>
              <Rating
                onClick={handleRating}
                ratingValue={rating}
                // className='mt-4'
              />
            </div>
            <a role='button' href='/' className='btn btn-outline-primary mt-4'>
              See another random comic!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
