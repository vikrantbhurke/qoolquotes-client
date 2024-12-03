import { useSelector } from "react-redux";
import { useLikeQuote } from "../hooks/create";
import { useUnlikeQuote } from "../hooks/delete";
import { useCheckQuoteLiker } from "../hooks/read";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { I } from "@/global/components/components";

export const QuoteLikerLikeUnlikeButtonLayout = ({ qid }: any) => {
  const { auth } = useSelector((state: any) => state.auth);

  const { quoteLiker } = useCheckQuoteLiker({
    qid,
    lid: auth.id,
  });

  const { likeQuoteMutation, isPending: isLikingPending } = useLikeQuote();

  const { unlikeQuoteMutation, isPending: isUnlikingPending } =
    useUnlikeQuote();

  const handleLikeQuote = () => {
    likeQuoteMutation({ qid, lid: auth.id });
  };

  const handleUnlikeQuote = () => {
    unlikeQuoteMutation({ qid, lid: auth.id });
  };

  return (
    <>
      {quoteLiker?.exists ? (
        <ActionIcon
          c="crimson"
          onClick={handleUnlikeQuote}
          disabled={isUnlikingPending}>
          <I I={IconHeartFilled} />
        </ActionIcon>
      ) : (
        <ActionIcon
          c="crimson"
          onClick={handleLikeQuote}
          disabled={isLikingPending}>
          <I I={IconHeart} />
        </ActionIcon>
      )}
    </>
  );
};
