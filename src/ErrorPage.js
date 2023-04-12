import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "./store/user/selecters";
import { useEffect } from "react";

const ErrorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isPageLogin = location.pathname === "/auth/sign-in";
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRedirecting = isPageLogin && isLoggedIn;

  useEffect(() => {
    if (isRedirecting) {
      let next = new URLSearchParams(location.search).get("next");
      if (!next) {
        next = "/";
      }
      navigate(next);
    }
  }, []);

  if (isRedirecting) {
    return "Đang chuyển hướng ...";
  }

  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. How you got here is a
            mystery. But you can click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage;
