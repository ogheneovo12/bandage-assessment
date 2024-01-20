import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { APP_CONFIG } from "@/common/config/";
import { prepareHeaders } from "@/common/utils/prepare-headers";

const baseQuery = fetchBaseQuery({
  baseUrl: APP_CONFIG.BASE_API_URL,
  prepareHeaders,
});

export const ApiService = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
  tagTypes: [],
});

export default ApiService;
