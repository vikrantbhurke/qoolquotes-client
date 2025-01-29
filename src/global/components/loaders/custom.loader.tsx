import { oneBg, oneTx } from "@/global/styles/app.css";
import { Loader, Stack } from "@mantine/core";

export const CustomLoader = ({ bg = oneBg }: any) => {
  return (
    <Stack justify="center" align="center" h="100%" bg={bg}>
      <Loader type="dots" color={oneTx} />
    </Stack>
  );
};
