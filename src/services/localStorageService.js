const USER_TOKEN = "classroom_web_token";
export const getUserToken = () => localStorage.getItem(USER_TOKEN);
export const setUserToken = (token) => localStorage.setItem(USER_TOKEN, token);
export const deleteUserToken = () => localStorage.removeItem(USER_TOKEN);

const USER_ID = "classroom_web_user_id";
export const getUserId = () => localStorage.getItem(USER_ID);
export const setUserId = (id) => localStorage.setItem(USER_ID, id);
export const deleteUserId = () => localStorage.removeItem(USER_ID);