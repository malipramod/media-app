import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Skeleton,
} from "@chakra-ui/react";
import { CalendarIcon, StarIcon } from "@chakra-ui/icons";
import { MediaSearchResult } from "../../../commons/types";
import styles from "../styles/mediaList.module.scss";

export interface MediaListProps {
  list?: MediaSearchResult;
  isLoading?: boolean;
}

export const MediaList = ({ list, isLoading }: MediaListProps) => {
  const navigate = useNavigate();
  const { Search = [], Response, Error } = list || {};

  if (isLoading)
    return (
      <div className={styles.loading}>
        {Array(10)
          .fill("")
          .map((_, index) => (
            <Skeleton key={index} className={styles.skeleton} />
          ))}
      </div>
    );

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
            {Poster.indexOf("http") === 0 && (
              <Image className={styles.poster} src={Poster} alt={Title} />
            )}
          </CardBody>
          <CardFooter className={styles.footer}>
            <div className={styles.item}>
              <CalendarIcon />
              <Heading size="sm">{Year}</Heading>
            </div>
            <div className={styles.item}>
              <StarIcon />
              <Heading size="sm">{Type}</Heading>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MediaList;
