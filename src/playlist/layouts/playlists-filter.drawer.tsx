import { Sort } from "../enums";
import { Order } from "@/global/enums";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IconRefresh } from "@tabler/icons-react";
import { globalUtility } from "@/global/utilities";
import { useSearchParams } from "react-router-dom";
import { setSort, setOrder } from "../playlist.slice";
import { drawer } from "@/global/styles/global.styles";
import { CustomEnumCombobox, I } from "@/global/components/components";
import { ActionIcon, Drawer, Group, Space, Stack, Text } from "@mantine/core";

export const PlaylistsFilterDrawer = ({ opened, close }: any) => {
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
    dispatch(setOrder(Order.Ascending));
    dispatch(setSort(Sort.Date));
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("order", Order.Ascending);
    newSearchParams.set("sort", Sort.Date);
    setSearchParams(newSearchParams);
  };

  return (
    <Drawer
      size="xs"
      styles={drawer}
      opened={opened}
      onClose={close}
      position="bottom"
      title={<Text>Playlist Filter</Text>}>
      <Stack>
        <Stack align="center" gap="xs">
          <Group justify="space-between" w="100%">
            <Space w="md" />

            <Text>Sort</Text>

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
            id="playlist-sort-drawer"
            EnumObject={Sort}
            label="Sort"
            data={Object.values(Sort)}
            handleValue={handleSort}
            value={globalUtility.getKeyByValue(Sort, sort)}
          />
        </Stack>

        <Stack align="center" gap="xs">
          <Text>Order</Text>

          <CustomEnumCombobox
            id="playlist-order-drawer"
            EnumObject={Order}
            label="Order"
            data={Object.values(Order)}
            handleValue={handleOrder}
            value={globalUtility.getKeyByValue(Order, order)}
          />
        </Stack>
      </Stack>
    </Drawer>
  );
};