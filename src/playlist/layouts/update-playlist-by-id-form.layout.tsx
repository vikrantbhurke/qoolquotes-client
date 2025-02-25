import { getFormTextInputStyles } from "@/global/styles/global.styles";
import {
  ActionIcon,
  Button,
  Group,
  Space,
  Stack,
  Textarea,
  TextInput,
  Text,
  Grid,
  Avatar,
  Box,
} from "@mantine/core";
import { useSelector } from "react-redux";
import { useUpdatePlaylistByIdForm } from "../hooks/update";
import { IconMessage2, IconRefresh } from "@tabler/icons-react";
import { setAccess } from "../playlist.slice";
import { useDispatch } from "react-redux";
import { CustomEnumCombobox, I } from "@/global/components/reusables";
import { Access } from "../enums";
import { globalUtility } from "@/global/utilities";
import { useNavigate } from "react-router-dom";
import {
  PlaylistLikerUnlikeButton,
  PlaylistLikesCountLayout,
} from "@/playlist-liker/layouts";
import { playlistUtility } from "../playlist.utility";
import { PlaylistQuotesCountLayout } from "@/playlist-quote/layouts";
import { RootState } from "@/global/states/store";
import { setFocusedInput } from "@/global/states/view.slice";
import { roundBorderStyle } from "@/global/styles/app.css";
import { oneDefaultBg, twoDefaultBg } from "@/global/styles/renamed.variables";

export const UpdatePlaylistByIdFormLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { access } = useSelector((state: RootState) => state.playlist);

  const { focusedInput, isMobile } = useSelector(
    (state: RootState) => state.view
  );

  const handleFocus = (id: string) => dispatch(setFocusedInput(id));
  const handleBlur = () => dispatch(setFocusedInput(""));

  const { playlist, form, handleUpdatePlaylistById, isPending } =
    useUpdatePlaylistByIdForm();

  const handleAccess = (value: any) => {
    dispatch(setAccess(value));
  };

  const handleFormReset = () => {
    form.reset();
    dispatch(setAccess(Access.Public));
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <Box component="div" bg={isMobile ? oneDefaultBg : twoDefaultBg} h="100%">
      <Stack px="md" h="100%" gap="xl" justify="center" align="center" py="xl">
        <form onSubmit={form.onSubmit(handleUpdatePlaylistById)}>
          <Stack
            w={400}
            gap="lg"
            bg={oneDefaultBg}
            p={isMobile ? "md" : "xl"}
            className={`${roundBorderStyle}`}>
            <Group gap={0} align="center" justify="space-between">
              <Space w="md" />

              {form.isDirty() ? (
                <ActionIcon aria-label="Refresh" onClick={handleFormReset}>
                  <I I={IconRefresh} />
                </ActionIcon>
              ) : (
                <ActionIcon
                  disabled
                  c="transparent"
                  aria-label="Refresh Disabled"
                />
              )}
            </Group>

            <Stack gap="sm">
              <Stack gap={0}>
                <Group justify="space-between" w="100%">
                  <Text fz="sm">Name</Text>
                  <Text
                    fz="xs"
                    c={playlistUtility.getNameColor(form.values.name.length)}>
                    {form.values.name.length} / 30
                  </Text>
                </Group>

                <TextInput
                  minLength={3}
                  maxLength={30}
                  styles={getFormTextInputStyles(focusedInput === "name")}
                  wrapperProps={{
                    onFocus: () => handleFocus("name"),
                    onBlur: handleBlur,
                  }}
                  placeholder={playlist.name}
                  key={form.key("name")}
                  {...form.getInputProps("name")}
                />
              </Stack>

              <Stack gap={0}>
                <Group justify="space-between" w="100%">
                  <Text fz="sm">Description</Text>
                  <Text
                    fz="xs"
                    c={playlistUtility.getDescriptionColor(
                      form.values.description.length
                    )}>
                    {form.values.description.length} / 100
                  </Text>
                </Group>

                <Textarea
                  autosize
                  minRows={2}
                  maxRows={2}
                  minLength={0}
                  maxLength={100}
                  styles={getFormTextInputStyles(
                    focusedInput === "description"
                  )}
                  wrapperProps={{
                    onFocus: () => handleFocus("description"),
                    onBlur: handleBlur,
                  }}
                  placeholder={playlist.description}
                  key={form.key("description")}
                  {...form.getInputProps("description")}
                />
              </Stack>

              <Stack gap={0} align="stretch">
                <Text fz="sm">Access</Text>

                <CustomEnumCombobox
                  id="playlist-access"
                  EnumObject={Access}
                  label="Access"
                  data={Object.values(Access)}
                  handleValue={handleAccess}
                  value={globalUtility.getKeyByValue(Access, access)}
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

                <Stack gap={0} miw="75%">
                  <Text fz="sm">Creator</Text>

                  <TextInput
                    miw="100%"
                    readOnly
                    styles={getFormTextInputStyles(focusedInput === "creator")}
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
                  <PlaylistLikerUnlikeButton pid={playlist.id} />
                  <PlaylistLikesCountLayout pid={playlist.id} />
                </Group>

                <Group gap={4}>
                  <I I={IconMessage2} />
                  <PlaylistQuotesCountLayout pid={playlist.id} />
                </Group>
              </Group>
            </Stack>

            <Grid>
              <Grid.Col span={6}>
                <Button
                  fullWidth
                  type="submit"
                  bg="blue"
                  disabled={isPending}
                  loading={isPending}
                  loaderProps={{ type: "dots" }}>
                  Update
                </Button>
              </Grid.Col>

              <Grid.Col span={6}>
                <Button fullWidth bg="yellow" onClick={handleCancel}>
                  Cancel
                </Button>
              </Grid.Col>
            </Grid>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
};
