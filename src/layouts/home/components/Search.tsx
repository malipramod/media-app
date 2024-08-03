import React from "react";
import { Input } from "@chakra-ui/react";

export interface SearchProps {
  search?: string;
  onSearch: (search: string) => void;
}
export const Search = ({ search, onSearch }: SearchProps) => {
  const [searchText, setSearchText] = React.useState(search);

  React.useEffect(() => {
    setSearchText(search);
  }, [search]);

  const handleSearch = (search: string) => {
    onSearch(search);
    setSearchText(search);
  };

  return (
    <Input
      value={searchText || ""}
      minWidth="30rem"
      minHeight="4rem"
      onChange={(event) => {
        handleSearch(event.target.value);
      }}
      size="lg"
      width="fit-content"
      placeholder="Search movies and series"
    />
  );
};

export default Search;
