import {
  footerHeight,
  getGridBorder,
  getMainContentHeight,
  headerHeight,
  subheaderHeight,
} from "@/global/styles/global.styles";
import { Center, Grid, Pagination, ScrollArea, Stack } from "@mantine/core";
import { useSearchParams } from "react-router-dom";
import { borderTop, normalPseudo } from "@/global/styles/app.css";
import { useWindowScroll } from "@mantine/hooks";
import { useDispatch } from "react-redux";
import { useIsMobile } from "@/global/hooks";

export const MantineGrid = ({
  page,
  setPage,
  dataArray,
  totalPages,
  GridItemLayout,
}: any) => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const [, scrollTo] = useWindowScroll();
  let [searchParams, setSearchParams] = useSearchParams();

  const handlePage = (page: number) => {
    dispatch(setPage(page));
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", `${page}`);
    setSearchParams(newSearchParams);
    scrollTo({ y: 0 });
  };

  return (
    <Stack
      gap={0}
      justify="space-between"
      h={getMainContentHeight(
        headerHeight,
        footerHeight,
        subheaderHeight,
        isMobile
      )}>
      <ScrollArea scrollbarSize={2}>
        <Grid grow justify="center" gutter={0}>
          {dataArray.map((item: any, index: number) => {
            return (
              <Grid.Col
                span={{ base: 12, md: 6 }}
                key={index}
                className={normalPseudo}
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
