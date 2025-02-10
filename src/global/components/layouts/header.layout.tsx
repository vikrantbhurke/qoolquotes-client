import { RootState } from "@/global/states/store";
import {
  ActionIcon,
  Burger,
  Container,
  Group,
  Image,
  Text,
  useMantineColorScheme,
  Avatar,
} from "@mantine/core";
import {
  IconBrush,
  IconDownload,
  IconLetterA,
  IconLogin,
  IconLogout,
  IconMoon,
  IconSearch,
  IconSun,
} from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MenuLayout, SearchLayout } from "./index";
import { useDispatch } from "react-redux";
import { setIsSearchbarVisible } from "@/global/states/view.slice";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { themeTxPseudoStyle } from "@/global/styles/theme-tx-pseudo.css";
import { oneTx, themeGreenColor } from "@/global/styles/renamed.variables";
import { signOut } from "@/user/auth.slice";
import {
  layoutCompHeight,
  mainContentWidth,
  responsiveBreakpoint,
  textBold,
  textBolder,
} from "@/global/styles/global.styles";
import { I } from "../reusables";
import { useInstallApp, useIsQuotePage } from "@/global/hooks";
import logo from "@/global/assets/pwa-64x64.png";
import { setPage as setTopicPage } from "@/topic/topic.slice";
import { setPage as setAuthorPage } from "@/author/author.slice";
import { setPage as setPlaylistPage, setTab } from "@/playlist/playlist.slice";
import { FontModal } from "../views";
import { ColorModal } from "../views";
import { globalUtility } from "@/global/utilities";

export const HeaderLayout = ({ opened, toggle }: any) => {
  const isQuotePage = useIsQuotePage();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, scrollTo] = useWindowScroll();
  const { isMobile, color } = useSelector((state: RootState) => state.view);
  const { auth } = useSelector((state: RootState) => state.auth);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { installPrompt, isInstalled, handleInstallClick } = useInstallApp();
  const { isSearchbarVisible } = useSelector((state: RootState) => state.view);

  const [fontOpened, { open: fontOpen, close: fontClose }] =
    useDisclosure(false);

  const [colorOpened, { open: colorOpen, close: colorClose }] =
    useDisclosure(false);

  const {
    sort: authorSort,
    order: authorOrder,
    alpha: authorAlpha,
  } = useSelector((state: RootState) => state.author);

  const {
    sort: topicSort,
    order: topicOrder,
    alpha: topicAlpha,
  } = useSelector((state: RootState) => state.topic);

  const { sort: playlistSort, order: playlistOrder } = useSelector(
    (state: RootState) => state.playlist
  );

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/sign-in");
    opened && toggle();
  };

  const handleNavigateToTodaysQuote = () => {
    scrollTo({ y: 0 });
    navigate("/");
    opened && toggle();
  };

  const handleNavigateToFeed = () => {
    scrollTo({ y: 0 });
    navigate("/feed");
    opened && toggle();
  };

  const handleNavigateToTopics = () => {
    scrollTo({ y: 0 });
    dispatch(setTopicPage(1));
    navigate(
      `/topics?page=1&sort=${topicSort}&order=${topicOrder}&alpha=${topicAlpha}`
    );
  };

  const handleNavigateToAuthors = () => {
    scrollTo({ y: 0 });
    dispatch(setAuthorPage(1));
    navigate(
      `/authors?page=1&sort=${authorSort}&order=${authorOrder}&alpha=${authorAlpha}`
    );
  };

  const handleNavigateToPlaylists = () => {
    scrollTo({ y: 0 });
    dispatch(setPlaylistPage(1));
    dispatch(setTab("All"));
    navigate(`/playlists?page=1&sort=${playlistSort}&order=${playlistOrder}`);
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
        <Container size={mainContentWidth}>
          <Group h={layoutCompHeight} justify="space-between" align="center">
            <Group gap={4} onClick={handleNavigateToTodaysQuote} align="center">
              <Image src={logo} alt="logo" w={32} />

              <Text
                fw={textBolder}
                fz="lg"
                className={
                  isQuotePage
                    ? globalUtility.getThemeTxPseudoStyle(color)
                    : themeTxPseudoStyle
                }>
                {import.meta.env.VITE_APP_NAME}
              </Text>
            </Group>

            <Group gap={isMobile ? 6 : "xs"}>
              {!isInstalled && installPrompt && (
                <Group
                  gap={4}
                  c={themeGreenColor}
                  onClick={handleInstallClick}
                  visibleFrom={responsiveBreakpoint}>
                  <I I={IconDownload} />
                  <Text fz="sm" c={themeGreenColor} fw={textBold}>
                    Install App
                  </Text>
                </Group>
              )}

              <Group
                onClick={handleNavigateToTodaysQuote}
                visibleFrom={responsiveBreakpoint}>
                <Text
                  fz="sm"
                  fw={textBold}
                  className={
                    isQuotePage
                      ? globalUtility.getThemeTxPseudoStyle(color)
                      : themeTxPseudoStyle
                  }>
                  Today's
                </Text>
              </Group>

              <Group
                onClick={handleNavigateToFeed}
                visibleFrom={responsiveBreakpoint}>
                <Text
                  fz="sm"
                  fw={textBold}
                  className={
                    isQuotePage
                      ? globalUtility.getThemeTxPseudoStyle(color)
                      : themeTxPseudoStyle
                  }>
                  Feed
                </Text>
              </Group>

              <Group
                onClick={handleNavigateToTopics}
                visibleFrom={responsiveBreakpoint}>
                <Text
                  fz="sm"
                  fw={textBold}
                  className={
                    isQuotePage
                      ? globalUtility.getThemeTxPseudoStyle(color)
                      : themeTxPseudoStyle
                  }>
                  Topics
                </Text>
              </Group>

              <Group
                onClick={handleNavigateToAuthors}
                visibleFrom={responsiveBreakpoint}>
                <Text
                  fz="sm"
                  fw={textBold}
                  className={
                    isQuotePage
                      ? globalUtility.getThemeTxPseudoStyle(color)
                      : themeTxPseudoStyle
                  }>
                  Authors
                </Text>
              </Group>

              <Group
                onClick={handleNavigateToPlaylists}
                visibleFrom={responsiveBreakpoint}>
                <Text
                  fz="sm"
                  fw={textBold}
                  className={
                    isQuotePage
                      ? globalUtility.getThemeTxPseudoStyle(color)
                      : themeTxPseudoStyle
                  }>
                  Playlists
                </Text>
              </Group>

              <ActionIcon size="sm" onClick={handleOpenSearchbar}>
                <I
                  I={IconSearch}
                  color={isQuotePage ? globalUtility.getOneTx(color) : oneTx}
                />
              </ActionIcon>

              <ActionIcon size="sm" onClick={handleTheme}>
                {colorScheme === "dark" ? (
                  <I I={IconSun} color="orange" />
                ) : (
                  <I I={IconMoon} color="dodgerblue" />
                )}
              </ActionIcon>

              {auth.id ? (
                <ActionIcon size="sm" onClick={handleSignOut}>
                  <I
                    I={IconLogout}
                    color={isQuotePage ? globalUtility.getOneTx(color) : oneTx}
                  />
                </ActionIcon>
              ) : (
                <ActionIcon size="sm" onClick={handleNavigateToSignIn}>
                  <I
                    I={IconLogin}
                    color={isQuotePage ? globalUtility.getOneTx(color) : oneTx}
                  />
                </ActionIcon>
              )}

              <ActionIcon size="sm" onClick={fontOpen}>
                <I
                  I={IconLetterA}
                  color={isQuotePage ? globalUtility.getOneTx(color) : oneTx}
                />
              </ActionIcon>

              <ActionIcon size="sm" onClick={colorOpen}>
                <I
                  I={IconBrush}
                  color={isQuotePage ? globalUtility.getOneTx(color) : oneTx}
                />
              </ActionIcon>

              <FontModal opened={fontOpened} close={fontClose} />
              <ColorModal opened={colorOpened} close={colorClose} />

              <MenuLayout />

              {auth.id ? (
                <>
                  {auth.profilepic ? (
                    <Avatar
                      onClick={toggle}
                      src={auth.profilepic}
                      hiddenFrom={responsiveBreakpoint}
                    />
                  ) : (
                    <Avatar onClick={toggle} hiddenFrom={responsiveBreakpoint}>
                      {auth.firstname[0]}
                      {auth.lastname[0]}
                    </Avatar>
                  )}
                </>
              ) : (
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom={responsiveBreakpoint}
                  size="sm"
                  c={oneTx}
                />
              )}
            </Group>
          </Group>
        </Container>
      )}
    </>
  );
};
