import { GetUserByIdItem } from "@/user/items";
import { SeoComponent } from "../reusables";
import { Box, Stack } from "@mantine/core";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { roundBorderStyle } from "@/global/styles/app.css";
import { oneDefaultBg, twoDefaultBg } from "@/global/styles/renamed.variables";
import { GetSubscriptionItem } from "@/subscription/items";

export const UserPage = () => {
  const { isMobile } = useSelector((state: RootState) => state.view);

  return (
    <>
      <SeoComponent
        title={`Profile Page`}
        description="Learn more about Qool Quotes."
      />

      <Box component="div" bg={isMobile ? oneDefaultBg : twoDefaultBg} h="100%">
        <Stack
          h="100%"
          gap="xl"
          align="center"
          justify={isMobile ? "start" : "center"}>
          <Stack
            w={isMobile ? "100%" : 400}
            gap="xl"
            bg={oneDefaultBg}
            p={isMobile ? "md" : "xl"}
            className={`${roundBorderStyle}`}>
            <GetUserByIdItem />
            <GetSubscriptionItem />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
