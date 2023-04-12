import axios from "axios";
import { apiPrefix } from "../config";

export class Api {
  constructor() {
    this.client = axios.create({
      baseURL: apiPrefix,
      validateStatus: () => true,
    });
  }

  setToken(token) {
    this.client.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  async loginByPassword(username, password) {
    const res = await this.client.post("/login", {
      username,
      password,
    });
    if (res.data.token) {
      const { token, user } = res.data;
      this.setToken(token);
      return {
        success: true,
        token,
        user,
      };
    } else {
      const { error } = res.data;
      return {
        success: false,
        error,
      };
    }
  }

  async logout() {
    return;
  }

  async me() {
    const res = await this.client.get("/me");
    return res.data;
  }

  async addProduct(data) {
    const res = await this.client.post("/products", data);
    if (res.data.insertedId) {
      return {
        success: true,
      };
    } else {
      const { error } = res.data;
      return {
        success: false,
        error,
      };
    }
  }

  async putProduct(id, data) {
    const res = await this.client.put(`/products/${id}`, data);
    return res.data;
  }

  async putCart(productId, qty) {
    const res = await this.client.post(`/carts/${productId}`, { qty });
    return res.data;
  }

  async getCart() {
    const res = await this.client.get("/carts");
    return res.data;
  }

  async removeProduct(id) {
    const res = await this.client.delete(`/products/${id}`);
    if (res.data.deletedCount) {
      return {
        success: true,
      };
    } else {
      const { error } = res.data;
      alert(error);
    }
  }
}
