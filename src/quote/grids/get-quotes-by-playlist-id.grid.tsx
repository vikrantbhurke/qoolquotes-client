import { MantineGrid } from "@/global/components/grids";
import { useGetQuotesByPlaylistId } from "../hooks/read";
import { QuoteGridItemLayout } from "../layouts";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { CustomLoader } from "@/global/components/loaders";
import { CustomError } from "@/global/components/errors";
import { setPage } from "../quote.slice";
import { useSelector } from "react-redux";
import { twoBg } from "@/global/styles/app.css";
import {
  addBoxShadow,
  getGridItemBorderWithBorder,
  removeBoxShadow,
} from "@/global/styles/global.styles";

export const GetQuotesByPlaylistIdGrid = () => {
  const { isMobile } = useSelector((state: any) => state.view);
  const { quotes, isPending, isError, error } = useGetQuotesByPlaylistId();
  const { page } = useSelector((state: any) => state.quote);
  const setData = useOutletContext<any>();

  useEffect(() => {
    setData((data: any) => ({
      ...data,
      page: quotes?.page + 1 || 0,
      totalPages: quotes?.totalPages || 0,
      totalElements: quotes?.totalElements || 0,
    }));
  }, [quotes, setData]);

  if (isPending) return <CustomLoader />;

  if (isError) return <CustomError message={error?.message} />;

  if (!quotes.content.length)
    return <CustomError message="Quotes not found." />;

  return (
    <MantineGrid
      p={8}
      page={page}
      gridBg={twoBg}
      setPage={setPage}
      dataArray={quotes.content}
      totalPages={quotes.totalPages}
      GridItemLayout={QuoteGridItemLayout}
      gridItemStyle={getGridItemBorderWithBorder(isMobile)}
      onMouseEnter={(e: any) => !isMobile && addBoxShadow(e)}
      onMouseLeave={(e: any) => !isMobile && removeBoxShadow(e)}
    />
  );
};
