import { getGridBorder, subheaderHeight } from "@/global/styles/global.styles";
import { Center, Grid, Pagination, ScrollArea, Stack } from "@mantine/core";
import { useSearchParams } from "react-router-dom";
import { borderTop } from "@/global/styles/app.css";
import { useDispatch } from "react-redux";
import { useIsMobile } from "@/global/hooks";
import { useRef } from "react";

export const MantineGrid = ({
  page,
  setPage,
  dataArray,
  totalPages,
  GridItemLayout,
}: any) => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

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
      h={`calc(100% - ${subheaderHeight}px)`}>
      <ScrollArea ref={scrollAreaRef} scrollbarSize={2}>
        <Grid grow justify="center" gutter={0}>
          {dataArray.map((item: any, index: number) => {
            return (
              <Grid.Col
                span={{ base: 12, md: 6 }}
                key={index}
                style={getGridBorder(isMobile, index, dataArray.length)}>
                <GridItemLayout item={item} />
              </Grid.Col>
            );
          })}
        </Grid>
      </ScrollArea>

      <Center className={borderTop}>
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
