import React, { useEffect, useState } from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { useParams } from "react-router-dom";
import { apiPrefix } from "../config";
import axios from "axios";

const CartItem = ({ amount }) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();

  // data
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const { id } = useParams();

  const { _id, name, company, price, description, category, image } = data;

  useEffect(() => {
    axios.get(`${apiPrefix}/products/${id}`).then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

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
        amount={amount}
        setDecrease={() => setDecrease(_id)}
        setIncrease={() => setIncrement(_id)}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(_id)} />
      </div>
    </div>
  );
};

export default CartItem;
