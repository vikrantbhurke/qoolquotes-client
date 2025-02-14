import { useDisclosure } from "@mantine/hooks";
import { modal } from "@/global/styles/global.styles";
import {
  Button,
  Stack,
  Grid,
  Avatar,
  Modal,
  Center,
  Image,
  Text,
  Space,
  Box,
  Title,
  Group,
} from "@mantine/core";
import { roundBorderStyle } from "@/global/styles/app.css";
import {
  oneDefaultBg,
  oneDefaultTx,
  twoDefaultBg,
} from "@/global/styles/renamed.variables";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import DesktopLeaderboard from "@/global/ads/DesktopLeaderboard";
import Banner320x50 from "@/global/ads/Banner320x50";
import { DeleteUserModal } from "./delete-user-modal.layout";
import { CustomSkeleton, I } from "@/global/components/reusables";
import { IconMailFilled } from "@tabler/icons-react";

export const UserItemLayout = ({ user, isPending }: any) => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure();
  const [picOpened, setPicOpened] = useState(false);
  const { isMobile } = useSelector((state: RootState) => state.view);

  return (
    <>
      <Modal
        c={oneDefaultTx}
        styles={modal}
        opened={picOpened}
        onClose={() => setPicOpened(false)}
        title="Profile Picture"
        centered>
        <Center>
          {isPending ? (
            <CustomSkeleton />
          ) : (
            <Image src={user.profilepic} alt="Large Profile" radius="md" />
          )}
        </Center>
      </Modal>

      <DeleteUserModal opened={opened} close={close} />

      <Box component="div" bg={isMobile ? oneDefaultBg : twoDefaultBg} h="100%">
        <Stack
          h="100%"
          gap="xl"
          align="center"
          justify={isMobile ? "start" : "space-between"}>
          <Center p="md">
            <Stack h={isMobile ? 50 : 90}>
              {isMobile ? <Banner320x50 /> : <DesktopLeaderboard />}
            </Stack>
          </Center>

          <Stack
            w={isMobile ? "100%" : 400}
            gap="xl"
            bg={oneDefaultBg}
            p={isMobile ? "md" : "xl"}
            className={`${roundBorderStyle}`}>
            <Stack align="center">
              <Group align="center" gap="xl">
                {isPending ? (
                  <CustomSkeleton v="circular" h={84} w={84} />
                ) : (
                  <>
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
                  </>
                )}

                <Stack gap={0} align="center">
                  {isPending ? (
                    <CustomSkeleton w={130} />
                  ) : (
                    <Title order={5}>
                      {user.firstname} {user.lastname}
                    </Title>
                  )}

                  {isPending ? (
                    <CustomSkeleton h={20} />
                  ) : (
                    <Text fz="sm" c="dimmed">
                      @{user.username}
                    </Text>
                  )}

                  <Group gap="xs">
                    {isPending ? (
                      <CustomSkeleton h={20} w={130} />
                    ) : (
                      <>
                        <I I={IconMailFilled} />
                        <Text fz="sm">{user.email}</Text>
                      </>
                    )}
                  </Group>
                </Stack>
              </Group>
            </Stack>

            <Grid>
              <Grid.Col span={6}>
                {isPending ? (
                  <Button fullWidth bg="blue">
                    Edit Profile
                  </Button>
                ) : (
                  <Button
                    fullWidth
                    bg="blue"
                    onClick={() => navigate(`/users/${user.id}/edit`)}>
                    Edit Profile
                  </Button>
                )}
              </Grid.Col>

              <Grid.Col span={6}>
                {isPending ? (
                  <Button fullWidth bg="red">
                    Delete Account
                  </Button>
                ) : (
                  <Button fullWidth bg="red" onClick={open}>
                    Delete Account
                  </Button>
                )}
              </Grid.Col>
            </Grid>
          </Stack>

          <Space h={isMobile ? 50 : 90} />
        </Stack>
      </Box>
    </>
  );
};
