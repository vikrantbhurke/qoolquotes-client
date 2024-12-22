import { borderBottom, normalPseudo, oneBg } from "@/global/styles/app.css";
import { getGridBorder } from "@/global/styles/global.styles";
import { Center, Grid, Stack, Text } from "@mantine/core";
import { useGetRandomQuotes } from "../hooks/read";
import InfiniteScroll from "react-infinite-scroll-component";
import { QuoteGridItemLayout } from "../layouts";
import { CustomLoader } from "@/global/components/loaders";
import { useIsMobile } from "@/global/hooks";
import DesktopLeaderboard from "@/ads/DesktopLeaderboard";
import Banner320x50 from "@/ads/Banner320x50";

export const GetRandomQuotesGrid = () => {
  const { randomQuotes, fetchQuotes } = useGetRandomQuotes();
  const isMobile = useIsMobile();

  const UtilComponent = ({ message }: any) => (
    <Center
      p="xl"
      className={normalPseudo}
      style={getGridBorder(isMobile, 1, randomQuotes.length)}>
      <Text>{message}</Text>
    </Center>
  );

  return (
    <Stack gap={0} h="100%" justify="flex-start">
      <Center className={borderBottom}>
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
        <Grid grow justify="center" gutter={0}>
          {randomQuotes.map((item: any, index: number) => {
            return (
              <Grid.Col
                span={{ base: 12, sm: 6 }}
                key={index}
                bg={oneBg}
                style={getGridBorder(isMobile, index, randomQuotes.length)}>
                <QuoteGridItemLayout item={item} />
              </Grid.Col>
            );
          })}
        </Grid>
      </InfiniteScroll>
    </Stack>
  );
};
