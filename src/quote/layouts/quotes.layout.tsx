import {
  footerHeight,
  headerHeight,
  subheaderHeight,
} from "@/global/styles/global.styles";
import { Center, Group, Space, Stack, Text } from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";
import { IconFileDescription } from "@tabler/icons-react";
import { borderBottom } from "@/global/styles/app.css";
import { useState } from "react";
import { I } from "@/global/components/components";
import { useIsMobile } from "@/global/hooks";
import { useSelector } from "react-redux";
import DesktopLeaderboard from "@/ads/DesktopLeaderboard";
import MobileLeaderboard from "@/ads/MobileLeaderboard";

export const QuotesLayout = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  const { search } = useSelector((state: any) => state.view);
  const { filterObject } = useSelector((state: any) => state.quote);

  const [data, setData] = useState<any>({
    page: 0,
    totalPages: 0,
    totalElements: 0,
  });

  const isSearchingQuotes = location.pathname.includes("search");

  return (
    <Stack
      gap={0}
      h={`calc(100vh - ${headerHeight}px - ${isMobile ? footerHeight : 0}px)`}>
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

      <Center p="md" className={borderBottom}>
        <Stack h={90}>
          {isMobile ? <MobileLeaderboard /> : <DesktopLeaderboard />}
        </Stack>
      </Center>

      <Outlet context={setData} />
    </Stack>
  );
};
