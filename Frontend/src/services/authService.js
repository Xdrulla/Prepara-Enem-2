import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login/`, {
      username: username,
      password: password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const userToken = response.data.token;
    const userData = response.data.user;

    localStorage.setItem('userToken', JSON.stringify({ token: userToken, ...userData }))

    return userData;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register/`, {
      username: username,
      email: email,
      password: password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
