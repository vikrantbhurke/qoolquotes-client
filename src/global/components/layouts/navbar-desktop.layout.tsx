import Banner300x250 from "@/global/ads/Banner300x250";
import Banner320x50 from "@/global/ads/Banner320x50";
import { RootState } from "@/global/states/store";
import { Center, Space, Stack } from "@mantine/core";
import { useSelector } from "react-redux";

export const NavbarDesktopLayout = () => {
  const { isMobile } = useSelector((state: RootState) => state.view);

  return (
    <Stack h="100%" gap="md" justify="space-between">
      <Space />
      <Center p="md">{isMobile ? <Banner320x50 /> : <Banner300x250 />}</Center>
    </Stack>
  );
};
