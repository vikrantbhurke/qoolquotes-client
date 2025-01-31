import {
  oneTx,
  oneTxYellowBgPillPseudoStyle,
  themeTxStyle,
} from "@/global/styles/app.css";
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
import { I } from "@/global/components/reusables";
import { setFilterObject } from "@/quote/quote.slice";
import { textBold } from "@/global/styles/global.styles";

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
    <Stack px="md" gap="xs" justify="center" h={50}>
      <Group justify="space-between">
        <Group onClick={handleNavigateToPlaylist} gap="xs">
          <Text fz="sm" fw={textBold} className={`${themeTxStyle}`}>
            {item.name}
          </Text>

          {item.creatorId.profilepic ? (
            <Avatar size="sm" src={item.creatorId.profilepic} radius="50%" />
          ) : (
            <Avatar size="sm">
              {item.creatorId.firstname[0]}
              {item.creatorId.lastname[0]}
            </Avatar>
          )}

          <Text fz="xs" className={`${themeTxStyle}`}>
            {item.creatorId.username}
          </Text>
        </Group>

        <Group gap="xs">
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
            px={4}
            h="lg"
            c={oneTx}
            className={oneTxYellowBgPillPseudoStyle}
            onClick={handleNavigateToQuotesByPlaylist}>
            View
          </Button>
        </Group>
      </Group>
    </Stack>
  );
};
