import {
  borderBottom,
  oneBg,
  oneTx,
  oneTxOneBgButtonPseudo,
} from "@/global/styles/app.css";
import { listItemHeight } from "@/global/styles/global.styles";
import { Avatar, Button, Group, Stack, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconMessage2 } from "@tabler/icons-react";
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
import { setFilterObject } from "@/quote/quote.slice";

export const PlaylistListItemLayout = ({ item }: any) => {
  const { auth } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigateToPlaylist = () => {
    navigate(`/playlists/${item.id}`);
  };

  const handleNavigateToQuotesByPlaylist = () => {
    dispatch(setPage(1));
    dispatch(setFilterObject({ name: item.name, id: item.id }));
    navigate(`/quotes/playlistId/${item.id}?page=1`);
  };

  return (
    <Stack
      px="md"
      gap="xs"
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
            <I I={IconMessage2} />
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

      <Group onClick={handleNavigateToPlaylist} gap="xs">
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
    </Stack>
  );
};
