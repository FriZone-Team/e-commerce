import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// import { Grid } from "material-ui"; // Thuong dung -> kem hieu qua
// import Grid from "material-grid/Grid"; // Toi uu hon

const AuthenticationPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }
  .form {
    max-width: 500px;
    margin: 0 auto;
  }
  .have-account {
    margin-bottom: 20px;
    font-size: 14px;
    a {
      display: inline-block;
      color: ${(props) => props.theme.primary};
      font-weight: 500;
    }
  }
`;

const AuthenticationPage = ({ children }) => {
  return (
    <AuthenticationPageStyles>
      <div className="container">
        <div className="text-center">
          <NavLink to="/" className="inline-block">
            <img
              srcSet="/onion.jpg 2x"
              alt="monkey-blogging"
              className="logo"
            />
          </NavLink>
        </div>
        {children}
      </div>
    </AuthenticationPageStyles>
  );
};

export default AuthenticationPage;
