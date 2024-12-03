import { Text } from "@mantine/core";
import { useCountQuoteLikes } from "../hooks/read";
import { globalUtility } from "@/global/utilities";

export const QuoteLikesCountLayout = ({ qid }: any) => {
  const { quoteLikes } = useCountQuoteLikes(qid);

  return (
    <Text fz="xs" ta="center" pt={2}>
      {globalUtility.formatNumber(quoteLikes?.count || 0)}
    </Text>
  );
};
