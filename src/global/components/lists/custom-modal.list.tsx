import { roundBorderStyle } from "@/global/styles/app.css";
import { fiveDefaultBg, twoDefaultBg } from "@/global/styles/renamed.variables";
import { Group, Pagination, ScrollArea, Stack } from "@mantine/core";
import { useDispatch } from "react-redux";
import { Fragment, useRef } from "react";

export const CustomModalList = ({
  page,
  setPage,
  dataArray,
  totalPages,
  ModalListItemLayout,
}: any) => {
  const dispatch = useDispatch();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const handlePage = (page: number) => {
    dispatch(setPage(page));

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
      gap={2}
      p={3}
      h={200}
      bg={twoDefaultBg}
      className={roundBorderStyle}
      justify="space-between">
      <ScrollArea ref={scrollAreaRef} scrollbarSize={2}>
        <Stack gap={3}>
          {dataArray.map((item: any, index: number) => (
            <Fragment key={index}>
              <ModalListItemLayout item={item} />
            </Fragment>
          ))}
        </Stack>
      </ScrollArea>

      <Pagination.Root value={page} onChange={handlePage} total={totalPages}>
        <Group gap={5} justify="space-evenly" py={2} bg={twoDefaultBg}>
          <Pagination.Previous w="49%" bg={fiveDefaultBg} />
          <Pagination.Next w="49%" bg={fiveDefaultBg} />
        </Group>
      </Pagination.Root>
    </Stack>
  );
};
