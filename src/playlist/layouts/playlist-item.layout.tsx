import { responsiveBreakpoint } from "@/global/styles/global.styles";
import {
  Button,
  Group,
  Stack,
  Grid,
  Avatar,
  Text,
  Center,
  Space,
  Box,
  Title,
} from "@mantine/core";
import {
  PlaylistLikerUnlikeButtonLayout,
  PlaylistLikesCountLayout,
  PlaylistLikerReadonlyButtonLayout,
} from "@/playlist-liker/layouts";
import { useDisclosure } from "@mantine/hooks";
import { oneBg, oneTx, roundBorderStyle, twoBg } from "@/global/styles/app.css";
import { setPage } from "@/quote/quote.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IconMessage2 } from "@tabler/icons-react";
import { useClonePlaylist } from "../hooks/create";
import { DeletePlaylistModalLayout } from "./delete-playlist-modal.layout";
import { PlaylistQuotesCountLayout } from "@/playlist-quote/layouts";
import {
  PlaylistSaverReadonlyButtonLayout,
  PlaylistSaverSaveRemoveButtonLayout,
} from "@/playlist-saver/layouts";
import { Role } from "@/user/enums";
import { I } from "@/global/components/components";
import { RootState } from "@/global/states/store";
import { setFilterObject } from "@/quote/quote.slice";
import DesktopLeaderboard from "@/global/ads/DesktopLeaderboard";
import Banner320x50 from "@/global/ads/Banner320x50";

export const PlaylistItemLayout = ({ playlist }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state: RootState) => state.auth);
  const { isMobile } = useSelector((state: RootState) => state.view);

  const [
    deletePlaylistOpened,
    { open: deletePlaylistOpen, close: deletePlaylistClose },
  ] = useDisclosure();

  const { clonePlaylistMutation, isPending } = useClonePlaylist();

  const handleClonePlaylist = () => {
    if (auth.role === Role.Public) {
      navigate("/sign-in");
      return;
    }

    clonePlaylistMutation({
      pid: playlist.id,
      cid: auth.id,
    });
  };

  const handleNavigateToQuotesByPlaylist = () => {
    dispatch(setPage(1));
    dispatch(setFilterObject({ name: playlist.name, id: playlist.id }));
    navigate(`/quotes/playlistId/${playlist.id}?page=1`);
  };

  return (
    <>
      <DeletePlaylistModalLayout
        opened={deletePlaylistOpened}
        close={deletePlaylistClose}
        pid={playlist.id}
      />

      <Box component="div" bg={isMobile ? oneBg : twoBg} h="100%">
        <Stack h="100%" gap="xl" align="center" justify="space-between">
          <Space visibleFrom={responsiveBreakpoint} h={isMobile ? 50 : 90} />

          <Stack
            w={isMobile ? "100%" : 400}
            gap="lg"
            bg={oneBg}
            p={isMobile ? "md" : "xl"}
            className={`${roundBorderStyle}`}>
            <Stack gap="sm">
              <Group gap={8}>
                <Title order={6}>Name:</Title>
                <Text>{playlist.name}</Text>
              </Group>

              {playlist.description && (
                <Group gap={8}>
                  <Title order={6}>Description:</Title>
                  <Text>{playlist.description}</Text>
                </Group>
              )}

              <Group gap={8}>
                <Title order={6}>Access:</Title>
                <Text>{playlist.access}</Text>
              </Group>

              <Group>
                {playlist.creatorId.profilepic ? (
                  <Avatar
                    size="md"
                    src={playlist.creatorId.profilepic}
                    radius="50%"
                  />
                ) : (
                  <Avatar size="md">
                    {playlist.creatorId.firstname[0]}
                    {playlist.creatorId.lastname[0]}
                  </Avatar>
                )}

                <Group gap={8}>
                  <Title order={6}>Creator:</Title>
                  <Text>{playlist.creatorId.username}</Text>
                </Group>
              </Group>

              <Group>
                <Group gap={4}>
                  {auth.role === Role.Public ? (
                    <PlaylistLikerReadonlyButtonLayout />
                  ) : (
                    <PlaylistLikerUnlikeButtonLayout pid={playlist.id} />
                  )}

                  <PlaylistLikesCountLayout pid={playlist.id} />
                </Group>

                <Group gap={4}>
                  <I I={IconMessage2} />
                  <PlaylistQuotesCountLayout pid={playlist.id} />
                </Group>
              </Group>
            </Stack>

            <Grid>
              <Grid.Col span={4}>
                <Button
                  fullWidth
                  radius="sm"
                  c={oneBg}
                  bg={oneTx}
                  onClick={handleNavigateToQuotesByPlaylist}>
                  View
                </Button>
              </Grid.Col>

              {auth.id === playlist.creatorId._id ? (
                <>
                  <Grid.Col span={4}>
                    <Button
                      fullWidth
                      type="submit"
                      radius="sm"
                      bg="blue"
                      onClick={() =>
                        navigate(`/playlists/${playlist.id}/edit`)
                      }>
                      Edit
                    </Button>
                  </Grid.Col>

                  <Grid.Col span={4}>
                    <Button
                      fullWidth
                      radius="sm"
                      bg="red"
                      onClick={deletePlaylistOpen}>
                      Delete
                    </Button>
                  </Grid.Col>
                </>
              ) : (
                <>
                  <Grid.Col span={4}>
                    {auth.role === Role.Public ? (
                      <PlaylistSaverReadonlyButtonLayout />
                    ) : (
                      <PlaylistSaverSaveRemoveButtonLayout pid={playlist.id} />
                    )}
                  </Grid.Col>

                  <Grid.Col span={4}>
                    <Button
                      fullWidth
                      radius="sm"
                      bg="blue"
                      onClick={handleClonePlaylist}
                      loading={isPending}
                      loaderProps={{ type: "dots" }}>
                      Clone
                    </Button>
                  </Grid.Col>
                </>
              )}
            </Grid>
          </Stack>

          <Center p="md">
            <Stack h={isMobile ? 50 : 90}>
              {isMobile ? <Banner320x50 /> : <DesktopLeaderboard />}
            </Stack>
          </Center>
        </Stack>
      </Box>
    </>
  );
};
