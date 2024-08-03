import { Spinner, Image, Heading, Button } from "@chakra-ui/react";
import { CalendarIcon, RepeatClockIcon } from "@chakra-ui/icons";
import MediaCard from "../../../components/media-card";
import { useMediaDetail } from "../hooks";
import Rating from "../../../components/rating";
import Tags from "../../../components/tags";
import styles from "../styles/detail.module.scss";

export const MediaDetail = () => {
  const { isLoading, mediaDetail } = useMediaDetail();

  console.log(mediaDetail);
  const {
    Poster,
    Title,
    Plot,
    Director,
    Actors,
    Genre,
    imdbRating = "",
    Runtime,
    Released,
  } = mediaDetail || {};

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.container}>
      <Image className={styles.poster} src={Poster} alt={Title} />
      <div className={styles.details}>
        <Heading size="3xl">{Title}</Heading>
        <Heading size="lg">{Plot}</Heading>
        <Rating rating={imdbRating} />
        <Tags tags={Genre?.split(",") || []} />
        <div className={styles.iconContainer}>
          <RepeatClockIcon className={styles.icon} />
          <Heading size="lg">{Runtime}</Heading>
        </div>
        <div className={styles.iconContainer}>
          <CalendarIcon className={styles.icon} />
          <Heading size="lg">{Released}</Heading>
        </div>
        <Button size="lg" colorScheme="blue">
          View More details
        </Button>
      </div>
      <div className={styles.misc}>
        <MediaCard list={Director?.split(",")} heading="Director(s)" />
        <MediaCard list={Actors?.split(",")} heading="Cast" />
      </div>
    </div>
  );
};

export default MediaDetail;
