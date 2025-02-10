import { oneBg } from "@/global/styles/renamed.variables";
import { Stack, Text } from "@mantine/core";

export const CustomError = ({ message, bg = oneBg }: any) => {
  return (
    <Stack justify="center" align="center" h="100%" bg={bg}>
      <Text fz="sm">{message}</Text>
    </Stack>
  );
};
