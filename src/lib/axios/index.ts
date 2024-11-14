import axios from "axios";
import Cookies from "js-cookie";
import { getSession } from "next-auth/react";

const BASE_URL = "https://api.example.com";

export const publicApi = axios.create({
  baseURL: BASE_URL,
});

export const privateApi = axios.create({
  baseURL: BASE_URL,
});

// Function to refresh the token
async function refreshToken() {
  const currentAccessToken = Cookies.get("accessToken");

  try {
    const response = await publicApi.post("/user/auth/refresh-token", {
      accessToken: currentAccessToken,
    });

    const { accessToken, refreshToken } = response.data;

    // Store the new tokens in cookies
    Cookies.set("accessToken", accessToken, {
      secure: true,
      sameSite: "strict",
    });
    Cookies.set("refreshToken", refreshToken, {
      secure: true,
      sameSite: "strict",
    });

    // Update NextAuth session
    // const session = await getSession();
    // if (session) {
    //   await session.update({
    //     ...session,
    //     accessToken,
    //     refreshToken,
    //   });
    // }

    return accessToken;
  } catch (error) {
    console.error("Error refreshing token:", error);
    // Clear tokens and throw error to be handled by the interceptor
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    throw error;
  }
}

privateApi.interceptors.request.use(
  (config) => {
    const token = Cookies.get("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newAccessToken = await refreshToken();
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return privateApi(originalRequest);
      } catch (refreshError) {
        // Handle refresh error (e.g., logout user)
        window.location.href = "/api/auth/signout";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
