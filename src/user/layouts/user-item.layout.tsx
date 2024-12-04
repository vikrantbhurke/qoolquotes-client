import {
  footerHeight,
  getFormTextInput,
  getMainContentHeight,
  headerHeight,
  modal,
} from "@/global/styles/global.styles";
import {
  Button,
  Stack,
  TextInput,
  Grid,
  Avatar,
  Modal,
  Center,
  Image,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { oneTx } from "@/global/styles/app.css";
import { useNavigate } from "react-router-dom";
import { DeleteUserModalLayout } from "./delete-user-modal.layout";
import { useState } from "react";
import { useIsMobile } from "@/global/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { useDispatch } from "react-redux";
import { setFocusedInput } from "@/global/states/view.slice";

export const UserItemLayout = ({ user }: any) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [opened, { open, close }] = useDisclosure();
  const [picOpened, setPicOpened] = useState(false);
  const { focusedInput } = useSelector((state: RootState) => state.view);

  const handleFocus = (id: string) => dispatch(setFocusedInput(id));
  const handleBlur = () => dispatch(setFocusedInput(""));

  return (
    <Stack
      h={getMainContentHeight(headerHeight, footerHeight, 0, isMobile)}
      gap="xl"
      justify="center"
      align="center">
      <Stack maw={500} miw={400} gap="lg">
        <DeleteUserModalLayout opened={opened} close={close} />

        <Modal
          c={oneTx}
          styles={modal}
          opened={picOpened}
          onClose={() => setPicOpened(false)}
          title="Profile Picture"
          centered>
          <Center>
            <Image src={user.profilepic} alt="Large Profile" radius="md" />
          </Center>
        </Modal>

        <Stack align="center">
          {user.profilepic ? (
            <>
              <Avatar
                src={user.profilepic}
                size="xl"
                radius="50%"
                onClick={() => setPicOpened(true)}
              />
            </>
          ) : (
            <Avatar size="xl">
              {user.firstname[0]}
              {user.lastname[0]}
            </Avatar>
          )}
        </Stack>

        <Stack gap="sm">
          <Stack gap={0}>
            <Text>Firstname</Text>
            <TextInput
              readOnly
              styles={getFormTextInput(focusedInput === "firstname")}
              wrapperProps={{
                onFocus: () => handleFocus("firstname"),
                onBlur: handleBlur,
              }}
              value={user.firstname}
            />
          </Stack>

          <Stack gap={0}>
            <Text>Lastname</Text>
            <TextInput
              readOnly
              styles={getFormTextInput(focusedInput === "lastname")}
              wrapperProps={{
                onFocus: () => handleFocus("lastname"),
                onBlur: handleBlur,
              }}
              value={user.lastname}
            />
          </Stack>

          <Stack gap={0}>
            <Text>Username</Text>
            <TextInput
              readOnly
              styles={getFormTextInput(focusedInput === "username")}
              wrapperProps={{
                onFocus: () => handleFocus("username"),
                onBlur: handleBlur,
              }}
              value={user.username}
            />
          </Stack>

          <Stack gap={0}>
            <Text>Email</Text>
            <TextInput
              readOnly
              styles={getFormTextInput(focusedInput === "email")}
              wrapperProps={{
                onFocus: () => handleFocus("email"),
                onBlur: handleBlur,
              }}
              value={user.email}
            />
          </Stack>
        </Stack>

        <Grid>
          <Grid.Col span={6}>
            <Button
              fullWidth
              radius="sm"
              bg="blue"
              onClick={() => navigate(`/users/${user.id}/edit`)}>
              Edit Profile
            </Button>
          </Grid.Col>

          <Grid.Col span={6}>
            <Button fullWidth radius="sm" bg="red" onClick={open}>
              Delete Account
            </Button>
          </Grid.Col>
        </Grid>
      </Stack>
    </Stack>
  );
};
