import { Heading, Image } from "@chakra-ui/react";

export interface MediaPosterProps {
  src: string;
  title: string;
  className?: string;
}

export const MediaPoster = ({ src, title, className }: MediaPosterProps) => {
  return src?.indexOf("http") === 0 ? (
    <Image className={className} src={src} alt={title} />
  ) : (
    <Heading size="lg">No Post for this media</Heading>
  );
};

export default MediaPoster;
