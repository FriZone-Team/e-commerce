import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { apiPrefix } from "../config";
import axios from "axios";

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }
  }

  .update_icon {
    font-size: 1.6rem;
    color: #2ab2ff;
    cursor: pointer;
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }
  }
`;

const Dashboard = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get(`${apiPrefix}/products`).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user_loggedIn");
    window.location.reload();
  };

  if (isLoading) {
    return <div className="page_loading">Loading.....</div>;
  }
  return (
    <Wrapper>
      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Category</p>
          <p>Price</p>
          <p className="cart-hide">Update</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {/* <ProductItem></ProductItem> */}
          {data.map((curElem) => {
            return <ProductItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />
        <div className="cart-two-button">
          <NavLink to="/dashboard/addProduct">
            <Button> Add Product </Button>
          </NavLink>
          <Button onClick={handleLogout} className="btn btn-clear">
            Logout
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
