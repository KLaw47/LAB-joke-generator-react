import React from 'react';
import { PropTypes } from 'prop-types';

export default function RenderJoke({ btnTxt, jokeTxt }) {
  return (
    <div>
      <h1>{btnTxt === 'Get a Joke' ? 'THE JOKE GOAT' : ''}</h1>
      <h1>{jokeTxt.setup}</h1>
      <h3>{btnTxt === 'Get another Joke' ? jokeTxt.delivery : ''}</h3>
    </div>
  );
}

RenderJoke.propTypes = {
  jokeTxt: PropTypes.shape({
    setup: PropTypes.string,
    delivery: PropTypes.string,
  }).isRequired,
  btnTxt: PropTypes.string.isRequired,
};
