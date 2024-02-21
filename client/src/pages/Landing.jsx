import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/Landing";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="main-info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae maxime omnis cupiditate odio quasi velit magni est nam
              fugiat esse, perspiciatis, debitis distinctio? Nihil, dolore
            </p>
            <Link to="/login" className="btn btn-hero">
              Login / Register
            </Link>
          </div>
          <img src={main} alt="hero image" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
};

export default Landing;
