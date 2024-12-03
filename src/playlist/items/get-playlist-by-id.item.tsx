import { CustomLoader } from "@/global/components/loaders";
import { useGetPlaylistById } from "../hooks/read";
import { CustomError } from "@/global/components/errors";
import { PlaylistItemLayout } from "../layouts";

export const GetPlaylistByIdItem = () => {
  const { playlist, isPending, isError, error } = useGetPlaylistById();

  if (isPending) return <CustomLoader subheaderHeight={0} />;

  if (isError)
    return <CustomError subheaderHeight={0} message={error?.message} />;

  if (!playlist)
    return <CustomError subheaderHeight={0} message="Playlist not found." />;

  return <PlaylistItemLayout playlist={playlist} />;
};
