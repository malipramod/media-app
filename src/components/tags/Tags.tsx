import { Tag } from "@chakra-ui/react";
import styles from "./tags.module.scss";

export interface TagProps {
  tags: Array<string>;
}

export const Tags = ({ tags = [] }: TagProps) => {
  return (
    <div className={styles.tags}>
      {tags.map((tag, index) => (
        <Tag size="lg" variant="solid" className={styles.tag} key={index}>
          {tag}
        </Tag>
      ))}
    </div>
  );
};

export default Tags;
