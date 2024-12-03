import { RootState } from "@/global/states/store";
import {
  ActionIcon,
  Burger,
  Group,
  Stack,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconLogin,
  IconLogout,
  IconMoon,
  IconSearch,
  IconSun,
} from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Search } from "./index";
import { useDispatch } from "react-redux";
import { setIsSearchbarVisible } from "@/global/states/view.slice";
import { useWindowScroll } from "@mantine/hooks";
import { oneTx } from "@/global/styles/app.css";
import { useIsMobile } from "@/global/hooks";
import { signOut } from "@/user/auth.slice";
import {
  headerHeight,
  responsiveBreakpoint,
} from "@/global/styles/global.styles";
import { I } from "../components";

export const Header = ({ opened, toggle }: any) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, scrollTo] = useWindowScroll();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { auth } = useSelector((state: RootState) => state.auth);

  const { isSearchbarVisible } = useSelector((state: RootState) => state.view);

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/sign-in");
  };

  const handleNavigateToFeed = () => {
    scrollTo({ y: 0 });
    navigate("/");
  };

  const handleNavigateToSignIn = () => navigate("/sign-in");

  const handleOpenSearchbar = () => dispatch(setIsSearchbarVisible(true));

  const handleTheme = () => toggleColorScheme();

  return (
    <>
      {isSearchbarVisible ? (
        <Search />
      ) : (
        <Group h={headerHeight} px="md" justify="space-between" align="center">
          <Group gap={4} onClick={handleNavigateToFeed} align="flex-start">
            <Stack>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-quote">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z" />
                <path d="M18 5a2 2 0 0 1 2 2v6c0 3.13 -1.65 5.193 -4.757 5.97a1 1 0 1 1 -.486 -1.94c2.227 -.557 3.243 -1.827 3.243 -4.03v-1h-3a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 2 -2z" />
              </svg>
            </Stack>

            <Title order={3}>{import.meta.env.VITE_APP_NAME}</Title>
          </Group>

          <Group gap={isMobile ? 6 : "xs"}>
            <ActionIcon size="sm" onClick={handleOpenSearchbar}>
              <I I={IconSearch} />
            </ActionIcon>

            <ActionIcon size="sm" onClick={handleTheme}>
              {colorScheme === "dark" ? (
                <I I={IconSun} color="orange" />
              ) : (
                <I I={IconMoon} color="dodgerblue" />
              )}
            </ActionIcon>

            {/* <ActionIcon onClick={normalOpen}>
            <I I={IconLetterA} />
            </ActionIcon> */}

            {auth.id ? (
              <ActionIcon size="sm" onClick={handleSignOut}>
                <I I={IconLogout} />
              </ActionIcon>
            ) : (
              <ActionIcon size="sm" onClick={handleNavigateToSignIn}>
                <I I={IconLogin} />
              </ActionIcon>
            )}

            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom={responsiveBreakpoint}
              size="sm"
              c={oneTx}
            />
          </Group>
        </Group>
      )}
    </>
  );
};
