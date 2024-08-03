import { Avatar, Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import styles from "./mediaCard.module.scss";

export interface MediaCardProps {
  list?: Array<string>;
  heading: string;
}

export const MediaCard = ({ list = [], heading }: MediaCardProps) =>
  list?.length > 0 && (
    <Card className={styles.card}>
      <CardHeader>
        <Heading size="md">{heading}</Heading>
      </CardHeader>
      <CardBody className={styles.cardBody}>
        {list?.map((item) => (
          <div className={styles.item} key={item}>
            <Avatar name={item?.trim()} />
            <Heading size="md">{item?.trim()}</Heading>
          </div>
        ))}
      </CardBody>
    </Card>
  );

export default MediaCard;
