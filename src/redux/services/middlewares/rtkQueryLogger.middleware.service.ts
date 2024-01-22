// import { handleLogout } from "@/redux/features";
import { MiddlewareAPI, isRejectedWithValue } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
// import { toast } from "react-hot-toast";

/**
 * Log a warning and show a toast!
 */

const ignoreEndpoints = ["logoutCurrentUser", "getLoggedInUserInfo"];
const ignore401 = ["verifyUserEmail", "login"];

export const rtkQueryErrorLogger =
  (api: MiddlewareAPI<any>) => (next: any) => (action: any) => {
    let serverMessage = "Oops!! an error Ocurred";

    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these use matchers!
    if (isRejectedWithValue(action)) {
      if (
        action.payload &&
        action.payload.status === 401 &&
        !ignore401?.includes(action?.meta?.arg?.endpointName)
      ) {
        // api.dispatch(handleLogout(() => window.location.replace("/")));
        return;
      }
      if (
        action.type === "api/executeMutation/rejected" &&
        ignoreEndpoints.includes(action?.meta?.arg?.endpointName)
      ) {
        return;
      }

      serverMessage =
        action?.payload?.data?.message?.message ||
        action?.payload?.data?.message;
      serverMessage = Array.isArray(serverMessage)
        ? serverMessage?.join(", ")
        : serverMessage;

      if (Array.isArray(action?.payload?.data?.errors)) {
        serverMessage = action?.payload?.data?.errors
          ?.map((err: any) => err.message)
          ?.join(",");
      }

      if (action?.payload?.status === "FETCH_ERROR") {
        toast.error(
          "Network Error,Please check that you have active internet connection"
        );
      } else {
        toast.error(
          serverMessage ||
            action.payload?.data?.error ||
            action?.error?.message ||
            action?.payload?.data?.message?.message ||
            "OopS! something went wrong"
        );
      }
    }

    return next(action);
  };
