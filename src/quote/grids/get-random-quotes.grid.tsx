import {
  borderBottom,
  normalPseudo,
  oneBg,
  twoBg,
} from "@/global/styles/app.css";
import {
  getGridItemBorder,
  listItemHeight,
} from "@/global/styles/global.styles";
import { Box, Center, Grid, Stack, Text } from "@mantine/core";
import { useGetRandomQuotes } from "../hooks/read";
import InfiniteScroll from "react-infinite-scroll-component";
import { QuoteGridItemLayout } from "../layouts";
import { CustomLoader } from "@/global/components/loaders";
import DesktopLeaderboard from "@/ads/DesktopLeaderboard";
import Banner320x50 from "@/ads/Banner320x50";
import { useSelector } from "react-redux";

export const GetRandomQuotesGrid = () => {
  const { randomQuotes, fetchQuotes } = useGetRandomQuotes();
  const { isMobile } = useSelector((state: any) => state.view);

  const UtilComponent = ({ message }: any) => (
    <Box component="div" mx={isMobile ? 0 : 16}>
      <Center
        h={listItemHeight}
        style={getGridItemBorder(isMobile)}
        className={normalPseudo}
        // style={getGridBorder(isMobile, 1, randomQuotes.length)}
      >
        <Text>{message}</Text>
      </Center>
    </Box>
  );

  return (
    <Stack gap={0} h="100%" justify="flex-start">
      <Center className={borderBottom} bg={oneBg}>
        <Stack h={isMobile ? 50 : 90}>
          {isMobile ? <Banner320x50 /> : <DesktopLeaderboard />}
        </Stack>
      </Center>

      <InfiniteScroll
        dataLength={randomQuotes.length}
        next={() => fetchQuotes()}
        hasMore={true}
        scrollThreshold={0.5}
        loader={<UtilComponent message="Loading quotes..." />}
        endMessage={<CustomLoader />}>
        <Grid grow justify="center" gutter={0} bg={twoBg} p={isMobile ? 0 : 8}>
          {randomQuotes.map((item: any, index: number) => {
            return (
              <Grid.Col
                span={{ base: 12, sm: 6 }}
                key={index}
                p={isMobile ? 0 : 8}>
                <Box
                  component="div"
                  bg={oneBg}
                  style={getGridItemBorder(isMobile)}
                  h="100%"
                  onMouseEnter={(e) => {
                    if (!isMobile)
                      e.currentTarget.style.boxShadow =
                        "0px 4px 10px rgba(0, 0, 0, 0.2)"; // Shadow on hover
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) e.currentTarget.style.boxShadow = "none"; // Remove shadow on mouse leave
                  }}>
                  <QuoteGridItemLayout item={item} />
                </Box>
              </Grid.Col>
            );
          })}
        </Grid>
      </InfiniteScroll>
    </Stack>
  );
};
