import { subheaderHeight } from "@/global/styles/global.styles";
import { Group, Space, Stack, Text } from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";
import { IconFileDescription } from "@tabler/icons-react";
import { borderBottom } from "@/global/styles/app.css";
import { useState } from "react";
import { I } from "@/global/components/components";

export const QuotesLayout = () => {
  const location = useLocation();
  const name = location.state.name;

  const [data, setData] = useState<any>({
    page: 0,
    totalPages: 0,
    totalElements: 0,
  });

  return (
    <Stack gap={0}>
      <Group
        pl="xs"
        justify="space-between"
        gap={0}
        className={borderBottom}
        h={subheaderHeight}>
        <Group gap={3}>
          <I I={IconFileDescription} />

          <Text pt={3}>
            {data.page}/{data.totalPages} Page
          </Text>
        </Group>

        <Text>
          {name} ({data.totalElements})
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

      <Outlet context={setData} />
    </Stack>
  );
};
