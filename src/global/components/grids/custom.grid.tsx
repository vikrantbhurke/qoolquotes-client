import { Breakpoint } from "@/global/enums";
import { useCustomScrollbar } from "@/global/hooks";
import { RootState } from "@/global/states/store";
import { roundBorderStyle } from "@/global/styles/app.css";
import { oneTxOneBgStyle } from "@/global/styles/one-tx-one-bg.css";
import { listItemHeight } from "@/global/styles/global.styles";
import { globalUtility } from "@/global/utilities";
import { Box, Center, Grid, Stack, Text } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export const CustomGrid = ({
  dataArray,
  GridItemLayout,
  isLoading,
  isError,
  hasMore,
  setPage,
  gridBg,
  onMountEnter,
  onMountLeave,
}: any) => {
  useCustomScrollbar();
  const containerRef = useRef<any>(null);
  const [isWindow] = useState<any>(false);
  const { isMobile, width, color } = useSelector(
    (state: RootState) => state.view
  );

  const handleScroll = () => {
    const container = isWindow ? window : containerRef.current;
    const scrollTop = isWindow ? container?.pageYOffset : container?.scrollTop;
    const scrollHeight = isWindow
      ? document.documentElement.scrollHeight
      : container?.scrollHeight;
    const clientHeight = isWindow
      ? window.innerHeight
      : container?.clientHeight;

    if (
      scrollTop + clientHeight >= scrollHeight * 0.8 &&
      !isLoading &&
      hasMore
    ) {
      setPage((prevPage: any) => prevPage + 1);
    }
  };

  useEffect(() => {
    const container = isWindow ? window : containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => container?.removeEventListener("scroll", handleScroll);
  }, [isLoading, hasMore]);

  let totalGhostItems;
  let dataArrayLength = dataArray.length;

  if (width < Breakpoint.lg) totalGhostItems = 0;
  else if (width < Breakpoint.xl)
    totalGhostItems = dataArrayLength % 2 === 0 ? 0 : 1;
  else
    totalGhostItems = dataArrayLength % 3 === 0 ? 0 : 3 - (dataArrayLength % 3);

  const extraGridItems: Array<any> = new Array(totalGhostItems)
    .fill(0)
    .map((_) => {
      return (
        <Grid.Col p={isMobile ? 0 : 8} span={{ base: 12, lg: 6, xl: 4 }}>
          <Box component="div" h="100%" style={{ borderRadius: 8 }}></Box>
        </Grid.Col>
      );
    });

  return (
    <Stack
      h={`calc(100% - ${isMobile ? 50 : 90}px)`}
      bg={gridBg}
      gap={0}
      className="custom-scrollbar"
      ref={containerRef}
      style={
        isWindow
          ? {}
          : {
              overflow: "auto",
            }
      }>
      <Grid grow justify="center" gutter={0} bg={gridBg} py={isMobile ? 0 : 8}>
        {dataArray.map((item: any, index: number) => {
          return (
            <Grid.Col
              span={{ base: 12, lg: 6, xl: 4 }}
              key={index}
              p={isMobile ? 0 : 8}>
              <Box
                component="div"
                bg={globalUtility.getOneBg(color)}
                className={`${roundBorderStyle}`}
                h="100%"
                onMouseEnter={onMountEnter}
                onMouseLeave={onMountLeave}>
                <GridItemLayout item={item} />
              </Box>
            </Grid.Col>
          );
        })}

        {extraGridItems}
      </Grid>

      {isLoading && (
        <Grid
          grow
          justify="center"
          gutter={0}
          bg={gridBg}
          py={isMobile ? 0 : 8}>
          {Array.from({ length: 9 }, (_, index) => (
            <Grid.Col
              key={index}
              span={{ base: 12, lg: 6, xl: 4 }}
              p={isMobile ? 0 : 8}>
              <Box
                component="div"
                bg={globalUtility.getOneBg(color)}
                className={roundBorderStyle}
                h="100%"
                onMouseEnter={onMountEnter}
                onMouseLeave={onMountLeave}>
                <GridItemLayout item={{ isPending: isLoading }} />
              </Box>
            </Grid.Col>
          ))}
        </Grid>
      )}

      {isError && (
        <Box component="div" mx={isMobile ? 0 : 16}>
          <Center
            h={listItemHeight}
            className={`${oneTxOneBgStyle} ${roundBorderStyle}`}>
            <Text fz="sm">An error occured.</Text>
          </Center>
        </Box>
      )}

      {!hasMore && (
        <Box component="div" style={{ textAlign: "center", margin: "20px" }}>
          No more data
        </Box>
      )}
    </Stack>
  );
};
