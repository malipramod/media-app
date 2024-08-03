import { Input } from "@chakra-ui/react";
import React from "react";

export interface SearchProps {
  search?: string;
  onSearch: (search: string) => void;
}
export const Search = ({ search, onSearch }: SearchProps) => {
  const [searchText, setSearchText] = React.useState(search);

  const handleSearch = (search: string) => {
    onSearch(search);
    setSearchText(search);
  };

  return (
    <Input
      value={searchText || ""}
      onChange={(event) => {
        handleSearch(event.target.value);
      }}
      size="lg"
      width="fit-content"
      placeholder="Search movies and series"
    />
  );
};
