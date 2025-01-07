import {
  footerHeight,
  headerHeight,
  subheaderHeight,
} from "@/global/styles/global.styles";
import { Center, Group, Space, Stack, Text } from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";
import { IconFileDescription } from "@tabler/icons-react";
import {
  borderBottom,
  borderBottomShadow,
  oneBg,
} from "@/global/styles/app.css";
import { useRef, useState } from "react";
import { I } from "@/global/components/components";
import { useSelector } from "react-redux";
import DesktopLeaderboard from "@/ads/DesktopLeaderboard";
import Banner320x50 from "@/ads/Banner320x50";
import { useIsComponentVisible } from "@/global/hooks";
import { setIsAdHeaderVisible } from "@/global/states/view.slice";

export const QuotesLayout = () => {
  const ref = useRef<HTMLDivElement>(null);
  useIsComponentVisible(ref, setIsAdHeaderVisible);
  const location = useLocation();
  const { search } = useSelector((state: any) => state.view);
  const { filterObject } = useSelector((state: any) => state.quote);
  const { isMobile } = useSelector((state: any) => state.view);

  const [data, setData] = useState<any>({
    page: 0,
    totalPages: 0,
    totalElements: 0,
  });

  const isSearchingQuotes = location.pathname.includes("search");

  return (
    <Stack
      gap={0}
      h={`calc(100vh - ${headerHeight}px - ${isMobile ? footerHeight : 2}px)`}
      bg={oneBg}>
      <Group
        pl="xs"
        justify="space-between"
        gap={0}
        mih={subheaderHeight}
        className={borderBottom}>
        <Group gap={3}>
          <I I={IconFileDescription} />

          <Text pt={3}>
            {data.page}/{data.totalPages} Page
          </Text>
        </Group>

        <Text>
          {isSearchingQuotes ? search : filterObject.name} ({data.totalElements}
          )
        </Text>

        {/* <Button
          h={subheaderHeight}
          className={oneTxOneBgButtonPseudo}
          onClick={() => console.log("")}
          leftSection={<I I={IconFilter} />}>
          Filter
        </Button> */}
        <Group gap="xl">
          <Space w="xl" />
          <Space w="xl" />
        </Group>
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
