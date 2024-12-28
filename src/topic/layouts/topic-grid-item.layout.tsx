import { setPage } from "@/quote/quote.slice";
import { oneBg, oneTx } from "@/global/styles/app.css";
import { listButtonHeight } from "@/global/styles/global.styles";
import { Button } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCountTopicQuotes } from "../hooks/read";
import { globalUtility } from "@/global/utilities";
import { setFilterObject } from "@/quote/quote.slice";

export const TopicGridItemLayout = ({ item }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { topicQuotes } = useCountTopicQuotes(item.id);

  const handleNavigateToQuoteByTopic = () => {
    dispatch(setPage(1));
    dispatch(setFilterObject({ name: item.name, id: item.id }));
    navigate(`/quotes/topicId/${item.id}?page=1`);
  };

  return (
    <Button
      fullWidth
      h={listButtonHeight}
      c={oneTx}
      bg={oneBg}
      onClick={handleNavigateToQuoteByTopic}>
      {item.name} ({globalUtility.formatNumber(topicQuotes?.count || 0)})
    </Button>
  );
};
