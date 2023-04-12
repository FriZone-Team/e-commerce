export const login = (state, { payload }) => {
  if (payload.token) {
    localStorage.setItem("user_loggedIn", payload.token);
  }
  return {
    ...state,
    isLoggedIn: true,
    user: payload,
    token: payload.token,
  };
};

export const logout = (state) => {
  localStorage.removeItem("user_loggedIn");
  return {
    ...state,
    isLoggedIn: false,
    user: null,
  };
};
