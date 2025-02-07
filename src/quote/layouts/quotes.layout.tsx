import {
  layoutCompHeight,
  quoteLayoutWidth,
  textBold,
} from "@/global/styles/global.styles";
import {
  Box,
  Center,
  Container,
  Group,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";
import { IconFileDescription } from "@tabler/icons-react";
import {
  oneBg,
  roundBottomBorderStyle,
  roundTopBorderStyle,
  twoBg,
} from "@/global/styles/app.css";
import { useRef, useState } from "react";
import { I } from "@/global/components/reusables";
import { useSelector } from "react-redux";
import DesktopLeaderboard from "@/global/ads/DesktopLeaderboard";
import Banner320x50 from "@/global/ads/Banner320x50";
import { useIsComponentVisible } from "@/global/hooks";
import { setIsAdHeaderVisible } from "@/global/states/view.slice";
import { globalUtility } from "@/global/utilities";
import { RootState } from "@/global/states/store";

export const QuotesLayout = () => {
  const ref = useRef<HTMLDivElement>(null);
  useIsComponentVisible(ref, setIsAdHeaderVisible);
  const location = useLocation();
  const { search, isMobile } = useSelector((state: RootState) => state.view);
  const { filterObject } = useSelector((state: RootState) => state.quote);

  const [data, setData] = useState<any>({
    page: 0,
    totalPages: 0,
    totalElements: 0,
  });

  const isSearching = location.pathname.includes("search");

  return (
    <Box component="div" bg={twoBg}>
      <Container
        size={quoteLayoutWidth}
        p={0}
        h={`calc(100vh - ${layoutCompHeight}px - ${isMobile ? layoutCompHeight : 2}px)`}>
        <Stack gap={0} h="100%" bg={isMobile ? oneBg : twoBg}>
          <Group
            px="xs"
            bg={oneBg}
            className={`${!isMobile && roundTopBorderStyle}`}
            justify="space-between"
            gap={0}
            mih={layoutCompHeight}>
            <Group gap={3}>
              <I I={IconFileDescription} />

              <Text pt={3}>
                {data.page}/{data.totalPages} Page
              </Text>
            </Group>

            {isSearching ? (
              <Text fw={textBold}>
                {search}{" "}
                {data.totalElements > 0 &&
                  `(${globalUtility.formatNumber(data.totalElements)})`}
              </Text>
            ) : (
              <Text fw={textBold}>
                {filterObject.name}{" "}
                {data.totalElements > 0 &&
                  `(${globalUtility.formatNumber(data.totalElements)})`}
              </Text>
            )}

            <Group gap="xl">
              <Space w="xl" />
              <Space w="xl" />
            </Group>
          </Group>

          <Center
            ref={ref}
            bg={oneBg}
            style={{ zIndex: 1 }}
            className={`${roundBottomBorderStyle}`}>
            <Stack h={isMobile ? 50 : 90}>
              {isMobile ? <Banner320x50 /> : <DesktopLeaderboard />}
            </Stack>
          </Center>

          <Outlet context={setData} />
        </Stack>
      </Container>
    </Box>
  );
};
