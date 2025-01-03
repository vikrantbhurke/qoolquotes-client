import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { borderTopShadow, oneBg } from "@/global/styles/app.css";
import {
  Box,
  Center,
  Grid,
  Pagination,
  ScrollArea,
  Stack,
} from "@mantine/core";
import { subheaderHeight } from "@/global/styles/global.styles";
import { useSelector } from "react-redux";
import { useIsComponentVisible } from "@/global/hooks";
import { setIsPaginationVisible } from "@/global/states/view.slice";

export const MantineGrid = ({
  p,
  page,
  gridBg,
  setPage,
  dataArray,
  totalPages,
  gridItemStyle,
  GridItemLayout,
  onMouseEnter,
  onMouseLeave,
}: any) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  useIsComponentVisible(ref, setIsPaginationVisible);
  let [searchParams, setSearchParams] = useSearchParams();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useSelector((state: any) => state.view);

  const handlePage = (page: number) => {
    dispatch(setPage(page));
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", `${page}`);
    setSearchParams(newSearchParams);

    const scrollableContainer = scrollAreaRef.current?.querySelector(
      ".mantine-ScrollArea-viewport"
    );

    if (scrollableContainer) {
      scrollableContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Stack
      gap={0}
      justify="space-between"
      h={`calc(100% - ${subheaderHeight}px - ${isMobile ? 50 : 90}px)`}
      bg={gridBg}>
      <ScrollArea ref={scrollAreaRef} scrollbarSize={2}>
        <Grid grow justify="center" gutter={0} p={isMobile ? 0 : p}>
          {dataArray.map((item: any, index: number) => {
            return (
              <Grid.Col
                p={isMobile ? 0 : p}
                span={{ base: 12, lg: 6, xl: 4 }}
                key={index}>
                <Box
                  component="div"
                  bg={oneBg}
                  style={gridItemStyle}
                  h="100%"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}>
                  <GridItemLayout item={item} />
                </Box>
              </Grid.Col>
            );
          })}
        </Grid>
      </ScrollArea>

      <Center
        ref={ref}
        className={borderTopShadow}
        bg={oneBg}
        style={{ zIndex: 1 }}>
        <Pagination
          size="sm"
          m="sm"
          gap="xs"
          radius="sm"
          siblings={0}
          value={page}
          onChange={handlePage}
          total={totalPages}
        />
      </Center>
    </Stack>
  );
};
