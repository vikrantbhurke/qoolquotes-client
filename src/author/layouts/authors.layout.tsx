import {
  footerHeight,
  headerHeight,
  subheaderHeight,
} from "@/global/styles/global.styles";
import { Button, Center, Group, Stack, Text } from "@mantine/core";
import { Outlet } from "react-router-dom";
import {
  IconFileDescription,
  IconFilter,
  IconFilterFilled,
} from "@tabler/icons-react";
import {
  borderBottom,
  borderBottomShadow,
  oneBg,
  oneTx,
  oneTxOneBgButtonPseudo,
} from "@/global/styles/app.css";
import { useRef, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { AuthorsFilterModal } from "./authors-filter.modal";
import { AuthorsFilterDrawer } from "./authors-filter.drawer";
import { globalUtility } from "@/global/utilities";
import { I } from "@/global/components/components";
import { useSelector } from "react-redux";
import { Alpha, Order } from "@/global/enums";
import DesktopLeaderboard from "@/ads/DesktopLeaderboard";
import Banner320x50 from "@/ads/Banner320x50";
import { useIsComponentVisible } from "@/global/hooks";
import { setIsAdHeaderVisible } from "@/global/states/view.slice";

export const AuthorsLayout = () => {
  const ref = useRef<HTMLDivElement>(null);
  useIsComponentVisible(ref, setIsAdHeaderVisible);
  const { isMobile } = useSelector((state: any) => state.view);
  const { order, alpha } = useSelector((state: any) => state.author);

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
    <Stack
      gap={0}
      h={`calc(100vh - ${headerHeight}px - ${isMobile ? footerHeight : 2}px)`}
      bg={oneBg}>
      <Group pl="sm" justify="space-between" gap={0} className={borderBottom}>
        <Group gap={3}>
          <I I={IconFileDescription} />

          <Text>
            {globalUtility.formatNumber(data.page)}/
            {globalUtility.formatNumber(data.totalPages)} Page
          </Text>
        </Group>

        <Text>
          Authors{" "}
          {data.totalElements > 0 &&
            `(${globalUtility.formatNumber(data.totalElements)})`}
        </Text>

        <Stack p="xs" h={subheaderHeight}>
          <Button
            radius={10}
            c={isFilterApplied ? "green" : oneTx}
            className={oneTxOneBgButtonPseudo}
            onClick={isMobile ? drawerOpen : modalOpen}
            leftSection={
              isFilterApplied ? (
                <I I={IconFilterFilled} />
              ) : (
                <I I={IconFilter} />
              )
            }>
            Filter
          </Button>
        </Stack>

        <AuthorsFilterDrawer opened={drawerOpened} close={drawerClose} />
        <AuthorsFilterModal opened={modalOpened} close={modalClose} />
      </Group>

      <Center ref={ref} style={{ zIndex: 1 }} className={borderBottomShadow}>
        <Stack h={isMobile ? 50 : 90}>
          {isMobile ? <Banner320x50 /> : <DesktopLeaderboard />}
        </Stack>
      </Center>

      <Outlet context={setData} />
    </Stack>
  );
};
