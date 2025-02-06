import { CustomLoader } from "@/global/components/loaders";
import { useGetTodaysQuote } from "../hooks/read";
import { QuoteItemLayout } from "../layouts";
import { CustomError } from "@/global/components/errors";
import { twoBg } from "@/global/styles/app.css";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const GetTodaysQuoteItem = () => {
  const { quote, isPending, isError, error } = useGetTodaysQuote();
  const { isMobile } = useSelector((state: RootState) => state.view);

  const bg = isMobile ? "" : twoBg;

  if (isPending) return <CustomLoader bg={bg} />;
  if (isError) return <CustomError message={error?.message} bg={bg} />;
  if (!quote) return <CustomError message="Quotes not found." bg={bg} />;

  return <QuoteItemLayout quote={quote} />;
};
