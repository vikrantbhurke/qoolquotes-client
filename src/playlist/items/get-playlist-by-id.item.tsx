import { useGetPlaylistById } from "../hooks/read";
import { CustomError } from "@/global/components/errors";
import { PlaylistItemLayout } from "../layouts";
import { twoDefaultBg } from "@/global/styles/renamed.variables";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const GetPlaylistByIdItem = () => {
  const { playlist, isPending, isError, error } = useGetPlaylistById();
  const { isMobile } = useSelector((state: RootState) => state.view);

  const bg = isMobile ? "" : twoDefaultBg;

  if (isError) return <CustomError message={error?.message} bg={bg} />;
  if (!playlist && !isPending)
    return <CustomError message="Playlist not found." bg={bg} />;

  return <PlaylistItemLayout playlist={playlist} isPending={isPending} />;
};
