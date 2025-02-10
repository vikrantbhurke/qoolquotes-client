import { setPage } from "@/quote/quote.slice";
import { themeDefaultTxPseudoStyle } from "@/global/styles/theme-tx-pseudo.css";
import { oneDefaultBg } from "@/global/styles/renamed.variables";
import { buttonHeight, buttonNormal } from "@/global/styles/global.styles";
import { Button, Center } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCountAuthorQuotes } from "../hooks/read";
import { globalUtility } from "@/global/utilities";
import { setFilterObject } from "@/quote/quote.slice";
import { CustomSkeleton } from "@/global/components/reusables";

export const AuthorGridItemLayout = ({ item }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authorQuotes } = useCountAuthorQuotes(item.id);

  const handleNavigateToQuoteByAuthor = () => {
    dispatch(setPage(1));
    navigate(`/quotes/authorId/${item.id}?page=1`);
    dispatch(setFilterObject({ name: item.name, id: item.id }));
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
          bg={oneDefaultBg}
          className={`${themeDefaultTxPseudoStyle}`}
          fw={buttonNormal}
          onClick={handleNavigateToQuoteByAuthor}>
          {item.name} ({globalUtility.formatNumber(authorQuotes?.count || 0)})
        </Button>
      )}
    </>
  );
};
