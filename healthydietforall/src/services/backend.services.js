import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const createAccount = async (fullName, email, password) => {
  const url = `${baseUrl}/users/register`;

  const data = { fullName, email, password };

  const config = {
    method: "POST",
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

const login = async (email, password) => {
  const url = `${baseUrl}/sessions/login`;
  const config = {
    method: "POST",
    url,
    headers: {
      "Content-Type": "application/json",
    },
    data: { email, password },
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (e) {
    throw new Error(e.response.data.message);
  }
};

const logout = async () => {
  const url = `${baseUrl}/sessions/logout`;

  const config = {
    method: "DELETE",
    url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
    },
  };

  try {
    const response = await axios.request(config);
    return Promise.resolve(response.status);
  } catch (e) {
    reportError(e);
    return Promise.reject(e.response.data.message);
  }
};

export { createAccount, login, logout };
