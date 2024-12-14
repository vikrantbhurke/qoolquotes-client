import { CustomLoader } from "@/global/components/loaders";
import { useGetPlaylistById } from "../hooks/read";
import { CustomError } from "@/global/components/errors";
import { PlaylistItemLayout } from "../layouts";

export const GetPlaylistByIdItem = () => {
  const { playlist, isPending, isError, error } = useGetPlaylistById();

  if (isPending) return <CustomLoader />;

  if (isError) return <CustomError message={error?.message} />;

  if (!playlist) return <CustomError message="Playlist not found." />;

  return <PlaylistItemLayout playlist={playlist} />;
};
