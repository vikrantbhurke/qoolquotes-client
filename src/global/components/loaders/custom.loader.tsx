import { oneTx } from "@/global/styles/app.css";
import { Loader, Stack } from "@mantine/core";

export const CustomLoader = () => {
  return (
    <Stack justify="center" align="center" h="100%">
      <Loader type="dots" color={oneTx} />
    </Stack>
  );
};
