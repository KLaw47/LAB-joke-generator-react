import { useState } from 'react';
import getJoke from '../api/jokeData';
import RenderJoke from '../components/RenderJoke';

function Home() {
  const [btnTxt, setBtnTxt] = useState('Get a Joke');
  // destructuring the button text to begin with get a joke. assign it later with setbtntxt.
  const [jokeTxt, setJokeTxt] = useState({});

  const btnState = (string) => {
    setBtnTxt(string);
  };
  // btnstate will reassign a string to the button text.
  const jokeHandle = () => {
    getJoke().then((obj) => {
      setJokeTxt({
        setup: obj.setup,
        delivery: obj.delivery,
      });
      btnState('Get Punchline');
    });
  };
  // joke handle gets the api call, and then obj function sets the joke text as the setup/delivery
  return (
    <div
    // this is styling I didnt touch it.
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <RenderJoke jokeTxt={jokeTxt} btnTxt={btnTxt} />

      <button type="button" onClick={btnTxt !== 'Get Punchline' ? jokeHandle : () => btnState('Get another Joke')}>{btnTxt}</button>
    </div>
  );
}
 // renderjoke takes two props, joke and btn, which change based on the terrenarysssssss
export default Home;
