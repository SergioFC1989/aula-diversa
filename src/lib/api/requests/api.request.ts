import axios from "axios";

import { axiosClient } from "../clients/axios.client";
import { DEFAULT_LIST_STATUS_ERROR } from "../consts/api.const";
import { IApiRequest } from "../types/api.type";

const isErrorStatus = (status: number) => DEFAULT_LIST_STATUS_ERROR.includes(status);

export const apiRequest = async ({ body, method = "GET", responseType = "json", url }: IApiRequest) => {
  try {
    const response = await axiosClient.request({
      method,
      url,
      ...(body !== undefined ? { data: body } : {}),
    });

    if (isErrorStatus(response.status)) {
      throw new Error(`Request error: ${response.status}`);
    }

    const contentType = response.headers["content-type"] ?? "";

    if (responseType === "text" || !contentType.includes("application/json")) {
      return response.data?.toString();
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (!error.response) {
        if (error.code === "ERR_NAME_NOT_RESOLVED") {
          throw new Error("Network error: El servidor no está accesible.");
        }
        throw new Error("Network error: No se obtuvo respuesta del servidor.");
      }
      throw new Error(`Axios error: ${error.message}`);
    }
    throw error;
  }
};
