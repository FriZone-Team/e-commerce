import React from "react";
import Lottie from "lottie-react";
import foodDeliveryService from "./food-delivery-services-animation.json";
import styled from "styled-components";

const AddcartStyle = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .filter-company--select {
    /* font-size: 1.6rem; */
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
`;

const AddCart = () => {
  return (
    <AddcartStyle>
      <div className="accountSetting  mb-10 flex pt-3 pb-3">
        <div className="w-[60%] pl-10">
          <h1 className="text-4xl text-gray-400 font-extrabold">
            Add Products
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
              />
            </div>
            <div className="category">
              <label className="block text-2xl text-gray-400 mb-2">
                Category
              </label>
              <input
                type="text"
                className="px-7 py-5 border border-gray-400 placeholder:text-sm w-4/5 2xl:w-5/6 rounded-xl focus:outline-none"
                placeholder="Enter the category..."
              />
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
                  className="filter-company--select px-7 py-5 border border-gray-400 placeholder:text-sm w-[500px] 2xl:w-5/6 rounded-xl focus:outline-none"
                >
                  <option value="apple">Apple</option>
                  <option value="#" disabled></option>
                  <option value="dell">Dell</option>
                  <option value="#" disabled></option>
                  <option value="samsung">Samsung</option>
                  <option value="#" disabled></option>
                  <option value="asus">Asus</option>
                </select>
              </form>
            </div>
            <label className="block text-2xl text-gray-400 mb-2">Image</label>
            <input
              id="changeImg"
              type="file"
              accept="image/*"
              className="hidden"
            />
            <div className="changeImg w-[160px] h-[160px] overflow-hidden rounded-full relative my-5">
              <img
                className="object-cover w-full h-full"
                src="./picture.png"
                alt="Img"
              />
              <label
                htmlFor="changeImg"
                className="absolute w-full h-full cursor-pointer top-0 left-0"
              />
            </div>
            <div className="price">
              <label className="block text-2xl text-gray-400 mb-2">Price</label>
              <input
                type="number"
                className="px-7 py-5 border border-gray-400 placeholder:text-sm w-4/5 2xl:w-5/6 rounded-xl focus:outline-none"
                placeholder="Enter the your price..."
              />
            </div>
            <button className="px-8 py-2 rounded-lg bg-[#2AB2FF] hover:opacity-60 focus:outline-none text-white mt-5 ml-auto cursor-pointer">
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
    </AddcartStyle>
  );
};

export default AddCart;
