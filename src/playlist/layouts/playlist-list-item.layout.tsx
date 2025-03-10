import { themeDefaultTxPseudoStyle } from "@/global/styles/theme-tx-pseudo.css";
import { oneDefaultTx } from "@/global/styles/renamed.variables";
import { oneTxThemeDefaultBgPillPseudoStyle } from "@/global/styles/one-tx-theme-bg-pill-pseudo.css";
import { Avatar, Button, Group, Stack, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { IconMessage2 } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { setPage } from "@/quote/quote.slice";
import {
  PlaylistLikerUnlikeButton,
  PlaylistLikesCountLayout,
  PlaylistLikerReadonlyButton,
} from "@/playlist-liker/layouts";
import { PlaylistQuotesCountLayout } from "@/playlist-quote/layouts";
import { useSelector } from "react-redux";
import { Role } from "@/user/enums";
import { CustomSkeleton, I } from "@/global/components/reusables";
import { setFilterObject } from "@/quote/quote.slice";
import { textBold } from "@/global/styles/global.styles";
import { RootState } from "@/global/states/store";

export const PlaylistListItemLayout = ({ item }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);
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

  const isPending = item.isPending;

  return (
    <Stack px="md" gap="xs" justify="center" h={50}>
      <Group justify="space-between">
        <Group onClick={handleNavigateToPlaylist} gap="xs">
          {isPending ? (
            <CustomSkeleton w={80} h={20} />
          ) : (
            <Text
              fz="sm"
              fw={textBold}
              className={`${themeDefaultTxPseudoStyle}`}>
              {item.name}
            </Text>
          )}

          {isPending ? (
            <CustomSkeleton v="circular" w={20} h={20} />
          ) : (
            <>
              {item.creatorId.profilepic ? (
                <Avatar
                  size="sm"
                  src={item.creatorId.profilepic}
                  radius="50%"
                />
              ) : (
                <Avatar size="sm">
                  {item.creatorId.firstname[0]}
                  {item.creatorId.lastname[0]}
                </Avatar>
              )}
            </>
          )}

          {isPending ? (
            <CustomSkeleton w={60} h={15} />
          ) : (
            <Text fz="xs" className={`${themeDefaultTxPseudoStyle}`}>
              {item.creatorId.username}
            </Text>
          )}
        </Group>

        <Group gap="xs">
          <Group gap={4}>
            {isPending ? (
              <CustomSkeleton v="circular" w={20} h={20} />
            ) : auth.role === Role.Public ? (
              <PlaylistLikerReadonlyButton />
            ) : (
              <PlaylistLikerUnlikeButton pid={item.id} />
            )}

            {isPending ? <></> : <PlaylistLikesCountLayout pid={item.id} />}
          </Group>

          <Group gap={4}>
            {isPending ? (
              <CustomSkeleton v="circular" w={20} h={20} />
            ) : (
              <>
                <I I={IconMessage2} />
                <PlaylistQuotesCountLayout pid={item.id} />
              </>
            )}
          </Group>

          {isPending ? (
            <CustomSkeleton w={40} />
          ) : (
            <Button
              px={4}
              h="lg"
              c={oneDefaultTx}
              className={oneTxThemeDefaultBgPillPseudoStyle}
              onClick={handleNavigateToQuotesByPlaylist}>
              View
            </Button>
          )}
        </Group>
      </Group>
    </Stack>
  );
};
