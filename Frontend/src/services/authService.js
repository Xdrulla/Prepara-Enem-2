import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const login = async (username, password, setState) => {
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

    if (userData && userToken) {
      localStorage.setItem('userToken', JSON.stringify({ token: userToken, ...userData }));
      console.log('User data stored:', { token: userToken, ...userData });

      setState({ token: userToken, ...userData });
    } else {
      console.log('Failed to retrieve user data');
    }

    return userData;
  } catch (error) {
    console.error('Login error:', error);
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
