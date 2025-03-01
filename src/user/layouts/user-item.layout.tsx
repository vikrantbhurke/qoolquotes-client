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
  Title,
  Group,
} from "@mantine/core";
import { oneDefaultTx } from "@/global/styles/renamed.variables";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DeleteUserModal } from "./delete-user.modal";
import { CustomSkeleton, I } from "@/global/components/reusables";
import { IconMailFilled } from "@tabler/icons-react";
import { useGetStripeSubscription } from "@/subscription/stripe/hooks/read";
import { useGetPayPalSubscription } from "@/subscription/paypal/hooks/read";

export const UserItemLayout = ({ user, isPending }: any) => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure();
  const [picOpened, setPicOpened] = useState(false);
  const { paypalSubscription } = useGetPayPalSubscription();
  const { stripeSubscription } = useGetStripeSubscription();

  const isFree =
    stripeSubscription?.status !== "active" &&
    paypalSubscription?.status !== "ACTIVE" &&
    paypalSubscription?.status !== "SUSPENDED";

  return (
    <>
      <Stack align="center">
        <Group align="center" gap="xl">
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

          {isFree && (
            <Button fullWidth bg="red" onClick={open}>
              Delete Account
            </Button>
          )}
        </Stack>
      )}

      <DeleteUserModal opened={opened} close={close} />
    </>
  );
};
