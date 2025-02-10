import { useGetQuoteById } from "../hooks/read";
import { QuoteItemLayout } from "../layouts";
import { CustomError } from "@/global/components/errors";
import { twoBg } from "@/global/styles/renamed.variables";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const GetQuoteByIdItem = () => {
  const { quote, isPending, isError, error } = useGetQuoteById();
  const { isMobile } = useSelector((state: RootState) => state.view);

  const bg = isMobile ? "" : twoBg;

  if (isError) return <CustomError message={error?.message} bg={bg} />;
  if (!quote && !isPending)
    return <CustomError message="Quotes not found." bg={bg} />;

  return <QuoteItemLayout quote={quote} isPending={isPending} />;
};
