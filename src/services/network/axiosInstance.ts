import axios from 'axios';
import { BASE_URL_BACKEND,BACKEND_TOKEN,APP_ENVIRONMENT } from '../../config/apiConfig'; 
import { preferences } from '../../utils/PreferenceManager ';

const axiosInstance = axios.create({
  baseURL: BASE_URL_BACKEND,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { cognitoToken, accessToken, language } = preferences;

    config.headers['authorization'] = `Bearer ${cognitoToken}`;
    config.headers['x-access-token'] = accessToken;
    config.headers['x-user-agent'] = 'postman';
    config.headers['language'] = language?.toLowerCase() || 'english';

    if (APP_ENVIRONMENT === 'DEV') {
      config.headers['x-be-dev-token'] = BACKEND_TOKEN;
    } else if (APP_ENVIRONMENT === 'UAT') {
      config.headers['x-be-uat-token'] = BACKEND_TOKEN;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;