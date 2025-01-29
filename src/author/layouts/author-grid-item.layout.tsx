import { setPage } from "@/quote/quote.slice";
import { oneBg, themeTxStyle } from "@/global/styles/app.css";
import { buttonHeight } from "@/global/styles/global.styles";
import { Button } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCountAuthorQuotes } from "../hooks/read";
import { globalUtility } from "@/global/utilities";
import { setFilterObject } from "@/quote/quote.slice";

export const AuthorGridItemLayout = ({ item }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authorQuotes } = useCountAuthorQuotes(item.id);

  const handleNavigateToQuoteByAuthor = () => {
    dispatch(setPage(1));
    navigate(`/quotes/authorId/${item.id}?page=1`);
    dispatch(setFilterObject({ name: item.name, id: item.id }));
  };

  return (
    <Button
      fullWidth
      h={buttonHeight}
      bg={oneBg}
      className={`${themeTxStyle}`}
      onClick={handleNavigateToQuoteByAuthor}>
      {item.name} ({globalUtility.formatNumber(authorQuotes?.count || 0)})
    </Button>
  );
};
