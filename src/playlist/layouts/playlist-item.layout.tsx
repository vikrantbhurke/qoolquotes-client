import { getFormTextInput } from "@/global/styles/global.styles";
import {
  Button,
  Group,
  Stack,
  Textarea,
  TextInput,
  Grid,
  Avatar,
  Text,
  Center,
  Space,
} from "@mantine/core";
import {
  PlaylistLikerUnlikeButtonLayout,
  PlaylistLikesCountLayout,
  PlaylistLikerReadonlyButtonLayout,
} from "@/playlist-liker/layouts";
import { useDisclosure } from "@mantine/hooks";
import { oneBg, oneTx, inputStyles } from "@/global/styles/app.css";
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
import { setFocusedInput } from "@/global/states/view.slice";
import { setFilterObject } from "@/quote/quote.slice";
import DesktopLeaderboard from "@/ads/DesktopLeaderboard";
import { useIsMobile } from "@/global/hooks";
import Banner320x50 from "@/ads/Banner320x50";

export const PlaylistItemLayout = ({ playlist }: any) => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state: RootState) => state.auth);
  const { focusedInput } = useSelector((state: RootState) => state.view);

  const handleFocus = (id: string) => dispatch(setFocusedInput(id));
  const handleBlur = () => dispatch(setFocusedInput(""));

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
    <Stack h="100%" gap="xl" align="center" justify="space-between">
      <Center p="md">
        <Stack h={isMobile ? 50 : 90}>
          {isMobile ? <Banner320x50 /> : <DesktopLeaderboard />}
        </Stack>
      </Center>

      <Stack maw={500} miw={400} gap="lg">
        <DeletePlaylistModalLayout
          opened={deletePlaylistOpened}
          close={deletePlaylistClose}
          pid={playlist.id}
        />

        <Stack gap="sm">
          <Stack gap={0}>
            <Text>Name</Text>
            <TextInput
              readOnly
              classNames={{ input: inputStyles }}
              styles={getFormTextInput(focusedInput === "name")}
              wrapperProps={{
                onFocus: () => handleFocus("name"),
                onBlur: handleBlur,
              }}
              value={playlist.name}
            />
          </Stack>

          <Stack gap={0}>
            <Text>Description</Text>
            <Textarea
              readOnly
              minRows={2}
              maxRows={2}
              classNames={{ input: inputStyles }}
              styles={getFormTextInput(focusedInput === "description")}
              wrapperProps={{
                onFocus: () => handleFocus("description"),
                onBlur: handleBlur,
              }}
              autosize
              value={playlist.description}
            />
          </Stack>

          <Stack gap={0}>
            <Text>Access</Text>
            <TextInput
              readOnly
              classNames={{ input: inputStyles }}
              styles={getFormTextInput(focusedInput === "access")}
              wrapperProps={{
                onFocus: () => handleFocus("access"),
                onBlur: handleBlur,
              }}
              value={playlist.access}
            />
          </Stack>

          <Group align="center">
            {playlist.creatorId.profilepic ? (
              <Avatar
                size="lg"
                src={playlist.creatorId.profilepic}
                radius="50%"
              />
            ) : (
              <Avatar size="lg">
                {playlist.creatorId.firstname[0]}
                {playlist.creatorId.lastname[0]}
              </Avatar>
            )}

            <Stack gap={0} miw="82%">
              <Text>Creator</Text>

              <TextInput
                readOnly
                classNames={{ input: inputStyles }}
                styles={getFormTextInput(focusedInput === "creator")}
                wrapperProps={{
                  onFocus: () => handleFocus("creator"),
                  onBlur: handleBlur,
                }}
                value={playlist.creatorId.username}
              />
            </Stack>
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
                  onClick={() => navigate(`/playlists/${playlist.id}/edit`)}>
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

      <Space h={isMobile ? 50 : 90} />
    </Stack>
  );
};
