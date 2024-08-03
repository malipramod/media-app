import React from "react";
import { useDebounce } from "../../../commons/hooks";
import { fetchMediaList } from "../services";

interface UseMediaListParams {
  search?: string;
}
export const useMediaList = ({ search }: UseMediaListParams) => {
  const { onDebounce } = useDebounce({});
  const [_search, setSearch] = React.useState(search);

  const handleSearch = (search: string) => {
    onDebounce(search, () => setSearch(search));
  };

  const getMediaList = React.useCallback(async (search?: string) => {
    if (!search) return;
    try {
      const data = await fetchMediaList(search);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  React.useEffect(() => {
    getMediaList(_search);
  }, [_search, getMediaList]);

  return {
    search: _search,
    onSearch: handleSearch,
  };
};
