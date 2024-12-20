import {
  getFormTextInput,
  mainContentWidth,
  modal,
} from "@/global/styles/global.styles";
import {
  ActionIcon,
  Container,
  Group,
  Space,
  Stack,
  TextInput,
  PasswordInput,
  FileInput,
  Button,
  Grid,
  Avatar,
  Modal,
  Center,
  Image,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useUpdateUserByIdForm } from "../hooks/update";
import { IconRefresh, IconTrash } from "@tabler/icons-react";
import { oneTx, inputStyles } from "@/global/styles/app.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { useState } from "react";
import { DeleteProfilePicModalLayout } from "./delete-profile-pic-modal.layout";
import { I } from "@/global/components/components";
import { useDispatch } from "react-redux";
import { setFocusedInput } from "@/global/states/view.slice";

export const UpdateUserByIdFormLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootState) => state.auth);
  const [picViewOpened, setOpened] = useState(false);
  const [picDeleteOpened, { open, close }] = useDisclosure();
  const { focusedInput } = useSelector((state: RootState) => state.view);

  const { user, form, handleUpdateUserById, isPending } =
    useUpdateUserByIdForm();

  const handleFocus = (id: string) => dispatch(setFocusedInput(id));
  const handleBlur = () => dispatch(setFocusedInput(""));
  const handleCancel = () => navigate(-1);

  return (
    <Container size={mainContentWidth} p={0} h="100%">
      <Stack px="md" h="100%" gap="xl" justify="center" align="center" py="xl">
        <form onSubmit={form.onSubmit(handleUpdateUserById)}>
          <Stack maw={500} miw={400} gap="lg">
            <Modal
              c={oneTx}
              styles={modal}
              opened={picViewOpened}
              onClose={() => setOpened(false)}
              title="Profile Picture"
              centered>
              <Center>
                <Image src={user.profilepic} alt="Large Profile" radius="md" />
              </Center>
            </Modal>

            <DeleteProfilePicModalLayout
              opened={picDeleteOpened}
              close={close}
            />

            <Group gap={0} align="center" justify="space-between">
              <Space w="xl" />

              <Group justify="center" align="center" gap="xs">
                <Stack align="center">
                  {user.profilepic ? (
                    <>
                      <Avatar
                        src={user.profilepic}
                        size="xl"
                        radius="50%"
                        onClick={() => setOpened(true)}
                      />
                    </>
                  ) : (
                    <Avatar size="xl">
                      {user.firstname[0]}
                      {user.lastname[0]}
                    </Avatar>
                  )}
                </Stack>

                {user.id === auth.id && user.profilepic && (
                  <ActionIcon c="crimson" onClick={open}>
                    <I I={IconTrash} />
                  </ActionIcon>
                )}
              </Group>

              {form.isDirty() ? (
                <ActionIcon aria-label="Refresh" onClick={form.reset}>
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
                <Text>Profile Picture</Text>
                <FileInput
                  styles={getFormTextInput(focusedInput === "profilepic")}
                  wrapperProps={{
                    onFocus: () => handleFocus("profilepic"),
                    onBlur: handleBlur,
                  }}
                  clearable
                  key={form.key("profilepic")}
                  {...form.getInputProps("profilepic")}
                />
              </Stack>

              <Stack gap={0}>
                <Text>Firstname</Text>
                <TextInput
                  required
                  minLength={2}
                  maxLength={20}
                  classNames={{ input: inputStyles }}
                  styles={getFormTextInput(focusedInput === "firstname")}
                  wrapperProps={{
                    onFocus: () => handleFocus("firstname"),
                    onBlur: handleBlur,
                  }}
                  key={form.key("firstname")}
                  {...form.getInputProps("firstname")}
                />
              </Stack>

              <Stack gap={0}>
                <Text>Lastname</Text>
                <TextInput
                  required
                  minLength={2}
                  maxLength={20}
                  classNames={{ input: inputStyles }}
                  styles={getFormTextInput(focusedInput === "lastname")}
                  wrapperProps={{
                    onFocus: () => handleFocus("lastname"),
                    onBlur: handleBlur,
                  }}
                  key={form.key("lastname")}
                  {...form.getInputProps("lastname")}
                />
              </Stack>

              <Stack gap={0}>
                <Text>Email</Text>
                <TextInput
                  minLength={5}
                  maxLength={20}
                  classNames={{ input: inputStyles }}
                  styles={getFormTextInput(focusedInput === "email")}
                  wrapperProps={{
                    onFocus: () => handleFocus("email"),
                    onBlur: handleBlur,
                  }}
                  placeholder={user.email}
                  key={form.key("email")}
                  {...form.getInputProps("email")}
                />
              </Stack>

              <Stack gap={0}>
                <Text>New Password</Text>
                <PasswordInput
                  minLength={6}
                  maxLength={20}
                  classNames={{ input: inputStyles }}
                  styles={getFormTextInput(focusedInput === "password")}
                  wrapperProps={{
                    onFocus: () => handleFocus("password"),
                    onBlur: handleBlur,
                  }}
                  placeholder=""
                  key={form.key("password")}
                  {...form.getInputProps("password")}
                />
              </Stack>

              <Stack gap={0}>
                <Text>Confirm Password</Text>
                <PasswordInput
                  minLength={6}
                  maxLength={20}
                  classNames={{ input: inputStyles }}
                  styles={getFormTextInput(focusedInput === "confirmPassword")}
                  wrapperProps={{
                    onFocus: () => handleFocus("confirmPassword"),
                    onBlur: handleBlur,
                  }}
                  placeholder=""
                  key={form.key("confirmPassword")}
                  {...form.getInputProps("confirmPassword")}
                />
              </Stack>
            </Stack>

            <Grid>
              <Grid.Col span={6}>
                <Button
                  disabled={isPending}
                  type="submit"
                  fullWidth
                  radius="sm"
                  bg="blue"
                  loading={isPending}
                  loaderProps={{ type: "dots" }}>
                  Update Profile
                </Button>
              </Grid.Col>

              <Grid.Col span={6}>
                <Button
                  fullWidth
                  radius="sm"
                  bg="yellow"
                  onClick={handleCancel}>
                  Cancel
                </Button>
              </Grid.Col>
            </Grid>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
};
