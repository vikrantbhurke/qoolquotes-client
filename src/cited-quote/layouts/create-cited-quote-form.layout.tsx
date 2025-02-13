import { useCreateCitedQuoteForm } from "../hooks/create";
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
import { getFormTextInputStyles } from "@/global/styles/global.styles";
import { IconRefresh } from "@tabler/icons-react";
import { citedQuoteUtility } from "../cited-quote.utility";
import { I } from "@/global/components/reusables";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { setFocusedInput } from "@/global/states/view.slice";

export const CreateCitedQuoteFormLayout = () => {
  const dispatch = useDispatch();
  const { form, handleCreateCitedQuote, isPending } = useCreateCitedQuoteForm();
  const { focusedInput } = useSelector((state: RootState) => state.view);

  const handleFocus = (id: string) => dispatch(setFocusedInput(id));
  const handleBlur = () => dispatch(setFocusedInput(""));

  return (
    <form onSubmit={form.onSubmit(handleCreateCitedQuote)}>
      <Stack gap="md">
        <Group gap={0} align="center" justify="space-between">
          <Space w="md" />

          <Text fz="sm" ta="center">
            Share with us a qool quote you found.
          </Text>

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
            <Text fz="sm">Quote</Text>
            <Text
              fz="xs"
              c={citedQuoteUtility.getContentColor(form.values.content.length)}>
              {form.values.content.length} / 390
            </Text>
          </Group>

          <Textarea
            minRows={2}
            maxRows={2}
            minLength={5}
            maxLength={390}
            w="100%"
            placeholder="A Qool Quote..."
            styles={getFormTextInputStyles(focusedInput === "content")}
            wrapperProps={{
              onFocus: () => handleFocus("content"),
              onBlur: handleBlur,
            }}
            key={form.key("content")}
            {...form.getInputProps("content")}
          />
        </Stack>

        <Stack gap={0} align="flex-start">
          <Group justify="space-between" w="100%">
            <Text fz="sm">Author</Text>
            <Text
              fz="xs"
              c={citedQuoteUtility.getAuthorColor(form.values.author.length)}>
              {form.values.author.length} / 50
            </Text>
          </Group>

          <TextInput
            minLength={5}
            maxLength={50}
            w="100%"
            placeholder="A Great Author"
            styles={getFormTextInputStyles(focusedInput === "author")}
            wrapperProps={{
              onFocus: () => handleFocus("author"),
              onBlur: handleBlur,
            }}
            key={form.key("author")}
            {...form.getInputProps("author")}
          />
        </Stack>

        <Stack gap={0} align="flex-start">
          <Group justify="space-between" w="100%">
            <Text fz="sm">Citation</Text>
          </Group>

          <TextInput
            minLength={5}
            maxLength={200}
            w="100%"
            placeholder="Quote source link URL"
            styles={getFormTextInputStyles(focusedInput === "citation")}
            wrapperProps={{
              onFocus: () => handleFocus("citation"),
              onBlur: handleBlur,
            }}
            key={form.key("citation")}
            {...form.getInputProps("citation")}
          />
        </Stack>

        <Stack gap={0} align="flex-start">
          <Group justify="space-between" w="100%">
            <Text fz="sm">Email</Text>
          </Group>

          <TextInput
            minLength={5}
            maxLength={20}
            w="100%"
            placeholder="johndoe@gmail.com"
            styles={getFormTextInputStyles(focusedInput === "email")}
            wrapperProps={{
              onFocus: () => handleFocus("email"),
              onBlur: handleBlur,
            }}
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
        </Stack>

        <Button
          type="submit"
          fullWidth
          bg="green"
          loading={isPending}
          loaderProps={{ type: "dots" }}>
          Cite Quote
        </Button>
      </Stack>
    </form>
  );
};
