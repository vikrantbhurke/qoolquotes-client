import { useGetTodaysQuote } from "../hooks/read";
import { CountdownAffix, QuoteItemLayout } from "../layouts";
import { CustomError } from "@/global/components/errors";
import { twoDefaultBg } from "@/global/styles/renamed.variables";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { globalUtility } from "@/global/utilities";
import { useIsQuotePage } from "@/global/hooks";

export const GetTodaysQuoteItem = () => {
  const isQuotePage = useIsQuotePage();
  const { quote, isPending, isError, error, refetch } = useGetTodaysQuote();
  const { isMobile, color } = useSelector((state: RootState) => state.view);

  const twoBgColor = isQuotePage ? globalUtility.getTwoBg(color) : twoDefaultBg;
  const bg = isMobile ? "" : twoBgColor;

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
