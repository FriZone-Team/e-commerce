import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import { useSelector } from "react-redux";
import { getUser } from "../store/user/selecters";

const Header = () => {
  const user = useSelector(getUser);
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="w-[80px]" src="./onion.jpg" alt="my logo img" />
      </NavLink>
      <p class="hello">Welcome back, {user.name}</p>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .hello {
    color: #000;
    font-weight: 800;
  }

  .logo {
    height: 5rem;
  }
`;
export default Header;
