import { roundBorder } from "@/global/styles/app.css";
import {
  Group,
  Pagination,
  ScrollArea,
  Stack,
  useMantineColorScheme,
} from "@mantine/core";
import { useDispatch } from "react-redux";
import { Fragment } from "react";
import { getComboboxStyles } from "@/global/styles/global.styles";

export const CustomModalList = ({
  page,
  setPage,
  dataArray,
  totalPages,
  ModalListItemLayout,
}: any) => {
  const dispatch = useDispatch();
  const { colorScheme } = useMantineColorScheme();
  const { optionBg, dropdownBg } = getComboboxStyles(colorScheme);

  return (
    <Stack
      gap={2}
      p={3}
      h={200}
      bg={dropdownBg}
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
        <Group gap={5} justify="space-evenly" py={2} bg={dropdownBg}>
          <Pagination.Previous w="49%" bg={optionBg} />
          <Pagination.Next w="49%" bg={optionBg} />
        </Group>
      </Pagination.Root>
    </Stack>
  );
};
