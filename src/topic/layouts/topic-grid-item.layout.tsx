import { setPage } from "@/quote/quote.slice";
import { themeTxPseudoStyle } from "@/global/styles/theme-tx-pseudo.css";
import { oneBg } from "@/global/styles/renamed.variables";
import { buttonHeight, buttonNormal } from "@/global/styles/global.styles";
import { Button, Center } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCountTopicQuotes } from "../hooks/read";
import { globalUtility } from "@/global/utilities";
import { setFilterObject } from "@/quote/quote.slice";
import { CustomSkeleton } from "@/global/components/reusables";

export const TopicGridItemLayout = ({ item }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { topicQuotes } = useCountTopicQuotes(item.id);

  const handleNavigateToQuoteByTopic = () => {
    dispatch(setPage(1));
    dispatch(setFilterObject({ name: item.name, id: item.id }));
    navigate(`/quotes/topicId/${item.id}?page=1`);
  };

  const isPending = item.isPending;

  return (
    <>
      {isPending ? (
        <Center h={buttonHeight}>
          <CustomSkeleton />
        </Center>
      ) : (
        <Button
          fullWidth
          h={buttonHeight}
          bg={oneBg}
          className={`${themeTxPseudoStyle}`}
          fw={buttonNormal}
          onClick={handleNavigateToQuoteByTopic}>
          {item.name} ({globalUtility.formatNumber(topicQuotes?.count || 0)})
        </Button>
      )}
    </>
  );
};
