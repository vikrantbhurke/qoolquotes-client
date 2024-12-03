import { subheaderHeight } from "@/global/styles/global.styles";
import { Button, Group, Stack, Text } from "@mantine/core";
import { Outlet } from "react-router-dom";
import {
  IconFileDescription,
  IconFilter,
  IconFilterFilled,
} from "@tabler/icons-react";
import {
  borderBottom,
  oneTx,
  oneTxOneBgButtonPseudo,
} from "@/global/styles/app.css";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { TopicsFilterModal } from "./topics-filter.modal";
import { TopicsFilterDrawer } from "./topics-filter.drawer";
import { globalUtility } from "@/global/utilities";
import { useIsMobile } from "@/global/hooks";
import { I } from "@/global/components/components";
import { useSelector } from "react-redux";
import { Alpha, Order } from "@/global/enums";

export const TopicsLayout = () => {
  const isMobile = useIsMobile();
  const { order, alpha } = useSelector((state: any) => state.topic);

  const [drawerOpened, { open: drawerOpen, close: drawerClose }] =
    useDisclosure(false);

  const [modalOpened, { open: modalOpen, close: modalClose }] =
    useDisclosure(false);

  const [data, setData] = useState<any>({
    page: 0,
    totalPages: 0,
    totalElements: 0,
  });

  const isFilterApplied = order !== Order.Ascending || alpha !== Alpha.All;

  return (
    <Stack gap={0}>
      <Group pl="sm" justify="space-between" gap={0} className={borderBottom}>
        <Group gap={3}>
          <I I={IconFileDescription} />

          <Text pt={3}>
            {globalUtility.formatNumber(data.page)}/
            {globalUtility.formatNumber(data.totalPages)} Page
          </Text>
        </Group>

        <Text>
          Topics{" "}
          {data.totalElements > 0 &&
            `(${globalUtility.formatNumber(data.totalElements)})`}
        </Text>

        <Button
          h={subheaderHeight}
          c={isFilterApplied ? "green" : oneTx}
          className={oneTxOneBgButtonPseudo}
          onClick={isMobile ? drawerOpen : modalOpen}
          leftSection={
            isFilterApplied ? <I I={IconFilterFilled} /> : <I I={IconFilter} />
          }>
          Filter
        </Button>

        <TopicsFilterDrawer opened={drawerOpened} close={drawerClose} />
        <TopicsFilterModal opened={modalOpened} close={modalClose} />
      </Group>

      <Outlet context={setData} />
    </Stack>
  );
};
