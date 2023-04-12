import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import RemoveCart from "./RemoveCart";
import { useSelector } from "react-redux";
import { getIsAdmin } from "../store/user/selecters";

const PageNavigation = ({ title }) => {
  const isAdmin = useSelector(getIsAdmin);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      <Wrapper>
        <NavLink to="/">Home</NavLink>/{title}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.section`
  height: 10rem;
  /* background-color: ${({ theme }) => theme.colors.bg}; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 3.2rem;
  padding-left: 1.2rem;

  a {
    font-size: 3.2rem;
  }
`;

export default PageNavigation;
