import { MediaDetails } from "../../../commons/types";
import { api } from "../../../commons/api";

export const fetchMediaDetails = async <T = MediaDetails | MediaError>(
  id?: string
) => {
  const response = await api({
    method: "GET",
    url: `i=${id}`,
  });
  return response as Promise<T>;
};
