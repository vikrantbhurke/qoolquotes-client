import { setPage } from "@/quote/quote.slice";
import { oneTxOneBgButtonPseudo } from "@/global/styles/app.css";
import { getListButtonHeight } from "@/global/styles/global.styles";
import { Button } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCountTopicQuotes } from "../hooks/read";
import { globalUtility } from "@/global/utilities";
import { setFilterObject } from "@/quote/quote.slice";
import { useSelector } from "react-redux";

export const TopicGridItemLayout = ({ item }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isMobile } = useSelector((state: any) => state.view);
  const { topicQuotes } = useCountTopicQuotes(item.id);

  const handleNavigateToQuoteByTopic = () => {
    dispatch(setPage(1));
    dispatch(setFilterObject({ name: item.name, id: item.id }));
    navigate(`/quotes/topicId/${item.id}?page=1`);
  };

  return (
    <Button
      fullWidth
      h={getListButtonHeight(isMobile)}
      className={`${oneTxOneBgButtonPseudo}`}
      onClick={handleNavigateToQuoteByTopic}>
      {item.name} ({globalUtility.formatNumber(topicQuotes?.count || 0)})
    </Button>
  );
};
