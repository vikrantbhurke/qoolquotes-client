import { useGetTodaysQuote } from "../hooks/read";
import { CountdownAffix, QuoteItemLayout } from "../layouts";
import { CustomError } from "@/global/components/errors";
import { twoBg } from "@/global/styles/renamed.variables";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const GetTodaysQuoteItem = () => {
  const { quote, isPending, isError, error, refetch } = useGetTodaysQuote();
  const { isMobile } = useSelector((state: RootState) => state.view);

  const bg = isMobile ? "" : twoBg;

  if (isError) return <CustomError message={error?.message} bg={bg} />;
  if (!quote && !isPending)
    return <CustomError message="Quotes not found." bg={bg} />;

  return (
    <>
      <CountdownAffix refetch={refetch} />
      <QuoteItemLayout quote={quote} isPending={isPending} />
    </>
  );
};
