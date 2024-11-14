import { MantineGrid } from "@/global/components/grids";
import { useGetQuotesByAuthorIdGrid } from "../hooks/read";
import { QuoteGridItem } from "../layouts";

export const GetQuotesByAuthorIdGrid = () => {
  const { quotes } = useGetQuotesByAuthorIdGrid();

  return (
    <MantineGrid dataArray={quotes} totalPages={5} GridItem={QuoteGridItem} />
  );
};
