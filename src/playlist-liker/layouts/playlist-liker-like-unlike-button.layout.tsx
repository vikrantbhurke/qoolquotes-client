import { useSelector } from "react-redux";
import { useLikePlaylist } from "../hooks/create";
import { useUnlikePlaylist } from "../hooks/delete";
import { useCheckPlaylistLiker } from "../hooks/read";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Role } from "@/user/enums";
import { I } from "@/global/components/components";

export const PlaylistLikerUnlikeButtonLayout = ({ pid }: any) => {
  const navigate = useNavigate();
  const { auth } = useSelector((state: any) => state.auth);

  const { playlistLiker } = useCheckPlaylistLiker({
    pid,
    lid: auth.id,
  });

  const { likePlaylistMutation, isPending: isLikingPending } =
    useLikePlaylist();

  const { unlikePlaylistMutation, isPending: isUnlikingPending } =
    useUnlikePlaylist();

  const handleLikePlaylist = () => {
    likePlaylistMutation({ pid, lid: auth.id });
  };

  const handleUnlikePlaylist = () => {
    unlikePlaylistMutation({ pid, lid: auth.id });
  };

  const handleNavigateToSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <>
      {auth.role === Role.Public ? (
        <ActionIcon c="crimson" onClick={handleNavigateToSignIn}>
          <I I={IconHeartFilled} />
        </ActionIcon>
      ) : playlistLiker?.exists ? (
        <ActionIcon
          c="crimson"
          onClick={handleUnlikePlaylist}
          disabled={isUnlikingPending}>
          <I I={IconHeartFilled} />
        </ActionIcon>
      ) : (
        <ActionIcon
          c="crimson"
          onClick={handleLikePlaylist}
          disabled={isLikingPending}>
          <I I={IconHeart} />
        </ActionIcon>
      )}
    </>
  );
};
