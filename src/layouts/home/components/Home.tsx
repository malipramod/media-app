import { Search } from "./Search";
import { useMediaList } from "../hooks";

export const Home = () => {
  const { search, onSearch } = useMediaList({});

  return (
    <div>
      <Search onSearch={onSearch} search={search} />
    </div>
  );
};

export default Home;
