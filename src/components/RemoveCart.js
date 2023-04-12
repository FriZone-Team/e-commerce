import React from "react";
import { Button } from "../styles/Button";

const RemoveCart = () => {
  return (
    <Button className="btn" style={{ backgroundColor: "red", color: "white" }}>
      Delete product
    </Button>
  );
};

export default RemoveCart;
