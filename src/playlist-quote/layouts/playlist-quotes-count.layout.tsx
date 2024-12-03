import { Text } from "@mantine/core";
import { useCountPlaylistQuotes } from "../hooks/read";
import { globalUtility } from "@/global/utilities";

export const PlaylistQuotesCountLayout = ({ pid }: any) => {
  const { playlistQuotes } = useCountPlaylistQuotes(pid);

  return (
    <Text fz="xs" ta="center" pt={2}>
      {globalUtility.formatNumber(playlistQuotes?.count || 0)}
    </Text>
  );
};
