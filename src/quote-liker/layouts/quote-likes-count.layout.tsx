import { Text } from "@mantine/core";
import { useCountQuoteLikes } from "../hooks/read";
import { globalUtility } from "@/global/utilities";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const QuoteLikesCountLayout = ({ qid }: any) => {
  const { quoteLikes } = useCountQuoteLikes(qid);
  const { color } = useSelector((state: RootState) => state.view);

  return (
    <Text
      className="exclude"
      fz="xs"
      ta="center"
      pt={2}
      c={globalUtility.getOneTx(color)}>
      {globalUtility.formatNumber(quoteLikes?.count || 0)}
    </Text>
  );
};
