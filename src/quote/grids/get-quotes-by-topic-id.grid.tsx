import { MantineGrid } from "@/global/components/grids";
import { useGetQuotesByTopicId } from "../hooks/read";
import { QuoteGridItemLayout } from "../layouts";
import { useOutletContext } from "react-router-dom";
import { CustomLoader } from "@/global/components/loaders";
import { CustomError } from "@/global/components/errors";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { setPage } from "../quote.slice";

export const GetQuotesByTopicIdGrid = () => {
  const { quotes, isPending, isError, error } = useGetQuotesByTopicId();
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
      page={page}
      setPage={setPage}
      dataArray={quotes.content}
      totalPages={quotes.totalPages}
      GridItemLayout={QuoteGridItemLayout}
    />
  );
};
