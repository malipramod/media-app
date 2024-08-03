import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Spinner,
  Heading,
  Text,
} from "@chakra-ui/react";
import { MediaSearchResult } from "../../../commons/types";
import styles from "../styles/mediaList.module.scss";

export interface MediaListProps {
  list?: MediaSearchResult;
  isLoading?: boolean;
}

export const MediaList = ({ list, isLoading }: MediaListProps) => {
  const navigate = useNavigate();
  const { Search = [], Response, Error } = list || {};

  if (isLoading) return <Spinner />;

  if (Response === "False") return <Heading size="lg">{Error}</Heading>;

  return (
    <div className={styles.list}>
      {Search?.map(({ imdbID, Poster, Title, Type, Year }) => (
        <Card
          key={imdbID}
          onClick={() => navigate(`details/${imdbID}`)}
          className={styles.card}
        >
          <CardHeader>
            <Heading
              className={styles.title}
              size="md"
              textTransform="uppercase"
            >
              {Title}
            </Heading>
          </CardHeader>
          <CardBody className={styles.body}>
            <Image className={styles.poster} src={Poster} alt={Title} />
          </CardBody>
          <CardFooter>
            <Text size="md">
              {Type} - {Year}
            </Text>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MediaList;
