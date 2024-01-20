import { APP_CONFIG } from '@/common/config/index';

export const setAccessToken = (token: string) => {
  localStorage.setItem(APP_CONFIG.ACCESS_TOKEN_KEY, token);
};

export const setRefreshToken = (token: string) => {
  localStorage.setItem(APP_CONFIG.REFRESH_TOKEN_KEY, token);
};

export const getToken = (tokenKey: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(tokenKey);
  } else {
    return null;
  }
};
export const getAccessToken = () => getToken(APP_CONFIG.ACCESS_TOKEN_KEY);

export const clearTokens = () => {
  localStorage.removeItem(APP_CONFIG.ACCESS_TOKEN_KEY);
  localStorage.removeItem(APP_CONFIG.REFRESH_TOKEN_KEY);
};