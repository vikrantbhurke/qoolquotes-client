import {
  layoutCompHeight,
  quoteLayoutWidth,
  stringTruncate,
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
  roundBottomBorderStyle,
  roundTopBorderStyle,
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
import { ComponentOneOrTwoRoute } from "@/global/routes";
import { Clearance } from "@/user/enums";

export const QuotesLayout = () => {
  const ref = useRef<HTMLDivElement>(null);
  useIsComponentVisible(ref, setIsAdHeaderVisible);
  const location = useLocation();
  const { filterObject } = useSelector((state: RootState) => state.quote);
  const { search, isMobile, color } = useSelector(
    (state: RootState) => state.view
  );

  const [data, setData] = useState<any>({
    page: 0,
    totalPages: 0,
    totalElements: 0,
  });

  const isSearching = location.pathname.includes("search");

  return (
    <Box component="div" bg={globalUtility.getTwoBg(color)}>
      <Container
        size={quoteLayoutWidth}
        p={0}
        h={`calc(100vh - ${layoutCompHeight}px - ${isMobile ? layoutCompHeight : 2}px)`}>
        <Stack
          gap={0}
          h="100%"
          bg={
            isMobile
              ? globalUtility.getOneBg(color)
              : globalUtility.getTwoBg(color)
          }>
          <Group
            px="xs"
            bg={globalUtility.getOneBg(color)}
            className={`${!isMobile && roundTopBorderStyle}`}
            justify="space-between"
            gap={0}
            mih={layoutCompHeight}>
            <Group gap={3}>
              <I I={IconFileDescription} />

              <Text fz="sm" pt={3} c={globalUtility.getOneTx(color)}>
                {data.page}/{data.totalPages} Page
              </Text>
            </Group>

            {isSearching ? (
              <Group gap={3}>
                <Text
                  fz="sm"
                  fw={textBold}
                  style={stringTruncate}
                  c={globalUtility.getOneTx(color)}>
                  {search}{" "}
                </Text>
                <Text fz="sm" fw={textBold} c={globalUtility.getOneTx(color)}>
                  {data.totalElements > 0 &&
                    `(${globalUtility.formatNumber(data.totalElements)})`}
                </Text>
              </Group>
            ) : (
              <Group gap={3}>
                <Text
                  fz="sm"
                  fw={textBold}
                  style={stringTruncate}
                  c={globalUtility.getOneTx(color)}>
                  {filterObject.name}{" "}
                </Text>
                <Text fz="sm" fw={textBold} c={globalUtility.getOneTx(color)}>
                  {data.totalElements > 0 &&
                    `(${globalUtility.formatNumber(data.totalElements)})`}
                </Text>
              </Group>
            )}

            <Group gap="xl">
              <Space w="xl" />
              <Space w="xl" />
            </Group>
          </Group>

          <ComponentOneOrTwoRoute
            clearance={Clearance.LevelThree}
            compOne={<></>}
            compTwo={
              <Center
                ref={ref}
                bg={globalUtility.getOneBg(color)}
                style={{ zIndex: 1 }}
                className={`${roundBottomBorderStyle}`}>
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
