import { oneBg, oneTx } from "@/global/styles/app.css";
import {
  getFormTextInput,
  getMainContentHeight,
} from "@/global/styles/global.styles";
import {
  Anchor,
  Button,
  Container,
  Flex,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useSelector } from "react-redux";

export const UserPage = () => {
  const { width } = useViewportSize();

  const { mainContentWidth, headerHeight, footerHeight } = useSelector(
    (state: any) => state.view
  );

  return (
    <Container p={0} size={mainContentWidth}>
      <Flex
        justify="center"
        align="center"
        mih={getMainContentHeight(headerHeight, footerHeight, 0, width)}>
        <Stack miw={350} gap="xl" justify="center" py="xl">
          <Stack gap={0} align="center">
            <Title>Welcome!</Title>

            <Text c="dimmed" size="sm" ta="center" mt={5}>
              Already have an account?{" "}
              <Anchor underline="never">Sign in</Anchor>
            </Text>
          </Stack>

          <Stack gap="lg">
            <TextInput
              styles={getFormTextInput}
              required
              label="Firstname"
              placeholder="John"
            />
            <TextInput
              styles={getFormTextInput}
              required
              label="Lastname"
              placeholder="Doe"
            />
            <TextInput
              styles={getFormTextInput}
              required
              label="Username"
              placeholder="johndoe"
            />

            <PasswordInput
              styles={getFormTextInput}
              required
              label="Password"
              placeholder="Password123!"
            />
            <PasswordInput
              styles={getFormTextInput}
              required
              label="Confirm Password"
              placeholder="Password123!"
            />
          </Stack>

          <Button type="submit" fullWidth radius="xl" c={oneBg} bg={oneTx}>
            Sign Up
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};
