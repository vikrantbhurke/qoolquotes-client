import { Text } from "@mantine/core";
import { useCountPlaylistLikes } from "../hooks/read";
import { globalUtility } from "@/global/utilities";

export const PlaylistLikesCountLayout = ({ pid }: any) => {
  const { playlistLikes } = useCountPlaylistLikes(pid);

  return (
    <Text fz="xs" ta="center" pt={2}>
      {globalUtility.formatNumber(playlistLikes?.count || 0)}
    </Text>
  );
};
