import {
  authorTopicLayoutWidth,
  layoutCompHeight,
  marginLeft,
  stringTruncate,
  textBold,
} from "@/global/styles/global.styles";
import {
  ActionIcon,
  Box,
  Center,
  Container,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { Outlet } from "react-router-dom";
import {
  IconFileDescription,
  IconFilter,
  IconFilterFilled,
} from "@tabler/icons-react";
import { roundTopBorderStyle } from "@/global/styles/app.css";
import {
  oneDefaultBg,
  oneDefaultTx,
  twoDefaultBg,
} from "@/global/styles/renamed.variables";
import { oneTxOneBgButtonPseudoStyle } from "@/global/styles/one-tx-one-bg-button-pseudo.css";
import { useRef, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { TopicsFilterModal } from "./topics-filter.modal";
import { TopicsFilterDrawer } from "./topics-filter.drawer";
import { globalUtility } from "@/global/utilities";
import { I } from "@/global/components/reusables";
import { useSelector } from "react-redux";
import { Alpha, Order } from "@/global/enums";
import DesktopLeaderboard from "@/global/ads/DesktopLeaderboard";
import Banner320x50 from "@/global/ads/Banner320x50";
import { setIsAdHeaderVisible } from "@/global/states/view.slice";
import { useIsComponentVisible } from "@/global/hooks";
import { RootState } from "@/global/states/store";
import { ComponentOneOrTwoRoute } from "@/global/routes";
import { Clearance } from "@/user/enums";

export const TopicsLayout = () => {
  const ref = useRef<HTMLDivElement>(null);
  useIsComponentVisible(ref, setIsAdHeaderVisible);
  const { order, alpha } = useSelector((state: RootState) => state.topic);
  const { isMobile, search } = useSelector((state: RootState) => state.view);

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
  const isSearching = location.pathname.includes("search");

  return (
    <Box component="div" bg={twoDefaultBg}>
      <Container
        size={authorTopicLayoutWidth}
        p={0}
        h={`calc(100vh - ${layoutCompHeight}px - ${isMobile ? layoutCompHeight : 2}px)`}>
        <Stack
          gap={0}
          h="100%"
          bg={oneDefaultBg}
          className={`${!isMobile && roundTopBorderStyle}`}>
          <Group px="sm" justify="space-between" gap={0}>
            <Group gap={3}>
              <I I={IconFileDescription} />

              <Text fz="sm" pt={3}>
                {globalUtility.formatNumber(data.page)}/
                {globalUtility.formatNumber(data.totalPages)} Page
              </Text>
            </Group>

            {isSearching ? (
              <Group gap={3}>
                <Text fz="sm" fw={textBold} style={stringTruncate}>
                  {search}{" "}
                </Text>
                <Text fz="sm" fw={textBold}>
                  {data.totalElements > 0 &&
                    `(${globalUtility.formatNumber(data.totalElements)})`}
                </Text>
              </Group>
            ) : (
              <Text fz="sm" fw={textBold}>
                Topics{" "}
                {data.totalElements > 0 &&
                  `(${globalUtility.formatNumber(data.totalElements)})`}
              </Text>
            )}

            <ActionIcon
              ml={marginLeft}
              h={layoutCompHeight}
              c={isFilterApplied ? "green" : oneDefaultTx}
              className={oneTxOneBgButtonPseudoStyle}
              onClick={isMobile ? drawerOpen : modalOpen}>
              {isFilterApplied ? (
                <I I={IconFilterFilled} />
              ) : (
                <I I={IconFilter} />
              )}
            </ActionIcon>

            <TopicsFilterDrawer opened={drawerOpened} close={drawerClose} />
            <TopicsFilterModal opened={modalOpened} close={modalClose} />
          </Group>

          <ComponentOneOrTwoRoute
            clearance={Clearance.LevelThree}
            compOne={<></>}
            compTwo={
              <Center ref={ref} style={{ zIndex: 1 }}>
                <Stack h={isMobile ? 50 : 90}>
                  {isMobile ? <Banner320x50 /> : <DesktopLeaderboard />}
                </Stack>
              </Center>
            }
          />

          <Outlet context={setData} />
        </Stack>
      </Container>
    </Box>
  );
};
