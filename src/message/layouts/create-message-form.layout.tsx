import { useCreateMessageForm } from "../hooks/create";
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
import { modalTextInput } from "@/global/styles/global.styles";
import { CustomEnumCombobox, I } from "@/global/components/components";
import { globalUtility } from "@/global/utilities";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { Reason } from "../enums";
import { setReason } from "../message.slice";
import { IconRefresh } from "@tabler/icons-react";
import { messageUtility } from "../message.utility";

export const CreateMessageFormLayout = () => {
  const dispatch = useDispatch();
  const { form, handleCreateMessage, isPending } = useCreateMessageForm();
  const { reason } = useSelector((state: RootState) => state.message);

  const handleReason = (order: any) => {
    dispatch(setReason(order));
  };

  return (
    <form onSubmit={form.onSubmit(handleCreateMessage)}>
      <Stack gap="md">
        <Group gap={0} align="center" justify="space-between">
          <Space w="md" />

          <Text ta="center">Tell us what's on your mind.</Text>

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
          <Text ta="center">Reason</Text>

          <CustomEnumCombobox
            EnumObject={Reason}
            label="Reason"
            data={Object.values(Reason)}
            handleValue={handleReason}
            value={globalUtility.getKeyByValue(Reason, reason)}
          />
        </Stack>

        <Stack gap={0} align="flex-start">
          <Group justify="space-between" w="100%">
            <Text>Title</Text>
            <Text
              fz="xs"
              c={messageUtility.getTitleColor(form.values.title.length)}>
              {form.values.title.length} / 30
            </Text>
          </Group>

          <TextInput
            minLength={5}
            maxLength={30}
            w="100%"
            placeholder="Title of your message..."
            styles={modalTextInput}
            key={form.key("title")}
            {...form.getInputProps("title")}
          />
        </Stack>

        <Stack gap={0} align="flex-start">
          <Group justify="space-between" w="100%">
            <Text>Description</Text>
            <Text
              fz="xs"
              c={messageUtility.getDescriptionColor(
                form.values.description.length
              )}>
              {form.values.description.length} / 200
            </Text>
          </Group>

          <Textarea
            minRows={2}
            maxRows={2}
            minLength={5}
            maxLength={200}
            w="100%"
            placeholder="Description of your message..."
            styles={modalTextInput}
            key={form.key("description")}
            {...form.getInputProps("description")}
          />
        </Stack>

        <Stack gap={0} align="flex-start">
          <Group justify="space-between" w="100%">
            <Text>Email</Text>
          </Group>

          <TextInput
            minLength={5}
            maxLength={20}
            w="100%"
            placeholder="johndoe@gmail.com"
            styles={modalTextInput}
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
        </Stack>

        <Button
          type="submit"
          fullWidth
          bg="green"
          radius="sm"
          loading={isPending}
          loaderProps={{ type: "dots" }}>
          Send Message
        </Button>
      </Stack>
    </form>
  );
};
