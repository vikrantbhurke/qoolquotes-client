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
  Indicator,
} from "@mantine/core";
import {
  IconBrush,
  IconBulb,
  IconDownload,
  IconLetterA,
  IconLock,
  IconLogin,
  IconLogout,
  IconSearch,
} from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MenuLayout, SearchLayout } from "./index";
import { useDispatch } from "react-redux";
import {
  resetColor,
  resetFont,
  setIsSearchbarVisible,
} from "@/global/states/view.slice";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { themeDefaultTxPseudoStyle } from "@/global/styles/theme-tx-pseudo.css";
import {
  oneDefaultTx,
  themeTealColor,
} from "@/global/styles/renamed.variables";
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
import { Clearance } from "@/user/enums";
import { ComponentOneOrTwoRoute } from "@/global/routes";
import { SubscribeModal } from "@/subscription/layouts";

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

  const [subscribeOpened, { open: subscribeOpen, close: subscribeClose }] =
    useDisclosure(false);

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
    dispatch(resetFont());
    dispatch(resetColor());
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

  const oneTxColor = isQuotePage ? globalUtility.getOneTx(color) : oneDefaultTx;

  const themeTxPseudoStyles = isQuotePage
    ? globalUtility.getThemeTxPseudoStyle(color)
    : themeDefaultTxPseudoStyle;

  return (
    <>
      <SubscribeModal opened={subscribeOpened} close={subscribeClose} />

      {isSearchbarVisible ? (
        <SearchLayout />
      ) : (
        <Container size={mainContentWidth}>
          <Group h={layoutCompHeight} justify="space-between" align="center">
            <Group gap={4} onClick={handleNavigateToTodaysQuote} align="center">
              <Image src={logo} alt="logo" w={32} />

              <Text fw={textBolder} fz="lg" className={themeTxPseudoStyles}>
                {import.meta.env.VITE_APP_NAME}
              </Text>
            </Group>

            <Group gap={isMobile ? 6 : "xs"}>
              {!isInstalled && installPrompt && (
                <Group
                  gap={4}
                  c={themeTealColor}
                  onClick={handleInstallClick}
                  visibleFrom={responsiveBreakpoint}>
                  <I I={IconDownload} />
                  <Text fz="sm" c={themeTealColor} fw={textBold}>
                    Install App
                  </Text>
                </Group>
              )}

              <Group
                onClick={handleNavigateToTodaysQuote}
                visibleFrom={responsiveBreakpoint}>
                <Text fz="sm" fw={textBold} className={themeTxPseudoStyles}>
                  Today's
                </Text>
              </Group>

              <Group
                onClick={handleNavigateToFeed}
                visibleFrom={responsiveBreakpoint}>
                <Text fz="sm" fw={textBold} className={themeTxPseudoStyles}>
                  Feed
                </Text>
              </Group>

              <Group
                onClick={handleNavigateToTopics}
                visibleFrom={responsiveBreakpoint}>
                <Text fz="sm" fw={textBold} className={themeTxPseudoStyles}>
                  Topics
                </Text>
              </Group>

              <Group
                onClick={handleNavigateToAuthors}
                visibleFrom={responsiveBreakpoint}>
                <Text fz="sm" fw={textBold} className={themeTxPseudoStyles}>
                  Authors
                </Text>
              </Group>

              <Group
                onClick={handleNavigateToPlaylists}
                visibleFrom={responsiveBreakpoint}>
                <Text fz="sm" fw={textBold} className={themeTxPseudoStyles}>
                  Playlists
                </Text>
              </Group>

              <ActionIcon size="sm" onClick={handleOpenSearchbar}>
                <I I={IconSearch} color={oneTxColor} />
              </ActionIcon>

              <ActionIcon size="sm" onClick={handleTheme}>
                {colorScheme === "dark" ? (
                  <I I={IconBulb} color={oneTxColor} />
                ) : (
                  <I I={IconBulb} color={oneTxColor} />
                )}
              </ActionIcon>

              <ComponentOneOrTwoRoute
                clearance={Clearance.LevelThree}
                compOne={
                  <ActionIcon size="sm" onClick={fontOpen}>
                    <I I={IconLetterA} color={oneTxColor} />
                  </ActionIcon>
                }
                compTwo={
                  <Indicator
                    h={22}
                    color="transparent"
                    position="top-start"
                    label={<I I={IconLock} size={14} color={oneDefaultTx} />}>
                    <ActionIcon size="sm" onClick={subscribeOpen}>
                      <I I={IconLetterA} color={oneTxColor} />
                    </ActionIcon>
                  </Indicator>
                }
              />

              <ComponentOneOrTwoRoute
                clearance={Clearance.LevelThree}
                compOne={
                  <ActionIcon size="sm" onClick={colorOpen}>
                    <I I={IconBrush} color={oneTxColor} />
                  </ActionIcon>
                }
                compTwo={
                  <Indicator
                    h={22}
                    color="transparent"
                    position="top-start"
                    label={<I I={IconLock} size={14} color={oneDefaultTx} />}>
                    <ActionIcon size="sm" onClick={subscribeOpen}>
                      <I I={IconBrush} color={oneTxColor} />
                    </ActionIcon>
                  </Indicator>
                }
              />

              <FontModal opened={fontOpened} close={fontClose} />
              <ColorModal opened={colorOpened} close={colorClose} />

              <ComponentOneOrTwoRoute
                clearance={Clearance.LevelTwo}
                compOne={
                  <ActionIcon size="sm" onClick={handleSignOut}>
                    <I I={IconLogout} color={oneTxColor} />
                  </ActionIcon>
                }
                compTwo={
                  <ActionIcon size="sm" onClick={handleNavigateToSignIn}>
                    <I I={IconLogin} color={oneTxColor} />
                  </ActionIcon>
                }
              />

              <MenuLayout />

              {auth.id ? (
                <>
                  {auth.profilepic ? (
                    <Avatar
                      onClick={toggle}
                      src={auth.profilepic}
                      hiddenFrom={responsiveBreakpoint}
                      color={oneTxColor}
                    />
                  ) : (
                    <Avatar
                      onClick={toggle}
                      hiddenFrom={responsiveBreakpoint}
                      color={oneTxColor}>
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
                  color={oneTxColor}
                  size="sm"
                />
              )}
            </Group>
          </Group>
        </Container>
      )}
    </>
  );
};
