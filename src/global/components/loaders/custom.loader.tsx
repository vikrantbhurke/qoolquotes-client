import { oneDefaultBg, oneDefaultTx } from "@/global/styles/renamed.variables";
import { Loader, Stack } from "@mantine/core";

export const CustomLoader = ({ bg = oneDefaultBg }: any) => {
  return (
    <Stack justify="center" align="center" h="100%" bg={bg}>
      <Loader type="dots" color={oneDefaultTx} />
    </Stack>
  );
};
