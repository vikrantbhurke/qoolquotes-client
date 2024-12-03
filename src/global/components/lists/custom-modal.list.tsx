import { oneBg, roundBorder } from "@/global/styles/app.css";
import { Group, Pagination, ScrollArea, Stack } from "@mantine/core";
import { useDispatch } from "react-redux";
import { Fragment } from "react";

export const CustomModalList = ({
  page,
  setPage,
  dataArray,
  totalPages,
  ModalListItemLayout,
}: any) => {
  const dispatch = useDispatch();

  return (
    <Stack
      gap={2}
      p={3}
      h={200}
      bg={oneBg}
      className={roundBorder}
      justify="space-between">
      <ScrollArea scrollbarSize={2}>
        <Stack gap={3}>
          {dataArray.map((item: any, index: number) => (
            <Fragment key={index}>
              <ModalListItemLayout item={item} />
            </Fragment>
          ))}
        </Stack>
      </ScrollArea>

      <Pagination.Root
        value={page}
        onChange={(page: number) => dispatch(setPage(page))}
        total={totalPages}>
        <Group gap={5} justify="space-evenly" py={2}>
          <Pagination.Previous w="49%" />
          <Pagination.Next w="49%" />
        </Group>
      </Pagination.Root>
    </Stack>
  );
};
