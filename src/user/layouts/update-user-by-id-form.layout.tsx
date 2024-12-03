import {
  footerHeight,
  formTextInput,
  getMainContentHeight,
  headerHeight,
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
import { oneTx } from "@/global/styles/app.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { useState } from "react";
import { DeleteProfilePicModalLayout } from "./delete-profile-pic-modal.layout";
import { useIsMobile } from "@/global/hooks";
import { I } from "@/global/components/components";

export const UpdateUserByIdFormLayout = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { auth } = useSelector((state: RootState) => state.auth);
  const [picViewOpened, setOpened] = useState(false);
  const [picDeleteOpened, { open, close }] = useDisclosure();

  const { user, form, handleUpdateUserById, isPending } =
    useUpdateUserByIdForm();

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <Container size={mainContentWidth} p={0}>
      <form onSubmit={form.onSubmit(handleUpdateUserById)}>
        <Stack
          px="md"
          h={getMainContentHeight(headerHeight, footerHeight, 0, isMobile)}
          gap="xl"
          justify="center"
          align="center"
          py="xl">
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
                  styles={formTextInput}
                  clearable
                  key={form.key("profilepic")}
                  {...form.getInputProps("profilepic")}
                />
              </Stack>

              <Stack gap={0}>
                <Text>Firstname</Text>
                <TextInput
                  minLength={2}
                  maxLength={20}
                  styles={formTextInput}
                  required
                  key={form.key("firstname")}
                  {...form.getInputProps("firstname")}
                />
              </Stack>

              <Stack gap={0}>
                <Text>Lastname</Text>
                <TextInput
                  minLength={2}
                  maxLength={20}
                  styles={formTextInput}
                  required
                  key={form.key("lastname")}
                  {...form.getInputProps("lastname")}
                />
              </Stack>

              <Stack gap={0}>
                <Text>Email</Text>
                <TextInput
                  minLength={5}
                  maxLength={20}
                  styles={formTextInput}
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
                  styles={formTextInput}
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
                  styles={formTextInput}
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
        </Stack>
      </form>
    </Container>
  );
};
