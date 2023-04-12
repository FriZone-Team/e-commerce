import store from "./store";
import { login } from "./user/actions";
import { setItems } from "./cart/actions";
import api from "../api";

const token = localStorage.getItem("user_loggedIn");
if (token) {
  api.setToken(token);
  api.me().then((user) => {
    store.dispatch(login({ token, user }));
    api.getCart().then((items) => {
      store.dispatch(setItems(items));
    });
  });
}

export { store };
