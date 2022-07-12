import RenderJoke from '../components/RenderJoke';

function Home() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>JOKE</h1>
      <RenderJoke />
    </div>
  );
}

export default Home;
