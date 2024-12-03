import { MantineGrid } from "@/global/components/grids";
import { useGetQuotesByAuthorId } from "../hooks/read";
import { QuoteGridItemLayout } from "../layouts";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { CustomLoader } from "@/global/components/loaders";
import { CustomError } from "@/global/components/errors";
import { subheaderHeight } from "@/global/styles/global.styles";
import { useSelector } from "react-redux";
import { setPage } from "../quote.slice";

export const GetQuotesByAuthorIdGrid = () => {
  const { quotes, isPending, isError, error } = useGetQuotesByAuthorId();
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

  if (isPending) return <CustomLoader subheaderHeight={subheaderHeight} />;

  if (isError)
    return (
      <CustomError subheaderHeight={subheaderHeight} message={error?.message} />
    );

  if (!quotes.content.length)
    return (
      <CustomError
        subheaderHeight={subheaderHeight}
        message="Quotes not found."
      />
    );

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
