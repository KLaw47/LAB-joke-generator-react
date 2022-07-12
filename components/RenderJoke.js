import React from 'react';
import { propTypes } from 'prop-types';
import getJoke from '../api/jokeData';

export default function RenderJoke({ joke }) {
  const handleClick = () => {
    getJoke();
  };
  return (
    <div>
      <h1>{joke}</h1>
      <button type="button" onClick={handleClick}>Joke Time</button>
    </div>
  );
}

RenderJoke.propTypes = {
  joke: propTypes.string,
};

RenderJoke.defaultProps = {
  joke: '',
};
