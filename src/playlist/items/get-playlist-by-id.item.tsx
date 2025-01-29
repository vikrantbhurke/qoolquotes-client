import { CustomLoader } from "@/global/components/loaders";
import { useGetPlaylistById } from "../hooks/read";
import { CustomError } from "@/global/components/errors";
import { PlaylistItemLayout } from "../layouts";
import { twoBg } from "@/global/styles/app.css";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const GetPlaylistByIdItem = () => {
  const { playlist, isPending, isError, error } = useGetPlaylistById();
  const { isMobile } = useSelector((state: RootState) => state.view);

  const bg = isMobile ? "" : twoBg;

  if (isPending) return <CustomLoader bg={bg} />;
  if (isError) return <CustomError message={error?.message} bg={bg} />;
  if (!playlist) return <CustomError message="Playlist not found." bg={bg} />;

  return <PlaylistItemLayout playlist={playlist} />;
};
