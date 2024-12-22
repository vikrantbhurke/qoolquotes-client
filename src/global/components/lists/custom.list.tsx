import { useIsMobile } from "@/global/hooks";
import { borderTop } from "@/global/styles/app.css";
import { subheaderHeight } from "@/global/styles/global.styles";
import { Center, Pagination, ScrollArea, Stack } from "@mantine/core";
import { Fragment, useRef } from "react";
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
      h={`calc(100% - ${subheaderHeight}px - ${isMobile ? 50 : 90}px)`}>
      <ScrollArea ref={scrollAreaRef} scrollbarSize={2}>
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
