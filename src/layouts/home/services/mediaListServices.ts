import { api } from "../../../commons/api";

export const fetchMediaList = async <T = unknown>(search?: string) => {
  const response = await api({
    method: "GET",
    url: `s=${search}`,
  });
  return response as Promise<T>;
};
