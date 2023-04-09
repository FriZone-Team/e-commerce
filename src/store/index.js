import store from "./store";
import {login} from "./user/actions";

const userRaw = localStorage.getItem("user_loggedIn");
if (userRaw) {
    const user = JSON.parse(userRaw);
    store.dispatch(login(user));
}

export {store};
