import { getToken } from "@/common/utils/token.utils";
import { APP_CONFIG } from "@/common/config";

export const prepareHeaders = (headers: Headers) => {
    const token = getToken(APP_CONFIG.ACCESS_TOKEN_KEY);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
};