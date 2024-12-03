import { CustomLoader } from "@/global/components/loaders";
import { useGetQuoteById } from "../hooks/read";
import { QuoteItemLayout } from "../layouts";
import { CustomError } from "@/global/components/errors";

export const GetQuoteByIdItem = () => {
  const { quote, isPending, isError, error } = useGetQuoteById();

  if (isPending) return <CustomLoader subheaderHeight={0} />;

  if (isError)
    return <CustomError subheaderHeight={0} message={error?.message} />;

  if (!quote)
    return <CustomError subheaderHeight={0} message="Quotes not found." />;

  return <QuoteItemLayout quote={quote} />;
};
