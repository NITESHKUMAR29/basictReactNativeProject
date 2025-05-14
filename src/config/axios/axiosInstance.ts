import { preferences } from "@/src/utils/preferenceManager";
import { APP_ENVIRONMENT, BACKEND_TOKEN, BASE_URL } from "@/src/utils/baseUrl";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const { cognitoToken, accessToken } = preferences;
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["authorization"] = `Bearer ${cognitoToken}`;
    config.headers["x-access-token"] = accessToken;
    config.headers["x-user-agent"] = "postman";
    if (APP_ENVIRONMENT === "DEV") {
      config.headers["x-be-dev-token"] = BACKEND_TOKEN;
    } else if (APP_ENVIRONMENT === "UAT") {
      config.headers["x-be-uat-token"] = BACKEND_TOKEN;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
