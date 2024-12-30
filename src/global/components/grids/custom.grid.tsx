import { useCustomScrollbar } from "@/global/hooks";
import { oneBg, oneTxOneBg, twoBg } from "@/global/styles/app.css";
import {
  addBoxShadow,
  getGridItemBorder,
  listItemHeight,
  removeBoxShadow,
} from "@/global/styles/global.styles";
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
}: any) => {
  useCustomScrollbar();
  const containerRef = useRef<any>(null);
  const [isWindow] = useState<any>(false);
  const { isMobile } = useSelector((state: any) => state.view);

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

  const UtilComponent = ({ message }: any) => (
    <Box component="div" mx={isMobile ? 0 : 16}>
      <Center
        h={listItemHeight}
        style={getGridItemBorder(isMobile)}
        className={oneTxOneBg}>
        <Text>{message}</Text>
      </Center>
    </Box>
  );

  return (
    <Stack
      bg={twoBg}
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
      <Grid grow justify="center" gutter={0} bg={twoBg} p={isMobile ? 0 : 8}>
        {dataArray.map((item: any, index: number) => {
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
                onMouseEnter={(e) => !isMobile && addBoxShadow(e)}
                onMouseLeave={(e) => !isMobile && removeBoxShadow(e)}>
                <GridItemLayout item={item} />
              </Box>
            </Grid.Col>
          );
        })}
      </Grid>

      {isLoading && <UtilComponent message="Loading..." />}

      {isError && <UtilComponent message="Error" />}

      {!hasMore && (
        <Box component="div" style={{ textAlign: "center", margin: "20px" }}>
          No more data
        </Box>
      )}
    </Stack>
  );
};
