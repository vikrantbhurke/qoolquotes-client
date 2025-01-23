import { setPage } from "@/quote/quote.slice";
import { oneTxOneBgButtonPseudo } from "@/global/styles/app.css";
import { getListButtonHeight } from "@/global/styles/global.styles";
import { Button } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCountAuthorQuotes } from "../hooks/read";
import { globalUtility } from "@/global/utilities";
import { setFilterObject } from "@/quote/quote.slice";
import { useSelector } from "react-redux";

export const AuthorGridItemLayout = ({ item }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isMobile } = useSelector((state: any) => state.view);
  const { authorQuotes } = useCountAuthorQuotes(item.id);

  const handleNavigateToQuoteByAuthor = () => {
    dispatch(setPage(1));
    navigate(`/quotes/authorId/${item.id}?page=1`);
    dispatch(setFilterObject({ name: item.name, id: item.id }));
  };

  return (
    <Button
      fullWidth
      h={getListButtonHeight(isMobile)}
      className={`${oneTxOneBgButtonPseudo}`}
      onClick={handleNavigateToQuoteByAuthor}>
      {item.name} ({globalUtility.formatNumber(authorQuotes?.count || 0)})
    </Button>
  );
};
