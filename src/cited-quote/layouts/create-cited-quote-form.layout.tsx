import { useCreateCitedQuoteForm } from "../hooks/create";
import {
  ActionIcon,
  Button,
  Group,
  Loader,
  Space,
  Stack,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { modalTextInput } from "@/global/styles/global.styles";
import { IconRefresh } from "@tabler/icons-react";
import { citedQuoteUtility } from "../cited-quote.utility";
import { I } from "@/global/components/components";
import { oneTx } from "@/global/styles/app.css";

export const CreateCitedQuoteFormLayout = () => {
  const { form, handleCreateCitedQuote, isPending } = useCreateCitedQuoteForm();

  return (
    <form onSubmit={form.onSubmit(handleCreateCitedQuote)}>
      <Stack gap="md">
        <Group gap={0} align="center" justify="space-between">
          <Space w="md" />

          <Text ta="center">Share with us a qool quote you found.</Text>

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
            <Text>Quote</Text>
            <Text
              fz="xs"
              c={citedQuoteUtility.getContentColor(form.values.content.length)}>
              {form.values.content.length} / 500
            </Text>
          </Group>

          <Textarea
            minRows={2}
            maxRows={2}
            minLength={5}
            maxLength={500}
            w="100%"
            placeholder="A Qool Quote..."
            styles={modalTextInput}
            key={form.key("content")}
            {...form.getInputProps("content")}
          />
        </Stack>

        <Stack gap={0} align="flex-start">
          <Group justify="space-between" w="100%">
            <Text>Author</Text>
            <Text
              fz="xs"
              c={citedQuoteUtility.getAuthorColor(form.values.author.length)}>
              {form.values.author.length} / 30
            </Text>
          </Group>

          <TextInput
            minLength={5}
            maxLength={30}
            w="100%"
            placeholder="A Great Author"
            styles={modalTextInput}
            key={form.key("author")}
            {...form.getInputProps("author")}
          />
        </Stack>

        <Stack gap={0} align="flex-start">
          <Group justify="space-between" w="100%">
            <Text>Citation</Text>
          </Group>

          <TextInput
            minLength={5}
            maxLength={200}
            w="100%"
            placeholder="Quote source link URL"
            styles={modalTextInput}
            key={form.key("citation")}
            {...form.getInputProps("citation")}
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

        <Button type="submit" fullWidth bg="green" radius="sm">
          {isPending ? <Loader type="dots" color={oneTx} /> : "Cite Quote"}
        </Button>
      </Stack>
    </form>
  );
};
