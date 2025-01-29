import { CustomLoader } from "@/global/components/loaders";
import { useGetQuoteById } from "../hooks/read";
import { QuoteItemLayout } from "../layouts";
import { CustomError } from "@/global/components/errors";
import { twoBg } from "@/global/styles/app.css";

export const GetQuoteByIdItem = () => {
  const { quote, isPending, isError, error } = useGetQuoteById();

  if (isPending) return <CustomLoader bg={twoBg} />;

  if (isError) return <CustomError message={error?.message} bg={twoBg} />;

  if (!quote) return <CustomError message="Quotes not found." bg={twoBg} />;

  return <QuoteItemLayout quote={quote} />;
};
