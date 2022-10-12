import axios from "axios";

export const auth = async () => {
  try {
    let token = sessionStorage.getItem("accesstoken");
    let res = await axios.get(
      `${process.env.REACT_APP_BACK_END}/api/auth/authenticated-user-details`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const login = async (email, password) => {
  try {
    let res = await axios.post(
      `${process.env.REACT_APP_BACK_END}/api/auth/login`,
      {
        email: email,
        password: password,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const register = async (name, email, password, confirmPass) => {
  try {
    let res = await axios.post(
      `${process.env.REACT_APP_BACK_END}/api/auth/register`,
      {
        name: name,
        email: email,
        password: password,
        password_confirmation: confirmPass,
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
