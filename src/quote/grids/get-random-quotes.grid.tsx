import { borderBottomShadow, oneBg, twoBg } from "@/global/styles/app.css";
import {
  addBoxShadow,
  footerHeight,
  getGridItemBorderWithBorder,
  headerHeight,
  removeBoxShadow,
} from "@/global/styles/global.styles";
import { Center, Stack } from "@mantine/core";
import { useGetRandomQuotes } from "../hooks/read";
import { QuoteGridItemLayout } from "../layouts";
import DesktopLeaderboard from "@/ads/DesktopLeaderboard";
import Banner320x50 from "@/ads/Banner320x50";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useIsComponentVisible } from "@/global/hooks";
import { setIsAdHeaderVisible } from "@/global/states/view.slice";
import { CustomGrid } from "@/global/components/grids";

export const GetRandomQuotesGrid = () => {
  const ref = useRef<HTMLDivElement>(null);
  useIsComponentVisible(ref, setIsAdHeaderVisible);
  const { isMobile } = useSelector((state: any) => state.view);

  const { randomQuotes, isLoading, isError, hasMore, setPage } =
    useGetRandomQuotes();

  return (
    <Stack
      gap={0}
      h={`calc(100vh - ${headerHeight}px - ${isMobile ? footerHeight : 0}px)`}
      bg={twoBg}>
      <Center
        bg={oneBg}
        ref={ref}
        style={{ zIndex: 1 }}
        className={borderBottomShadow}>
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
        gridBg={twoBg}
        gridItemStyle={getGridItemBorderWithBorder(isMobile)}
        onMountEnter={(e: any) => !isMobile && addBoxShadow(e)}
        onMountLeave={(e: any) => !isMobile && removeBoxShadow(e)}
      />
    </Stack>
  );
};
