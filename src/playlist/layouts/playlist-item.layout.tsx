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
  ActionIcon,
} from "@mantine/core";
import {
  PlaylistLikerUnlikeButton,
  PlaylistLikesCountLayout,
  PlaylistLikerReadonlyButton,
} from "@/playlist-liker/layouts";
import { useDisclosure } from "@mantine/hooks";
import { roundBorderStyle } from "@/global/styles/app.css";
import {
  oneDefaultBg,
  oneDefaultTx,
  twoDefaultBg,
} from "@/global/styles/renamed.variables";
import { setPage } from "@/quote/quote.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IconMessage2, IconShare } from "@tabler/icons-react";
import { useClonePlaylist } from "../hooks/create";
import { DeletePlaylistModal } from "./delete-playlist.modal";
import { PlaylistQuotesCountLayout } from "@/playlist-quote/layouts";
import {
  PlaylistSaverReadonlyButton,
  PlaylistSaverSaveRemoveButton,
} from "@/playlist-saver/layouts";
import { Clearance, Role } from "@/user/enums";
import { CustomSkeleton, I } from "@/global/components/reusables";
import { RootState } from "@/global/states/store";
import { setFilterObject } from "@/quote/quote.slice";
import DesktopLeaderboard from "@/global/ads/DesktopLeaderboard";
import Banner320x50 from "@/global/ads/Banner320x50";
import { ShareModal } from "@/global/components/views";
import { ComponentOneOrTwoRoute } from "@/global/routes";
import { userUtility } from "@/user/user.utility";

export const PlaylistItemLayout = ({ playlist, isPending }: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state: RootState) => state.auth);
  const { isMobile } = useSelector((state: RootState) => state.view);

  const [
    deletePlaylistModalOpened,
    { open: deletePlaylistModalOpen, close: deletePlaylistModalClose },
  ] = useDisclosure();

  const [shareModalOpened, { open: shareModalOpen, close: shareModalClose }] =
    useDisclosure(false);

  const { clonePlaylistMutation, isPending: isClonePending } =
    useClonePlaylist();

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

  const handleShare = () => {
    shareModalOpen();
  };

  const url = `${import.meta.env.VITE_CLIENT_URL}/playlists/${playlist?.id}`;
  const title = `View QoolQuotes playlist '${playlist?.name}' at`;

  const isSubscriber = userUtility.isSubscriber(auth.role);

  return (
    <>
      <ShareModal
        opened={shareModalOpened}
        close={shareModalClose}
        url={url}
        title={title}
      />

      <DeletePlaylistModal
        opened={deletePlaylistModalOpened}
        close={deletePlaylistModalClose}
        pid={playlist?.id}
      />

      <Box component="div" bg={isMobile ? oneDefaultBg : twoDefaultBg} h="100%">
        <Stack
          h="100%"
          gap="xl"
          align="center"
          justify={isSubscriber ? "center" : "space-between"}>
          <ComponentOneOrTwoRoute
            clearance={Clearance.LevelThree}
            compOne={<></>}
            compTwo={
              <Space
                visibleFrom={responsiveBreakpoint}
                h={isMobile ? 50 : 90}
              />
            }
          />

          <Stack
            w={isMobile ? "100%" : 400}
            gap="lg"
            bg={oneDefaultBg}
            p={isMobile ? "md" : "xl"}
            className={`${roundBorderStyle}`}>
            <Stack gap="sm">
              <Group gap={8}>
                {isPending ? (
                  <>
                    <CustomSkeleton w={50} />
                    <CustomSkeleton />
                  </>
                ) : (
                  <>
                    <Title order={6}>Name:</Title>
                    <Text fz="sm">{playlist.name}</Text>
                  </>
                )}
              </Group>

              {isPending ? (
                <>
                  <CustomSkeleton />
                  <CustomSkeleton w="100%" />
                </>
              ) : (
                <>
                  {playlist.description && (
                    <Group gap={8}>
                      <Title order={6}>Description:</Title>
                      <Text fz="sm">{playlist.description}</Text>
                    </Group>
                  )}
                </>
              )}

              <Group gap={8}>
                {isPending ? (
                  <>
                    <CustomSkeleton w={50} />
                    <CustomSkeleton w={50} />
                  </>
                ) : (
                  <>
                    <Title order={6}>Access:</Title>
                    <Text fz="sm">{playlist.access}</Text>
                  </>
                )}
              </Group>

              <Group>
                {isPending ? (
                  <>
                    <CustomSkeleton v="circular" w={35} h={35} />
                  </>
                ) : (
                  <>
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
                  </>
                )}

                <Group gap={8}>
                  {isPending ? (
                    <>
                      <CustomSkeleton w={50} />
                      <CustomSkeleton />
                    </>
                  ) : (
                    <>
                      <Title order={6}>Creator:</Title>
                      <Text fz="sm">{playlist.creatorId.username}</Text>
                    </>
                  )}
                </Group>
              </Group>

              <Group>
                <Group gap={4}>
                  {isPending ? (
                    <CustomSkeleton v="circular" w={20} h={20} />
                  ) : auth.role === Role.Public ? (
                    <PlaylistLikerReadonlyButton />
                  ) : (
                    <PlaylistLikerUnlikeButton pid={playlist.id} />
                  )}

                  {isPending ? (
                    <></>
                  ) : (
                    <PlaylistLikesCountLayout pid={playlist.id} />
                  )}
                </Group>

                <Group gap={4}>
                  {isPending ? (
                    <CustomSkeleton v="circular" w={20} h={20} />
                  ) : (
                    <>
                      <I I={IconMessage2} />
                      <PlaylistQuotesCountLayout pid={playlist.id} />
                    </>
                  )}
                </Group>

                <Group gap={4}>
                  {isPending ? (
                    <CustomSkeleton v="circular" w={20} h={20} />
                  ) : (
                    <ActionIcon onClick={handleShare} aria-label="Share">
                      <I I={IconShare} />
                    </ActionIcon>
                  )}
                </Group>
              </Group>
            </Stack>

            <Grid>
              <Grid.Col span={4}>
                {isPending ? (
                  <Button fullWidth c={oneDefaultBg} bg={oneDefaultTx}>
                    View
                  </Button>
                ) : (
                  <Button
                    fullWidth
                    c={oneDefaultBg}
                    bg={oneDefaultTx}
                    onClick={handleNavigateToQuotesByPlaylist}>
                    View
                  </Button>
                )}
              </Grid.Col>

              {isPending ? (
                <></>
              ) : auth.id === playlist.creatorId._id ? (
                <>
                  <Grid.Col span={4}>
                    <Button
                      fullWidth
                      type="submit"
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
                      bg="red"
                      onClick={deletePlaylistModalOpen}>
                      Delete
                    </Button>
                  </Grid.Col>
                </>
              ) : (
                <>
                  <Grid.Col span={4}>
                    {isPending ? (
                      <CustomSkeleton v="circular" w={20} h={20} />
                    ) : auth.role === Role.Public ? (
                      <PlaylistSaverReadonlyButton />
                    ) : (
                      <PlaylistSaverSaveRemoveButton pid={playlist.id} />
                    )}
                  </Grid.Col>

                  <Grid.Col span={4}>
                    <Button
                      fullWidth
                      bg="blue"
                      onClick={handleClonePlaylist}
                      disabled={isPending}
                      loading={isClonePending}
                      loaderProps={{ type: "dots" }}>
                      Clone
                    </Button>
                  </Grid.Col>
                </>
              )}
            </Grid>
          </Stack>

          <ComponentOneOrTwoRoute
            clearance={Clearance.LevelThree}
            compOne={<></>}
            compTwo={
              <Center p="md">
                <Stack h={isMobile ? 50 : 90}>
                  {isMobile ? <Banner320x50 /> : <DesktopLeaderboard />}
                </Stack>
              </Center>
            }
          />
        </Stack>
      </Box>
    </>
  );
};
