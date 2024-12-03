import { setPage } from "@/quote/quote.slice";
import { oneTxOneBgButtonPseudo } from "@/global/styles/app.css";
import { listButtonHeight } from "@/global/styles/global.styles";
import { Button } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCountAuthorQuotes } from "../hooks/read";
import { globalUtility } from "@/global/utilities";

export const AuthorGridItemLayout = ({ item }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { authorQuotes } = useCountAuthorQuotes(item.id);

  const handleNavigateToQuoteByAuthor = () => {
    dispatch(setPage(1));
    navigate(`/quotes/authorId/${item.id}?page=1`, {
      state: { name: item.name, aid: item.id },
    });
  };

  return (
    <Button
      fullWidth
      h={listButtonHeight}
      className={oneTxOneBgButtonPseudo}
      onClick={handleNavigateToQuoteByAuthor}>
      {item.name} ({globalUtility.formatNumber(authorQuotes?.count || 0)})
    </Button>
  );
};
