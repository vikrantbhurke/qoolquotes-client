import { oneBg } from "@/global/styles/app.css";
import { getTopRoundBordersStyles } from "@/global/styles/global.styles";
import { Center, Pagination } from "@mantine/core";
import { CustomNumberCombobox } from "../components";
import { useSelector } from "react-redux";

export const PaginationPlaceholder = () => {
  const { isMobile } = useSelector((state: any) => state.view);

  return (
    <>
      <Center
        style={{
          zIndex: 1,
          ...getTopRoundBordersStyles(isMobile),
        }}
        bg={oneBg}>
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
