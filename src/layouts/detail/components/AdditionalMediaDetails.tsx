import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Heading,
  Card,
  CardBody,
  Tag,
} from "@chakra-ui/react";
import { MediaDetails } from "../../../commons/types";
import styles from "../styles/additionalMediaDetails.module.scss";

export interface AdditionalMediaDetailsProps {
  isOpen: boolean;
  mediaDetail?: MediaDetails;
  onClose: () => void;
}

export const AdditionalMediaDetails = ({
  isOpen,
  mediaDetail,
  onClose,
}: AdditionalMediaDetailsProps) => {
  const { Awards, Ratings = [], BoxOffice, Title } = mediaDetail || {};
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Heading size="xl">{Title}</Heading>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.modalBody}>
          {Awards && (
            <Card className={styles.card}>
              <CardBody className={styles.cardBody}>
                <Heading size="lg" className={styles.label}>
                  Awards
                </Heading>
                <Heading size="md">{Awards}</Heading>
              </CardBody>
            </Card>
          )}
          {Ratings?.length > 0 && (
            <Card className={styles.card}>
              <CardBody className={styles.cardBody}>
                <Heading size="lg" className={styles.label}>
                  Ratings
                </Heading>
                <Heading size="md" className={styles.ratings}>
                  {Ratings?.map(({ Source, Value }) => (
                    <Tag
                      className={styles.rating}
                      size="xl"
                      key={Source}
                    >{`${Source}: ${Value}`}</Tag>
                  ))}
                </Heading>
              </CardBody>
            </Card>
          )}
          {BoxOffice && (
            <Card className={styles.card}>
              <CardBody className={styles.cardBody}>
                <Heading size="lg" className={styles.label}>
                  Box Office
                </Heading>
                <Heading className={styles.boxOffice} size="md">
                  {BoxOffice}
                </Heading>
              </CardBody>
            </Card>
          )}
        </ModalBody>
        <ModalFooter>
          <Button size="lg" colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AdditionalMediaDetails;
