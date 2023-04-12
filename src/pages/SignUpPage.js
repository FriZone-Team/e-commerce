import React, { useState } from "react";

import AuthenticationPage from "./AuthenticationPage";

import { NavLink, useNavigate } from "react-router-dom";

import Field from "../components/field/Field";
import Label from "../components/label/Label";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import InputPasswordToggle from "../components/input/InputPasswordToggle";
import axios from "axios";
import { apiPrefix } from "../config";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios
      .post(`${apiPrefix}/register`, { name, username, password })
      .then((res) => {
        if (res.data.userId) {
          alert("Đăng ký thành công");
          navigate("/auth/sign-in");
        } else {
          const { error } = res.data;
          alert(error);
        }
      });
  };

  return (
    <AuthenticationPage>
      <form
        className="form"
        // onSubmit={handleSubmit(handleSignUp)}
        autoComplete="off"
      >
        <Field>
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            // style={{ textTransform: "lowercase" }}
            type="text"
            name="fullname"
            placeholder="Enter your fullname"
            // control={control}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Field>
        <Field>
          <Label htmlFor="fullname">Username</Label>
          <Input
            // style={{ textTransform: "lowercase" }}
            type="text"
            name="username"
            placeholder="Enter your username"
            // control={control}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
          <InputPasswordToggle
            // style={{ textTransform: "lowercase" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></InputPasswordToggle>
        </Field>
        <div className="have-account">
          You already have an account?{" "}
          <NavLink to={"/auth/sign-in"}>Login</NavLink>{" "}
        </div>
        <Button
          type="button"
          onClick={handleSubmit}
          className="w-full max-w-[300px] mx-auto"
        >
          Sign Up
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignUpPage;
