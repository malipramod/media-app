import React from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../../commons/hooks";
import { fetchMediaList } from "../services";
import { MediaSearchResult } from "../../../commons/types";

interface UseMediaListParams {
  search?: string;
}

const defaultMediaList: MediaSearchResult = {
  Response: "False",
  Search: [],
  totalResults: "0",
  Error: "Please enter a search term",
};

export const useMediaList = ({ search }: UseMediaListParams) => {
  const { onDebounce } = useDebounce({});
  const [params, setSearchParams] = useSearchParams();
  const query = params.get("s");
  const [_search, setSearch] = React.useState(query || search);
  const [isLoading, setIsLoading] = React.useState(false);
  const [mediaList, setMediaList] =
    React.useState<MediaSearchResult>(defaultMediaList);

  const handleSearch = (search: string) => {
    onDebounce(search, () => {
      setSearchParams({ s: search });
      setSearch(search);
    });
  };

  const getMediaList = React.useCallback(async (search?: string) => {
    if (!search) {
      setMediaList(defaultMediaList);
      return;
    }

    try {
      setIsLoading(true);
      const data = await fetchMediaList(search);
      setMediaList(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    getMediaList(_search);
  }, [_search, getMediaList]);

  React.useEffect(() => {
    setSearch(query || "");
  }, [query]);

  return {
    search: _search,
    isLoading,
    mediaList,
    onSearch: handleSearch,
  };
};
