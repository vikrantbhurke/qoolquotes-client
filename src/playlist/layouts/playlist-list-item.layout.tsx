import {
  borderBottom,
  oneBg,
  oneTx,
  oneTxOneBgButtonPseudo,
} from "@/global/styles/app.css";
import { listItemHeight } from "@/global/styles/global.styles";
import { Avatar, Button, Group, Stack, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconQuote } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { setPage } from "@/quote/quote.slice";
import {
  PlaylistLikerUnlikeButtonLayout,
  PlaylistLikesCountLayout,
  PlaylistLikerReadonlyButtonLayout,
} from "@/playlist-liker/layouts";
import { PlaylistQuotesCountLayout } from "@/playlist-quote/layouts";
import { useSelector } from "react-redux";
import { Role } from "@/user/enums";
import { I } from "@/global/components/components";

export const PlaylistListItemLayout = ({ item }: any) => {
  const { auth } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigateToPlaylist = () => {
    navigate(`/playlists/${item.id}`);
  };

  const handleNavigateToQuotesByPlaylist = () => {
    dispatch(setPage(1));
    navigate(`/quotes/playlistId/${item.id}?page=1`, {
      state: { name: item.name, pid: item.id },
    });
  };

  return (
    <Stack
      px="md"
      gap={0}
      justify="center"
      h={listItemHeight}
      className={`${oneTxOneBgButtonPseudo} ${borderBottom}`}>
      <Group justify="space-between">
        <Text onClick={handleNavigateToPlaylist} fz="sm" fw="500">
          {item.name}
        </Text>

        <Group>
          <Group gap={4}>
            {auth.role === Role.Public ? (
              <PlaylistLikerReadonlyButtonLayout />
            ) : (
              <PlaylistLikerUnlikeButtonLayout pid={item.id} />
            )}

            <PlaylistLikesCountLayout pid={item.id} />
          </Group>

          <Group gap={4}>
            <I I={IconQuote} />
            <PlaylistQuotesCountLayout pid={item.id} />
          </Group>

          <Button
            px="xs"
            h="lg"
            radius="sm"
            c={oneBg}
            bg={oneTx}
            onClick={handleNavigateToQuotesByPlaylist}>
            View
          </Button>
        </Group>
      </Group>

      <Group justify="start" align="center" gap="xs">
        <Group onClick={handleNavigateToPlaylist}>
          {item.creatorId.profilepic ? (
            <Avatar size="sm" src={item.creatorId.profilepic} radius="50%" />
          ) : (
            <Avatar size="sm">
              {item.creatorId.firstname[0]}
              {item.creatorId.lastname[0]}
            </Avatar>
          )}

          <Text fz="xs">{item.creatorId.username}</Text>
        </Group>
      </Group>
    </Stack>
  );
};
