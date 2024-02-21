import { useRouteError, Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/Error";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper className="full-page">
        <main>
          <img src={img} alt="page not found image" />
          <h3>page not found</h3>
          <p>Sorry, we could not find the page you are looking for.</p>
          <Link to="/" className="btn">
            Go back Home
          </Link>
        </main>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="full-page">
      <main>
        <h4>An error occurred. Please try again later.</h4>
      </main>
    </Wrapper>
  );
};

export default Error;
