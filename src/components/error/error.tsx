import '../../styles/error.css';


function Error(): JSX.Element {
  return (
    <section className="error">
      <p className="error__text">
        Some error was occured <br />
        Please try again later
      </p>
    </section>
  );
}

export default Error;
