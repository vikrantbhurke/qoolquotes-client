import {
  footerHeight,
  formTextInput,
  getMainContentHeight,
  headerHeight,
} from "@/global/styles/global.styles";
import {
  Button,
  Group,
  Stack,
  Textarea,
  TextInput,
  Grid,
  Loader,
  Avatar,
  Text,
} from "@mantine/core";
import {
  PlaylistLikerUnlikeButtonLayout,
  PlaylistLikesCountLayout,
  PlaylistLikerReadonlyButtonLayout,
} from "@/playlist-liker/layouts";
import { useDisclosure } from "@mantine/hooks";
import { oneBg, oneTx } from "@/global/styles/app.css";
import { setPage } from "@/quote/quote.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IconQuote } from "@tabler/icons-react";
import { useClonePlaylist } from "../hooks/create";
import { DeletePlaylistModalLayout } from "./delete-playlist-modal.layout";
import { PlaylistQuotesCountLayout } from "@/playlist-quote/layouts";
import {
  PlaylistSaverReadonlyButtonLayout,
  PlaylistSaverSaveRemoveButtonLayout,
} from "@/playlist-saver/layouts";
import { Role } from "@/user/enums";
import { useIsMobile } from "@/global/hooks";
import { I } from "@/global/components/components";

export const PlaylistItemLayout = ({ playlist }: any) => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state: any) => state.auth);

  const [
    deletePlaylistOpened,
    { open: deletePlaylistOpen, close: deletePlaylistClose },
  ] = useDisclosure();

  const { clonePlaylistMutation, isPending: isCloningPending } =
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
    navigate(`/quotes/playlistId/${playlist.id}?page=1`, {
      state: { name: playlist.name, pid: playlist.id },
    });
  };

  return (
    <Stack
      h={getMainContentHeight(headerHeight, footerHeight, 0, isMobile)}
      gap="xl"
      justify="center"
      align="center">
      <Stack maw={500} miw={400} gap="lg">
        <DeletePlaylistModalLayout
          opened={deletePlaylistOpened}
          close={deletePlaylistClose}
          pid={playlist.id}
        />

        <Stack gap="sm">
          <Stack gap={0}>
            <Text>Name</Text>
            <TextInput readOnly styles={formTextInput} value={playlist.name} />
          </Stack>

          <Stack gap={0}>
            <Text>Description</Text>
            <Textarea
              readOnly
              minRows={2}
              maxRows={2}
              styles={formTextInput}
              autosize
              value={playlist.description}
            />
          </Stack>

          <Stack gap={0}>
            <Text>Access</Text>
            <TextInput
              readOnly
              styles={formTextInput}
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
                styles={formTextInput}
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
              <I I={IconQuote} />
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
                  onClick={handleClonePlaylist}>
                  {isCloningPending ? (
                    <Loader type="dots" color={oneTx} />
                  ) : (
                    "Clone"
                  )}
                </Button>
              </Grid.Col>
            </>
          )}
        </Grid>
      </Stack>
    </Stack>
  );
};
