import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";
//import * as Config from "@app/config";

const konyCloudAuthRequest: AxiosInstance = axios.create({
  //baseURL: Config.KONY_CLOUD_LOGIN,
  headers: {
    // "X-Kony-App-Key": Config.X_Kony_App_Key,
    // "X-Kony-App-Secret": Config.X_Kony_App_Secret,
  },
});

konyCloudAuthRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log("API RESPONSE kony cloud login", response);
    return response;
  },
  (error: AxiosError) => {
    console.log("kony cloud login error", JSON.stringify(error));
    Promise.reject(handleApiError(error));
  }
);

konyCloudAuthRequest.interceptors.request.use(async function (config) {
  console.log("kony cloud login request", config);
  return config;
});

const httpRequest: AxiosInstance = axios.create({
  baseURL: "http://10.0.2.2:8082",
  headers: {
    // "X-Kony-App-Key": Config.X_Kony_App_Key,
    // "X-Kony-App-Secret": Config.X_Kony_App_Secret,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

httpRequest.interceptors.request.use(async function (config) {
  // const token = await AsyncStorage.getItem("claim_token");
  // console.log("service token after", token);
  // config.headers["X-Kony-Authorization"] = token ?? null;
  // console.log("request", config);
  return config;
});

httpRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log("API RESPONSE", response);
    return response?.data;
  },
  (error: AxiosError) => Promise.reject(handleApiError(error))
);

const handleApiError = (error: AxiosError) => {
  console.log("API ERROR", JSON.stringify(error));
  if (error?.response) {
    const { status } = error.response;
    if (status === 401) {
      return { message: "error code 401" };
    } else if (status === 404) {
      return { message: "Not Found" };
    } else if (status >= 400 && status < 500) {
      return { message: "something went wrong" };
    } else if (status >= 500) {
      return { message: "server error" };
    } else {
      return error;
    }
  }
  return { message: "network error" };
};

export const showError = (error: any) => {
  showMessage({
    message: JSON.stringify(error?.message ?? error),
    description: JSON.stringify(error?.request) ?? "",
    type: "danger",
    autoHide: true,
    //icon: { icon: 'danger', position: 'right' },
  });
};

export const showSuccess = () => {
  showMessage({
    message: "success",
    description: "success",
    type: "success",
    autoHide: true,
    // icon: { icon: 'success', position: 'right' },
  });
};

export { httpRequest, konyCloudAuthRequest };
