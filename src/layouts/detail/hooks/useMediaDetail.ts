import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { MediaDetails, MediaError } from "../../../commons/types";
import { fetchMediaDetails } from "../services";

export const useMediaDetail = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [mediaDetail, setMediaDetail] = React.useState<MediaDetails>();
  const [showMoreDetails, setShowMoreDetails] = React.useState(false);
  const { id } = useParams();
  const toast = useToast();
  const navigate = useNavigate();

  const getMediaDetail = React.useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetchMediaDetails(id);
      const { Error } = (response || {}) as unknown as MediaError;
      if (Error) {
        toast({
          title: "Error",
          description: Error,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        setMediaDetail(undefined);
      } else {
        setMediaDetail(response as MediaDetails);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, [id, toast]);

  React.useEffect(() => {
    getMediaDetail();
  }, [getMediaDetail]);

  const handleGoBack = () => {
    if (history.length > 2) navigate(-1);
    else navigate("/");
  };

  return {
    mediaDetail,
    isLoading,
    showMoreDetails,
    onShowMoreDetails: setShowMoreDetails,
    onNavigateBack: handleGoBack,
  };
};
