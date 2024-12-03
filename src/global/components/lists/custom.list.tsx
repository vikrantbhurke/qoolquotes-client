import { useIsMobile } from "@/global/hooks";
import { borderTop } from "@/global/styles/app.css";
import {
  footerHeight,
  getMainContentHeight,
  headerHeight,
  subheaderHeight,
} from "@/global/styles/global.styles";
import { Center, Pagination, ScrollArea, Stack } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

export const CustomList = ({
  dataArray,
  page,
  setPage,
  totalPages,
  ListItemLayout,
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
        {dataArray.map((item: any, index: number) => {
          return (
            <Fragment key={index}>
              <ListItemLayout item={item} />
            </Fragment>
          );
        })}
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
