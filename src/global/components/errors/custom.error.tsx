import { Stack, Text } from "@mantine/core";

export const CustomError = ({ message }: any) => {
  return (
    <Stack justify="center" align="center" h="100%">
      <Text>{message}</Text>
    </Stack>
  );
};
