import { oneDefaultBg } from "@/global/styles/renamed.variables";
import { getTopRoundBordersStyles } from "@/global/styles/global.styles";
import { Center, Pagination } from "@mantine/core";
import { CustomNumberCombobox } from "../reusables";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const PaginationPlaceholder = () => {
  const { isMobile } = useSelector((state: RootState) => state.view);

  return (
    <>
      <Center
        style={{
          zIndex: 1,
          ...getTopRoundBordersStyles(isMobile),
        }}
        bg={oneDefaultBg}>
        <CustomNumberCombobox
          data={[1]}
          value={1}
          handleValue={() => {}}
          id="pagination-combobox"
          totalPages={1}
        />

        <Pagination total={1} />
      </Center>
    </>
  );
};
