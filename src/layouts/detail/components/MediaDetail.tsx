import { Spinner, Heading, Button, IconButton } from "@chakra-ui/react";
import { CalendarIcon, TimeIcon, ArrowBackIcon } from "@chakra-ui/icons";
import MediaCard from "../../../components/media-card";
import MediaPoster from "../../../components/media-poster";
import AdditionalMediaDetails from "./AdditionalMediaDetails";
import { useMediaDetail } from "../hooks";
import Rating from "../../../components/rating";
import Tags from "../../../components/tags";
import styles from "../styles/detail.module.scss";

export const MediaDetail = () => {
  const {
    isLoading,
    mediaDetail,
    showMoreDetails,
    onShowMoreDetails,
    onNavigateBack,
  } = useMediaDetail();
  const {
    Poster = "",
    Title = "",
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
    <>
      <div className={styles.back}>
        <IconButton
          onClick={onNavigateBack}
          aria-label="Search database"
          icon={<ArrowBackIcon />}
        />
        <Heading size="md">Back to Search</Heading>
      </div>
      <div className={styles.container}>
        <MediaPoster src={Poster} title={Title} className={styles.poster} />
        <div className={styles.details}>
          <Heading size="3xl">{Title}</Heading>
          <Heading size="lg">{Plot}</Heading>
          <Rating rating={imdbRating} />
          <Tags tags={Genre?.split(",") || []} />
          <div className={styles.iconContainer}>
            <TimeIcon className={styles.icon} />
            <Heading size="lg">{Runtime}</Heading>
          </div>
          <div className={styles.iconContainer}>
            <CalendarIcon className={styles.icon} />
            <Heading size="lg">{Released}</Heading>
          </div>
          <Button
            size="lg"
            colorScheme="blue"
            onClick={() => onShowMoreDetails(true)}
          >
            View More details
          </Button>
        </div>
        <div className={styles.misc}>
          <MediaCard
            list={Director?.toLowerCase() !== "n/a" ? Director?.split(",") : []}
            heading="Director(s)"
          />
          <MediaCard
            list={Actors?.toLowerCase() !== "n/a" ? Actors?.split(",") : []}
            heading="Cast"
          />
        </div>
        <AdditionalMediaDetails
          mediaDetail={mediaDetail}
          isOpen={showMoreDetails}
          onClose={() => onShowMoreDetails(false)}
        />
      </div>
    </>
  );
};

export default MediaDetail;
