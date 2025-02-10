import { useSearchQuotes } from "../hooks/read";
import { QuoteGridItemLayout } from "../layouts";
import { CustomError } from "@/global/components/errors";
import { MantineGrid } from "@/global/components/grids";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import { setPage } from "../quote.slice";
import {
  addBoxShadowStyles,
  removeBoxShadowStyles,
} from "@/global/styles/global.styles";
import { PaginationPlaceholder } from "@/global/components/placeholders";
import { RootState } from "@/global/states/store";
import { globalUtility } from "@/global/utilities";

export const SearchQuotesMantineGrid = () => {
  const { isMobile, color } = useSelector((state: RootState) => state.view);
  const { quotes, isPending, isError, error } = useSearchQuotes();
  const { page } = useSelector((state: RootState) => state.quote);
  const setData = useOutletContext<any>();

  useEffect(() => {
    setData((data: any) => ({
      ...data,
      page: quotes?.page + 1 || 0,
      totalPages: quotes?.totalPages || 0,
      totalElements: quotes?.totalElements || 0,
    }));
  }, [quotes, setData]);

  if (isPending)
    return (
      <MantineGrid
        p={8}
        page={page}
        gridBg={
          isMobile
            ? globalUtility.getOneBg(color)
            : globalUtility.getTwoBg(color)
        }
        setPage={setPage}
        dataArray={Array(6).fill({ isPending })}
        totalPages={1}
        GridItemLayout={QuoteGridItemLayout}
      />
    );

  if (isError)
    return (
      <>
        <CustomError message={error?.message} />
        <PaginationPlaceholder />
      </>
    );

  if (!quotes.content.length)
    return (
      <>
        <CustomError message="Quotes not found." />
        <PaginationPlaceholder />
      </>
    );

  return (
    <MantineGrid
      p={8}
      page={page}
      gridBg={
        isMobile ? globalUtility.getOneBg(color) : globalUtility.getTwoBg(color)
      }
      setPage={setPage}
      dataArray={quotes.content}
      totalPages={quotes.totalPages}
      GridItemLayout={QuoteGridItemLayout}
      onMouseEnter={(e: any) => !isMobile && addBoxShadowStyles(e)}
      onMouseLeave={(e: any) => !isMobile && removeBoxShadowStyles(e)}
    />
  );
};
