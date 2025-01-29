import { CustomLoader } from "@/global/components/loaders";
import { useGetPlaylistById } from "../hooks/read";
import { CustomError } from "@/global/components/errors";
import { PlaylistItemLayout } from "../layouts";
import { twoBg } from "@/global/styles/app.css";

export const GetPlaylistByIdItem = () => {
  const { playlist, isPending, isError, error } = useGetPlaylistById();

  if (isPending) return <CustomLoader bg={twoBg} />;

  if (isError) return <CustomError message={error?.message} bg={twoBg} />;

  if (!playlist)
    return <CustomError message="Playlist not found." bg={twoBg} />;

  return <PlaylistItemLayout playlist={playlist} />;
};
