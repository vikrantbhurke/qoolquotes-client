import { RootState } from "@/global/states/store";
import { getMainContentHeight } from "@/global/styles/global.styles";
import { GetQuotesByAuthorIdGrid } from "@/quote/grids/get-quotes-by-author-id.grid";
import { Container, ScrollArea } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useSelector } from "react-redux";

export const FeedPage = () => {
  const { width } = useViewportSize();

  const { mainWidth, headerHeight, footerHeight } = useSelector(
    (state: RootState) => state.view
  );

  return (
    <Container size={mainWidth} p={0}>
      <ScrollArea
        h={getMainContentHeight(headerHeight, footerHeight, 0, width)}>
        <GetQuotesByAuthorIdGrid />
      </ScrollArea>
    </Container>
  );
};
