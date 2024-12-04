import { I } from "@/global/components/components";
import { useAuthReroute, useIsMobile } from "@/global/hooks";
import { RootState } from "@/global/states/store";
import { setFocusedInput } from "@/global/states/view.slice";
import { oneBg, oneTx } from "@/global/styles/app.css";
import {
  footerHeight,
  getFormTextInput,
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
  PasswordInput,
  Space,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const SignInUserFormLayout = () => {
  useAuthReroute();
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, handleSignInUser, isPending } = useSignInUserForm();
  const { focusedInput } = useSelector((state: RootState) => state.view);

  const handleNavigateToSignUp = () => navigate("/sign-up");
  const handleFocus = (id: string) => dispatch(setFocusedInput(id));
  const handleBlur = () => dispatch(setFocusedInput(""));

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
                  required
                  minLength={3}
                  maxLength={20}
                  styles={getFormTextInput(focusedInput === "username")}
                  wrapperProps={{
                    onFocus: () => handleFocus("username"),
                    onBlur: handleBlur,
                  }}
                  placeholder="johndoe"
                  key={form.key("username")}
                  {...form.getInputProps("username")}
                />
              </Stack>

              <Stack gap={0}>
                <Text>Password</Text>

                <PasswordInput
                  required
                  minLength={6}
                  maxLength={20}
                  styles={getFormTextInput(focusedInput === "password")}
                  wrapperProps={{
                    onFocus: () => handleFocus("password"),
                    onBlur: handleBlur,
                  }}
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
              bg={oneTx}
              loading={isPending}
              loaderProps={{ type: "dots", color: oneBg }}>
              Sign In
            </Button>
          </Stack>
        </Stack>
      </form>
    </Container>
  );
};
