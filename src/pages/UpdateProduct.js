import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import foodDeliveryService from "./food-delivery-services-animation.json";
import styled from "styled-components";
import api from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { apiPrefix } from "../config";
import axios from "axios";

const UpdateProductStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .filter-company--select {
    /* font-size: 1.6rem; */
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
    border: 1px solid #111;
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
`;

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("mobile");
  const [company, setCompany] = useState("apple");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("0");

  useEffect(() => {
    axios.get(`${apiPrefix}/products/${id}`).then((res) => {
      const data = res.data;
      setName(data.name);
      setCategory(data.category);
      setCompany(data.company);
      setImage(data.image);
      setPrice(data.price);
    });
  }, []);

  const handleUpdate = () => {
    const data = { name, category, company, image, price };
    api.putProduct(id, data).then(({ success, error }) => {
      if (success) {
        alert("Cập nhật sản phẩm thành công !");
        // Chuyển hướng tới trang chủ
        return navigate("/products");
      }
      if (error) {
        alert(error);
        // Hiện thông báo lỗi
      }
    });
  };

  return (
    <UpdateProductStyle>
      <div className="accountSetting  mb-10 flex pt-3 pb-3">
        <div className="w-[60%] pl-10">
          <h1 className="text-4xl text-gray-400 font-extrabold">
            Update Products
          </h1>
          <p className="text-base text-gray-400 mb-5">
            You can change products info in here...
          </p>
          <div className="formChangeDataUser space-y-6 mt-8">
            <div className="name">
              <label className="block text-2xl text-gray-400 mb-2">Name</label>
              <input
                type="text"
                className="px-7 py-5 border border-gray-400 placeholder:text-sm w-4/5 2xl:w-5/6 rounded-xl focus:outline-none"
                placeholder="Enter the Product Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="category">
              <label className="block text-2xl text-gray-400 mb-2">
                Category
              </label>
              <form action="#">
                <select
                  name="category"
                  style={{ width: 500 }}
                  id="category"
                  className="filter-company--select border-[1px solid #111] px-7 py-5 border border-gray-400 placeholder:text-sm w-[500px] 2xl:w-5/6 rounded-xl focus:outline-none"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="mobile">Mobile</option>
                  <option value="#" disabled></option>
                  <option value="laptop">Laptop</option>
                  <option value="#" disabled></option>
                  <option value="computer">Computer</option>
                  <option value="#" disabled></option>
                  <option value="accessories">Accessories</option>
                  <option value="#" disabled></option>
                  <option value="watch">Watch</option>
                </select>
              </form>
              {/* <input
                type="text"
                className="px-7 py-5 border border-gray-400 placeholder:text-sm w-4/5 2xl:w-5/6 rounded-xl focus:outline-none"
                placeholder="Enter the category..."
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              /> */}
            </div>
            <div className="filter-company">
              <label className="block text-2xl text-gray-400 mb-2 ">
                Company
              </label>
              <form action="#">
                <select
                  name="company"
                  style={{ width: 500 }}
                  id="company"
                  className="filter-company--select border-[1px solid #111] px-7 py-5 border border-gray-400 placeholder:text-sm w-[500px] 2xl:w-5/6 rounded-xl focus:outline-none"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                >
                  <option value="apple">Apple</option>
                  <option value="#" disabled></option>
                  <option value="dell">Dell</option>
                  <option value="#" disabled></option>
                  <option value="samsung">Samsung</option>
                  <option value="#" disabled></option>
                  <option value="asus">Asus</option>
                  <option value="#" disabled></option>
                  <option value="nokia">Nokia</option>
                  <option value="#" disabled></option>
                  <option value="lenova">Lenova</option>
                  <option value="#" disabled></option>
                  <option value="asus">Asus</option>
                  <option value="#" disabled></option>
                  <option value="rolex">Rolex</option>
                </select>
              </form>
            </div>
            <div className="image">
              <label className="block text-2xl text-gray-400 mb-2">Image</label>
              <input
                type="text"
                className="px-7 py-5 border border-gray-400 placeholder:text-sm w-4/5 2xl:w-5/6 rounded-xl focus:outline-none"
                placeholder="Enter the image..."
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="price">
              <label className="block text-2xl text-gray-400 mb-2">Price</label>
              <input
                type="number"
                className="px-7 py-5 border border-gray-400 placeholder:text-sm w-4/5 2xl:w-5/6 rounded-xl focus:outline-none"
                placeholder="Enter the your price..."
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button
              onClick={handleUpdate}
              type="button"
              className="px-8 py-2 rounded-lg bg-[#2AB2FF] hover:opacity-60 focus:outline-none text-white mt-5 ml-auto cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
        <div className="w-[40%] flex flex-col items-center content-center">
          <Lottie
            className="object-cover"
            animationData={foodDeliveryService}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
          />
          <span className="text-sm text-gray-400">
            Note: Change personal information for better account security.
          </span>
        </div>
      </div>
    </UpdateProductStyle>
  );
};

export default UpdateProduct;
