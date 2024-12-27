import Banner300x250 from "@/ads/Banner300x250";
import Banner320x50 from "@/ads/Banner320x50";
import { Center, Space, Stack } from "@mantine/core";
import { useSelector } from "react-redux";

export const Aside = () => {
  const { isMobile } = useSelector((state: any) => state.view);

  return (
    <Stack h="100%" gap="md" justify="space-between">
      <Space />
      <Center p="md">{isMobile ? <Banner320x50 /> : <Banner300x250 />}</Center>
    </Stack>
  );
};
