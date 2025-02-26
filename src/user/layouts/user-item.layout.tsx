import { useDisclosure } from "@mantine/hooks";
import { modal } from "@/global/styles/global.styles";
import {
  Button,
  Stack,
  Avatar,
  Modal,
  Center,
  Image,
  Text,
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
import { DeleteUserModal } from "./delete-user.modal";
import { CustomSkeleton, I } from "@/global/components/reusables";
import { IconMailFilled } from "@tabler/icons-react";
import { SubscriptionLayout } from "@/subscription/layouts";
import { useGetSubscription } from "@/subscription/paypal/hooks/read";
import { subscriptionUtility } from "@/subscription/subscription.utility";
import { Status } from "@/subscription/enums";

export const UserItemLayout = ({ user, isPending }: any) => {
  const navigate = useNavigate();
  const { subscription } = useGetSubscription();
  const [opened, { open, close }] = useDisclosure();
  const [picOpened, setPicOpened] = useState(false);
  const { isMobile } = useSelector((state: RootState) => state.view);

  const query = new URLSearchParams(window.location.search);
  const subscribedTrue = query.get("subscribed") === "true";
  const status = subscribedTrue ? "ACTIVE" : subscription?.status;
  const isInactive = subscriptionUtility.getStatus(status) === Status.Inactive;

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
          justify={isMobile ? "start" : "center"}>
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

                <Stack gap={0} align="start">
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
                  <Group gap={4}>
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

            {isPending ? (
              <CustomSkeleton h={60} w="100%" />
            ) : (
              <Stack gap="xs">
                <Button
                  fullWidth
                  bg="blue"
                  onClick={() => navigate(`/users/${user.id}/edit`)}>
                  Edit Profile
                </Button>
                {isInactive && (
                  <Button fullWidth bg="red" onClick={open}>
                    Delete Account
                  </Button>
                )}
              </Stack>
            )}

            <SubscriptionLayout />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
