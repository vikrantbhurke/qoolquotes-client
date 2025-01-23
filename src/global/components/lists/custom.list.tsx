import { useIsComponentVisible } from "@/global/hooks";
import { setIsPaginationVisible } from "@/global/states/view.slice";
import { borderTopShadow, oneBg } from "@/global/styles/app.css";
import {
  addBoxShadow,
  getGridListItemBorderWithBorder,
  getPaginationStyles,
  getTopRoundBorders,
  removeBoxShadow,
  subheaderHeight,
} from "@/global/styles/global.styles";
import { Box, Center, Pagination, ScrollArea, Stack } from "@mantine/core";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { CustomNumberCombobox } from "../components";

export const CustomList = ({
  dataArray,
  page,
  listBg,
  setPage,
  totalPages,
  ListItemLayout,
}: any) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  useIsComponentVisible(ref, setIsPaginationVisible);
  let [searchParams, setSearchParams] = useSearchParams();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useSelector((state: any) => state.view);

  const handlePage = (page: number) => {
    dispatch(setPage(page));
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", `${page}`);
    setSearchParams(newSearchParams);

    const scrollableContainer = scrollAreaRef.current?.querySelector(
      ".mantine-ScrollArea-viewport"
    );

    if (scrollableContainer) {
      scrollableContainer.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <Stack
      gap={0}
      justify="space-between"
      h={`calc(100% - ${subheaderHeight}px - ${isMobile ? 50 : 90}px)`}
      bg={listBg}>
      <ScrollArea ref={scrollAreaRef} scrollbarSize={2}>
        <Box component="div" p={isMobile ? 0 : 4}>
          {dataArray.map((item: any, index: number) => {
            return (
              <Box key={index} p={isMobile ? 0 : 4}>
                <Box
                  h="100%"
                  bg={oneBg}
                  component="div"
                  style={getGridListItemBorderWithBorder(isMobile)}
                  onMouseEnter={(e) => !isMobile && addBoxShadow(e)}
                  onMouseLeave={(e) => !isMobile && removeBoxShadow(e)}>
                  <ListItemLayout item={item} />
                </Box>
              </Box>
            );
          })}
        </Box>
      </ScrollArea>

      <Center
        ref={ref}
        className={borderTopShadow}
        style={{
          zIndex: 1,
          ...getPaginationStyles(isMobile),
          ...getTopRoundBorders(isMobile),
        }}
        bg={oneBg}>
        <CustomNumberCombobox
          data={Array.from({ length: totalPages }, (_, i) => i + 1)}
          value={page}
          handleValue={handlePage}
          id="pagination-combobox"
          totalPages={totalPages}
        />

        <Pagination
          size="md"
          m="xs"
          radius="sm"
          siblings={0}
          value={page}
          onChange={handlePage}
          total={totalPages}
        />
      </Center>
    </Stack>
  );
};
