import { MediaSearchResult } from "../../../commons/types";
import { api } from "../../../commons/api";

export const fetchMediaList = async <T = MediaSearchResult>(
  search?: string
) => {
  const response = await api({
    method: "GET",
    url: `s=${search}`,
  });
  return response as Promise<T>;
};
