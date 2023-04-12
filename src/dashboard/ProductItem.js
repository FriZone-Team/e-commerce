import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import IconUpdate from "../components/icon/IconUpdate";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import api from "../api";

const ProductItem = (curElem) => {
  const { _id, name, company, price, description, category, image } = curElem;

  const handleRemove = () => {
    api.removeProduct(_id).then(({ success, error }) => {
      if (success) {
        alert("Xóa thành công !");
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
            <img src={image} alt={name} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>

      {/* category   */}
      <div className="cart-hide">
        <p>{category}</p>
      </div>

      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      <NavLink
        to={`/dashboard/updateProduct/${_id}`}
        style={{ margin: "0 auto" }}
      >
        <IconUpdate className="update_icon" />
      </NavLink>

      <button onClick={handleRemove}>
        <FaTrash className="remove_icon" />
      </button>
    </div>
  );
};

export default ProductItem;
