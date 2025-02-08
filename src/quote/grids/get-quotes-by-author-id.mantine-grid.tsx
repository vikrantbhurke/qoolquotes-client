import { MantineGrid } from "@/global/components/grids";
import { useGetQuotesByAuthorId } from "../hooks/read";
import { QuoteGridItemLayout } from "../layouts";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { CustomError } from "@/global/components/errors";
import { useSelector } from "react-redux";
import { setPage } from "../quote.slice";
import { oneBg, twoBg } from "@/global/styles/app.css";
import {
  addBoxShadowStyles,
  removeBoxShadowStyles,
} from "@/global/styles/global.styles";
import { PaginationPlaceholder } from "@/global/components/placeholders";
import { RootState } from "@/global/states/store";

export const GetQuotesByAuthorIdMantineGrid = () => {
  const { isMobile } = useSelector((state: RootState) => state.view);
  const { quotes, isPending, isError, error } = useGetQuotesByAuthorId();
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
        gridBg={isMobile ? oneBg : twoBg}
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
      gridBg={isMobile ? oneBg : twoBg}
      setPage={setPage}
      dataArray={quotes.content}
      totalPages={quotes.totalPages}
      GridItemLayout={QuoteGridItemLayout}
      onMouseEnter={(e: any) => !isMobile && addBoxShadowStyles(e)}
      onMouseLeave={(e: any) => !isMobile && removeBoxShadowStyles(e)}
    />
  );
};
