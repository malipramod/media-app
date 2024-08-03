import Search from "./Search";
import MediaList from "./MediaList";
import { useMediaList } from "../hooks";
import styles from "../styles/home.module.scss";

export const Home = () => {
  const { search, isLoading, mediaList, onSearch } = useMediaList({});

  return (
    <div className={styles.home}>
      <Search onSearch={onSearch} search={search} />
      <MediaList list={mediaList} isLoading={isLoading} />
    </div>
  );
};

export default Home;
