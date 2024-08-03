import { StarIcon } from "@chakra-ui/icons";
import { Heading } from "@chakra-ui/react";
import styles from "./rating.module.scss";

export const Rating = ({ rating = "" }: { rating: string }) => (
  <div className={styles.rating}>
    <Heading size="md">{rating}</Heading> /
    {Array(Math.round(parseInt(rating) || 0))
      .fill("")
      .map((_, i) => (
        <StarIcon className={styles.star} key={i} />
      ))}{" "}
  </div>
);

export default Rating;
