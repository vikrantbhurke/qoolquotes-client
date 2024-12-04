import { useCreatePlaylistForm } from "../hooks/create";
import { CustomEnumCombobox, I } from "@/global/components/components";
import { Access } from "../enums";
import { globalUtility } from "@/global/utilities";
import { setAccess } from "../playlist.slice";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import {
  ActionIcon,
  Button,
  Group,
  Space,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useDispatch } from "react-redux";
import { getFormTextInput } from "@/global/styles/global.styles";
import { playlistUtility } from "../playlist.utility";
import { IconRefresh } from "@tabler/icons-react";
import { setFocusedInput } from "@/global/states/view.slice";

export const CreatePlaylistFormLayout = () => {
  const dispatch = useDispatch();
  const { form, handleCreatePlaylist, isPending } = useCreatePlaylistForm();
  const { access } = useSelector((state: RootState) => state.playlist);
  const { focusedInput } = useSelector((state: RootState) => state.view);

  const handleFocus = (id: string) => dispatch(setFocusedInput(id));
  const handleBlur = () => dispatch(setFocusedInput(""));

  const handleAccess = (access: any) => {
    dispatch(setAccess(access));
  };

  return (
    <form onSubmit={form.onSubmit(handleCreatePlaylist)}>
      <Stack gap="xs">
        <Group gap={0} align="center" justify="space-between">
          <Space w="md" />

          <Text ta="center">Create new playlist</Text>

          {form.isDirty() ? (
            <ActionIcon size="xs" aria-label="Refresh" onClick={form.reset}>
              <I I={IconRefresh} />
            </ActionIcon>
          ) : (
            <ActionIcon
              disabled
              c="transparent"
              size="xs"
              aria-label="Refresh Disabled"
            />
          )}
        </Group>

        <Stack gap={0} align="flex-start">
          <Group justify="space-between" w="100%">
            <Text>Name</Text>
            <Text
              fz="xs"
              c={playlistUtility.getNameColor(form.values.name.length)}>
              {form.values.name.length} / 30
            </Text>
          </Group>

          <TextInput
            minLength={3}
            maxLength={30}
            w="100%"
            placeholder="Name"
            styles={getFormTextInput(focusedInput === "name")}
            wrapperProps={{
              onFocus: () => handleFocus("name"),
              onBlur: handleBlur,
            }}
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
        </Stack>

        <Stack gap={0} align="flex-start">
          <Group justify="space-between" w="100%">
            <Text>Description</Text>
            <Text
              fz="xs"
              c={playlistUtility.getDescriptionColor(
                form.values.description.length
              )}>
              {form.values.description.length} / 100
            </Text>
          </Group>

          <Textarea
            minRows={2}
            maxRows={2}
            minLength={0}
            maxLength={100}
            w="100%"
            placeholder="Description"
            styles={getFormTextInput(focusedInput === "description")}
            wrapperProps={{
              onFocus: () => handleFocus("description"),
              onBlur: handleBlur,
            }}
            key={form.key("description")}
            {...form.getInputProps("description")}
          />
        </Stack>

        <Stack gap={0} align="flex-start">
          <Text>Access</Text>

          <CustomEnumCombobox
            EnumObject={Access}
            label="Access"
            data={Object.values(Access)}
            handleValue={handleAccess}
            value={globalUtility.getKeyByValue(Access, access)}
          />
        </Stack>

        <Button
          type="submit"
          fullWidth
          bg="green"
          radius="sm"
          loading={isPending}
          loaderProps={{ type: "dots" }}>
          Create Playlist
        </Button>
      </Stack>
    </form>
  );
};
