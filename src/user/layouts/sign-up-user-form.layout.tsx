import { CustomEnumCombobox, I } from "@/global/components/reusables";
import { roundBorderStyle } from "@/global/styles/app.css";
import {
  oneDefaultBg,
  oneDefaultTx,
  twoDefaultBg,
} from "@/global/styles/renamed.variables";
import { getFormTextInputStyles } from "@/global/styles/global.styles";
import { useSignUpUserForm } from "@/user/hooks/create";
import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  Group,
  PasswordInput,
  ScrollArea,
  Space,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Gender } from "../enums";
import { globalUtility } from "@/global/utilities";
import { RootState } from "@/global/states/store";
import { setGender } from "../user.slice";
import { useDispatch } from "react-redux";
import { useAuthReroute } from "@/global/hooks";
import { setFocusedInput } from "@/global/states/view.slice";

export const SignUpUserFormLayout = () => {
  useAuthReroute();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { form, handleSignUpUser, isPending } = useSignUpUserForm();
  const { gender } = useSelector((state: RootState) => state.user);

  const { focusedInput, isMobile } = useSelector(
    (state: RootState) => state.view
  );

  const handleNavigateToSignIn = () => navigate("/sign-in");
  const handleFocus = (id: string) => dispatch(setFocusedInput(id));
  const handleBlur = () => dispatch(setFocusedInput(""));

  const handleGender = (gender: Gender) => {
    dispatch(setGender(gender));
  };

  return (
    <Box component="div" bg={isMobile ? oneDefaultBg : twoDefaultBg} h="100%">
      <Stack px="md" justify="center" align="center" h="100%">
        <form onSubmit={form.onSubmit(handleSignUpUser)}>
          <ScrollArea
            scrollbarSize={2}
            styles={{
              scrollbar: {
                display: "none", // Hide Mantine's custom scrollbar
              },
              viewport: {
                overflowY: "auto", // Ensure the browser scrollbar is used
              },
            }}>
            <Stack
              w={400}
              gap="lg"
              p={isMobile ? "md" : "xl"}
              bg={oneDefaultBg}
              className={`${roundBorderStyle}`}>
              <Stack gap={0}>
                <Group gap={0} align="center" justify="space-between">
                  <Space w="md" />

                  <Title order={3}>Welcome!</Title>

                  {form.isDirty() ? (
                    <ActionIcon
                      bg="transparent"
                      c={oneDefaultTx}
                      aria-label="Refresh"
                      onClick={form.reset}>
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
                <Text fz="sm" c="dimmed" ta="center" mt={5}>
                  Already have an account?{" "}
                  <Anchor
                    c={oneDefaultTx}
                    underline="never"
                    onClick={handleNavigateToSignIn}>
                    Sign in
                  </Anchor>
                </Text>
              </Stack>

              <Stack gap="sm">
                <Stack gap={0}>
                  <Text fz="sm">Firstname</Text>

                  <TextInput
                    required
                    minLength={2}
                    maxLength={20}
                    styles={getFormTextInputStyles(
                      focusedInput === "firstname"
                    )}
                    wrapperProps={{
                      onFocus: () => handleFocus("firstname"),
                      onBlur: handleBlur,
                    }}
                    placeholder="John"
                    key={form.key("firstname")}
                    {...form.getInputProps("firstname")}
                  />
                </Stack>

                <Stack gap={0}>
                  <Text fz="sm">Lastname</Text>

                  <TextInput
                    required
                    minLength={2}
                    maxLength={20}
                    styles={getFormTextInputStyles(focusedInput === "lastname")}
                    wrapperProps={{
                      onFocus: () => handleFocus("lastname"),
                      onBlur: handleBlur,
                    }}
                    placeholder="Doe"
                    key={form.key("lastname")}
                    {...form.getInputProps("lastname")}
                  />
                </Stack>

                <Stack gap={0}>
                  <Text fz="sm">Username</Text>

                  <TextInput
                    required
                    minLength={3}
                    maxLength={20}
                    styles={getFormTextInputStyles(focusedInput === "username")}
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
                  <Text fz="sm">Email</Text>

                  <TextInput
                    required
                    minLength={5}
                    maxLength={30}
                    styles={getFormTextInputStyles(focusedInput === "email")}
                    wrapperProps={{
                      onFocus: () => handleFocus("email"),
                      onBlur: handleBlur,
                    }}
                    placeholder="johndoe@gmail.com"
                    key={form.key("email")}
                    {...form.getInputProps("email")}
                  />
                </Stack>

                <Stack gap={0}>
                  <Text fz="sm">Password</Text>

                  <PasswordInput
                    required
                    minLength={8}
                    maxLength={20}
                    styles={getFormTextInputStyles(focusedInput === "password")}
                    wrapperProps={{
                      onFocus: () => handleFocus("password"),
                      onBlur: handleBlur,
                    }}
                    placeholder="Password123!"
                    key={form.key("password")}
                    {...form.getInputProps("password")}
                  />
                </Stack>

                <Stack gap={0}>
                  <Text fz="sm">Confirm Password</Text>

                  <PasswordInput
                    required
                    minLength={8}
                    maxLength={20}
                    styles={getFormTextInputStyles(
                      focusedInput === "confirmPassword"
                    )}
                    wrapperProps={{
                      onFocus: () => handleFocus("confirmPassword"),
                      onBlur: handleBlur,
                    }}
                    placeholder="Password123!"
                    key={form.key("confirmPassword")}
                    {...form.getInputProps("confirmPassword")}
                  />
                </Stack>

                <Stack gap={0}>
                  <Text fz="sm">Gender</Text>

                  <CustomEnumCombobox
                    id="gender"
                    EnumObject={Gender}
                    label="Gender"
                    data={Object.values(Gender)}
                    handleValue={handleGender}
                    value={globalUtility.getKeyByValue(Gender, gender)}
                  />
                </Stack>
              </Stack>

              <Button
                type="submit"
                fullWidth
                c={oneDefaultBg}
                bg={oneDefaultTx}
                disabled={isPending}
                loading={isPending}
                loaderProps={{ type: "dots", color: oneDefaultBg }}>
                Sign Up
              </Button>
            </Stack>
          </ScrollArea>
        </form>
      </Stack>
    </Box>
  );
};
