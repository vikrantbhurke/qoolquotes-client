import { I } from "@/global/components/components";
import { useAuthReroute, useIsMobile } from "@/global/hooks";
import { oneBg, oneTx } from "@/global/styles/app.css";
import {
  footerHeight,
  formTextInput,
  getMainContentHeight,
  headerHeight,
  mainContentWidth,
} from "@/global/styles/global.styles";
import { useSignInUserForm } from "@/user/hooks/create";
import {
  ActionIcon,
  Anchor,
  Button,
  Container,
  Group,
  Loader,
  PasswordInput,
  Space,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const SignInUserFormLayout = () => {
  useAuthReroute();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { form, handleSignInUser, isPending } = useSignInUserForm();

  const handleNavigateToSignUp = () => navigate("/sign-up");

  return (
    <Container size={mainContentWidth} p={0}>
      <form onSubmit={form.onSubmit(handleSignInUser)}>
        <Stack
          px="md"
          justify="center"
          align="center"
          bg={oneBg}
          h={getMainContentHeight(headerHeight, footerHeight, 0, isMobile)}>
          <Stack maw={500} miw={400} gap="lg">
            <Stack gap={0}>
              <Group gap={0} align="center" justify="space-between">
                <Space w="md" />

                <Title order={3}>Welcome back!</Title>

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

              <Text c="dimmed" ta="center" mt={5}>
                Do not have an account yet?{" "}
                <Anchor
                  c={oneTx}
                  underline="never"
                  onClick={handleNavigateToSignUp}>
                  Create account
                </Anchor>
              </Text>
            </Stack>

            <Stack gap="sm">
              <Stack gap={0}>
                <Text>Username</Text>

                <TextInput
                  minLength={3}
                  maxLength={20}
                  styles={formTextInput}
                  required
                  placeholder="johndoe"
                  key={form.key("username")}
                  {...form.getInputProps("username")}
                />
              </Stack>

              <Stack gap={0}>
                <Text>Password</Text>

                <PasswordInput
                  minLength={6}
                  maxLength={20}
                  styles={formTextInput}
                  required
                  placeholder="Password123!"
                  key={form.key("password")}
                  {...form.getInputProps("password")}
                />
              </Stack>
            </Stack>

            <Button
              disabled={isPending}
              type="submit"
              fullWidth
              radius="sm"
              c={oneBg}
              bg={oneTx}>
              {isPending ? <Loader color={oneBg} type="dots" /> : "Sign In"}
            </Button>
          </Stack>
        </Stack>
      </form>
    </Container>
  );
};
