import { RootState } from "@/global/states/store";
import { GetQuotesByAuthorIdGrid } from "@/quote/grids/get-quotes-by-author-id.grid";
import { Container } from "@mantine/core";
import { useSelector } from "react-redux";

export const FeedPage = () => {
  const { mainWidth } = useSelector((state: RootState) => state.view);

  return (
    <Container size={mainWidth} p={0}>
      <GetQuotesByAuthorIdGrid />
    </Container>
  );
};
