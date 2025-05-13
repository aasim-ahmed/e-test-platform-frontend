// src/services/apiClient.js
import axios from 'axios';

// Create Axios instance
const apiClient = axios.create({
  baseURL: 'http://localhost:5500/', // 🔁 Change to your actual backend URL
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Include cookies if needed for auth
});

// Optional: Add JWT token automatically to requests
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // or from Redux
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Global error handler
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Example: Auto logout on 401
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
