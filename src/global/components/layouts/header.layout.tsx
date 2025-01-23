import { RootState } from "@/global/states/store";
import {
  ActionIcon,
  Burger,
  Group,
  Image,
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
import { SearchLayout } from "./index";
import { useDispatch } from "react-redux";
import { setIsSearchbarVisible } from "@/global/states/view.slice";
import { useWindowScroll } from "@mantine/hooks";
import { oneTx } from "@/global/styles/app.css";
import { signOut } from "@/user/auth.slice";
import {
  headerHeight,
  responsiveBreakpoint,
} from "@/global/styles/global.styles";
import { I } from "../components";
import logo from "@/global/assets/pwa-64x64.png";
import logoDark from "@/global/assets/pwa-64x64-dark.png";

export const HeaderLayout = ({ opened, toggle }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, scrollTo] = useWindowScroll();
  const { isMobile } = useSelector((state: any) => state.view);
  const { auth } = useSelector((state: RootState) => state.auth);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const { isSearchbarVisible } = useSelector((state: RootState) => state.view);

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/sign-in");
    opened && toggle();
  };

  const handleNavigateToFeed = () => {
    scrollTo({ y: 0 });
    navigate("/");
    opened && toggle();
  };

  const handleNavigateToSignIn = () => {
    navigate("/sign-in");
    opened && toggle();
  };

  const handleOpenSearchbar = () => dispatch(setIsSearchbarVisible(true));

  const handleTheme = () => toggleColorScheme();

  return (
    <>
      {isSearchbarVisible ? (
        <SearchLayout />
      ) : (
        <Group h={headerHeight} px="md" justify="space-between" align="center">
          <Group gap={4} onClick={handleNavigateToFeed} align="center">
            <Image
              src={colorScheme === "dark" ? logoDark : logo}
              alt="logo"
              w={32}
            />
            <Title order={4}>{import.meta.env.VITE_APP_NAME}</Title>
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
