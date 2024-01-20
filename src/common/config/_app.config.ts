export const APP_CONFIG = {
  ACCESS_TOKEN_KEY: "accessToken",
  REFRESH_TOKEN_KEY: "refreshToken",
  ENVIRONMENT: {
    development: process.env.NODE_ENV === "development",
    production: process.env.NODE_ENV === "production",
  },
  BASE_API_URL:
    process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT || "https://dummyjson.com",
};
