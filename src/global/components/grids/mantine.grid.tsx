import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { borderTop, oneBg, twoBg } from "@/global/styles/app.css";
import {
  Box,
  Center,
  Grid,
  Pagination,
  ScrollArea,
  Stack,
} from "@mantine/core";
import {
  getGridItemBorder,
  subheaderHeight,
} from "@/global/styles/global.styles";
import { useSelector } from "react-redux";

export const MantineGrid = ({
  p,
  page,
  setPage,
  dataArray,
  totalPages,
  GridItemLayout,
}: any) => {
  const dispatch = useDispatch();
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
      bg={twoBg}>
      <ScrollArea ref={scrollAreaRef} scrollbarSize={2}>
        <Grid grow justify="center" gutter={0} p={isMobile ? 0 : p}>
          {dataArray.map((item: any, index: number) => {
            return (
              <Grid.Col
                p={isMobile ? 0 : p}
                span={{ base: 12, md: 6 }}
                key={index}>
                <Box
                  component="div"
                  bg={oneBg}
                  style={getGridItemBorder(isMobile)}
                  h="100%">
                  <GridItemLayout item={item} />
                </Box>
              </Grid.Col>
            );
          })}
        </Grid>
      </ScrollArea>

      <Center className={borderTop} bg={oneBg}>
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
