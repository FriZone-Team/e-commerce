const getState = (state) => state.user;

export const getIsLoggedIn = (state) => getState(state).isLoggedIn;

export const getUser = (state) => getState(state).user?.user;

export const getIsAdmin = (state) => getUser(state)?.isAdmin;
