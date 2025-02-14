import { useGetQuoteById } from "../hooks/read";
import { QuoteItemLayout } from "../layouts";
import { CustomError } from "@/global/components/errors";
import { twoDefaultBg } from "@/global/styles/renamed.variables";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { useIsQuotePage } from "@/global/hooks";
import { globalUtility } from "@/global/utilities";

export const GetQuoteByIdItem = () => {
  const isQuotePage = useIsQuotePage();
  const { quote, isPending, isError, error } = useGetQuoteById();
  const { isMobile, color } = useSelector((state: RootState) => state.view);

  const twoBgColor = isQuotePage ? globalUtility.getTwoBg(color) : twoDefaultBg;
  const bg = isMobile ? "" : twoBgColor;

  if (isError) return <CustomError message={error?.message} bg={bg} />;
  if (!quote && !isPending)
    return <CustomError message="Quotes not found." bg={bg} />;

  return <QuoteItemLayout quote={quote} isPending={isPending} />;
};
