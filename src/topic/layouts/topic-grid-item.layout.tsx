import { setPage } from "@/quote/quote.slice";
import { oneTxOneBgButtonPseudo } from "@/global/styles/app.css";
import { listButtonHeight } from "@/global/styles/global.styles";
import { Button } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCountTopicQuotes } from "../hooks/read";
import { globalUtility } from "@/global/utilities";

export const TopicGridItemLayout = ({ item }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { topicQuotes } = useCountTopicQuotes(item.id);

  const handleNavigateToQuoteByTopic = () => {
    dispatch(setPage(1));
    navigate(`/quotes/topicId/${item.id}?page=1`, {
      state: { name: item.name, tid: item.id },
    });
  };

  return (
    <Button
      fullWidth
      h={listButtonHeight}
      className={oneTxOneBgButtonPseudo}
      onClick={handleNavigateToQuoteByTopic}>
      {item.name} ({globalUtility.formatNumber(topicQuotes?.count || 0)})
    </Button>
  );
};
