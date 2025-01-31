import { oneBg, roundBorderStyle, twoBg } from "@/global/styles/app.css";
import {
  addBoxShadowStyles,
  layoutCompHeight,
  quoteLayoutWidth,
  removeBoxShadowStyles,
} from "@/global/styles/global.styles";
import { Box, Center, Container, Stack } from "@mantine/core";
import { useGetRandomQuotes } from "../hooks/read";
import { QuoteGridItemLayout } from "../layouts";
import DesktopLeaderboard from "@/global/ads/DesktopLeaderboard";
import Banner320x50 from "@/global/ads/Banner320x50";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useIsComponentVisible } from "@/global/hooks";
import { setIsAdHeaderVisible } from "@/global/states/view.slice";
import { CustomGrid } from "@/global/components/grids";
import { SeoComponent } from "@/global/components/reusables";

export const GetRandomQuotesCustomGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  useIsComponentVisible(ref, setIsAdHeaderVisible);
  const { isMobile } = useSelector((state: any) => state.view);

  const { randomQuotes, isLoading, isError, hasMore, setPage } =
    useGetRandomQuotes();

  return (
    <>
      <SeoComponent
        title={`Homepage`}
        description={`Browse quotes and find inspiration.`}
      />

      <Box component="div" bg={twoBg}>
        <Container
          size={quoteLayoutWidth}
          p={0}
          h={`calc(100vh - ${layoutCompHeight}px - ${isMobile ? layoutCompHeight : 0}px)`}>
          <Stack gap={0} h="100%">
            <Center
              bg={oneBg}
              ref={ref}
              style={{ zIndex: 1 }}
              className={`${roundBorderStyle}`}>
              <Stack h={isMobile ? 50 : 90}>
                {isMobile ? <Banner320x50 /> : <DesktopLeaderboard />}
              </Stack>
            </Center>

            <CustomGrid
              dataArray={randomQuotes}
              GridItemLayout={QuoteGridItemLayout}
              isLoading={isLoading}
              isError={isError}
              hasMore={hasMore}
              setPage={setPage}
              gridBg={isMobile ? oneBg : twoBg}
              onMountEnter={(e: any) => !isMobile && addBoxShadowStyles(e)}
              onMountLeave={(e: any) => !isMobile && removeBoxShadowStyles(e)}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};
