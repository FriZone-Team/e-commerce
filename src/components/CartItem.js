import React, { useEffect, useState } from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { apiPrefix } from "../config";
import { addQtyCart, removeQtyCart, removeCart } from "../store/cart/actions";
import axios from "axios";
import { useDispatch } from "react-redux";
import api from "../api";

const CartItem = ({ product, qty }) => {
  const dispatch = useDispatch();

  // data
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const { _id, name, company, price, description, category, image } = product;

  const handleChange = (delta, done) => {
    api.putCart(product._id, qty + delta).then(({ success, error }) => {
      if (success) {
        done();
      } else {
        alert(error);
      }
    });
  };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={_id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount={qty}
        setDecrease={() => handleChange(-1, dispatch(removeQtyCart(product)))}
        setIncrease={() => handleChange(+1, dispatch(addQtyCart(product)))}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * qty} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeCart(product)} />
      </div>
    </div>
  );
};

export default CartItem;
