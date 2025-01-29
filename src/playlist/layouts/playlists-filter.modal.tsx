import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSort, setOrder } from "../playlist.slice";
import { ActionIcon, Group, Modal, Space, Stack, Text } from "@mantine/core";
import {
  modal,
  modalOverlayProps,
  textBold,
} from "@/global/styles/global.styles";
import { CustomEnumCombobox, I } from "@/global/components/components";
import { Order } from "@/global/enums";
import { Sort } from "../enums";
import { globalUtility } from "@/global/utilities";
import { useSearchParams } from "react-router-dom";
import { IconRefresh } from "@tabler/icons-react";

export const PlaylistsFilterModal = ({ opened, close }: any) => {
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const { order, sort } = useSelector((state: any) => state.playlist);

  const handleOrder = (order: any) => {
    dispatch(setOrder(order));
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("order", order);
    setSearchParams(newSearchParams);
  };

  const handleSort = (sort: any) => {
    dispatch(setSort(sort));
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("sort", sort);
    setSearchParams(newSearchParams);
  };

  const handleRefresh = () => {
    dispatch(setOrder(Order.Descending));
    dispatch(setSort(Sort.Date));
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("order", Order.Descending);
    newSearchParams.set("sort", Sort.Date);
    setSearchParams(newSearchParams);
  };

  return (
    <Modal
      styles={modal}
      overlayProps={modalOverlayProps}
      opened={opened}
      onClose={close}
      centered
      title="Playlist Filter">
      <Stack>
        <Stack align="center" gap="xs">
          <Group justify="space-between" w="100%">
            <Space w="md" />

            <Text fw={textBold}>Sort</Text>

            {order !== Order.Descending || sort !== Sort.Date ? (
              <ActionIcon aria-label="Refresh" onClick={handleRefresh}>
                <I I={IconRefresh} />
              </ActionIcon>
            ) : (
              <ActionIcon
                disabled
                aria-label="Refresh Disabled"
                c="transparent"
              />
            )}
          </Group>

          <CustomEnumCombobox
            id="playlist-sort-modal"
            EnumObject={Sort}
            label="Sort"
            data={Object.values(Sort)}
            handleValue={handleSort}
            value={globalUtility.getKeyByValue(Sort, sort)}
          />
        </Stack>

        <Stack align="center" gap="xs">
          <Text fw={textBold}>Order</Text>

          <CustomEnumCombobox
            id="playlist-order-modal"
            EnumObject={Order}
            label="Order"
            data={Object.values(Order)}
            handleValue={handleOrder}
            value={globalUtility.getKeyByValue(Order, order)}
          />
        </Stack>
      </Stack>
    </Modal>
  );
};
