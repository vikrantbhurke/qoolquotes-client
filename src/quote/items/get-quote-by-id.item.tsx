import { useGetQuoteById } from "../hooks/read";
import { QuoteItemLayout } from "../layouts";
import { CustomError } from "@/global/components/errors";
import { twoBg } from "@/global/styles/app.css";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { QuoteItemSkeleton } from "../skeletons";

export const GetQuoteByIdItem = () => {
  const { quote, isPending, isError, error } = useGetQuoteById();
  const { isMobile } = useSelector((state: RootState) => state.view);

  const bg = isMobile ? "" : twoBg;

  if (isPending) return <QuoteItemSkeleton />;
  if (isError) return <CustomError message={error?.message} bg={bg} />;
  if (!quote) return <CustomError message="Quotes not found." bg={bg} />;

  return <QuoteItemLayout quote={quote} />;
};
