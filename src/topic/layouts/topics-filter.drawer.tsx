import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAlpha, setOrder } from "../topic.slice";
import { ActionIcon, Drawer, Group, Space, Stack, Text } from "@mantine/core";
import { drawer } from "@/global/styles/global.styles";
import {
  CustomEnumCombobox,
  CustomEnumScrollableCombobox,
  I,
} from "@/global/components/components";
import { Alpha, Order } from "@/global/enums";
import { globalUtility } from "@/global/utilities";
import { useSearchParams } from "react-router-dom";
import { IconRefresh } from "@tabler/icons-react";

export const TopicsFilterDrawer = ({ opened, close }: any) => {
  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const { order, alpha } = useSelector((state: any) => state.topic);

  const handleOrder = (order: any) => {
    dispatch(setOrder(order));
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("order", order);
    setSearchParams(newSearchParams);
  };

  const handleAlpha = (alpha: any) => {
    dispatch(setAlpha(alpha));
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("alpha", alpha);
    setSearchParams(newSearchParams);
  };

  const handleRefresh = () => {
    dispatch(setOrder(Order.Ascending));
    dispatch(setAlpha(Alpha.All));
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("order", Order.Ascending);
    newSearchParams.set("alpha", Alpha.All);
    setSearchParams(newSearchParams);
  };

  return (
    <Drawer
      size="xs"
      styles={drawer}
      opened={opened}
      onClose={close}
      position="bottom"
      title={<Text>Topic Filter</Text>}>
      <Stack>
        <Stack align="center" gap="xs">
          <Group justify="space-between" w="100%">
            <Space w="md" />

            <Text>Order</Text>

            {order !== Order.Ascending || alpha !== Alpha.All ? (
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
            EnumObject={Order}
            label="Order"
            data={Object.values(Order)}
            handleValue={handleOrder}
            value={globalUtility.getKeyByValue(Order, order)}
          />
        </Stack>

        <Stack align="center" gap="xs">
          <Text>Alphabet</Text>

          <CustomEnumScrollableCombobox
            EnumObject={Alpha}
            label="Alpha"
            data={Object.values(Alpha)}
            handleValue={handleAlpha}
            value={globalUtility.getKeyByValue(Alpha, alpha)}
          />
        </Stack>
      </Stack>
    </Drawer>
  );
};
