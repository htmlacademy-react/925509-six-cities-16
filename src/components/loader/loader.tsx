import '../../styles/loader.css';

function Loader(): JSX.Element {
  return (
    <section className="loader">
      <div className="loader__spinner">
      </div>
      <span className="loader__text">Loading...</span>
    </section>
  );
}

export default Loader;
