import { Clearance } from "@/user/enums";
import { Button, Center, Image, Stack } from "@mantine/core";
import { ComponentOrFragmentRoute } from "@/global/routes";
import { RootState } from "@/global/states/store";
import { setPage as setTopicPage } from "@/topic/topic.slice";
import { setPage as setAuthorPage } from "@/author/author.slice";
import { setPage as setPlaylistPage, setTab } from "@/playlist/playlist.slice";
import { themeTealColor } from "@/global/styles/renamed.variables";
import { oneTxThemeDefaultBgNavbarButtonPseudoStyle } from "@/global/styles/one-tx-theme-bg-navbar-button-pseudo.css";
import { layoutCompHeight } from "@/global/styles/global.styles";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import {
  IconArticle,
  IconArticleFilledFilled,
  IconBallpen,
  IconBallpenFilled,
  IconCategory,
  IconDownload,
  IconInfoCircle,
  IconMail,
  IconPlaylist,
  IconUser,
  IconUserFilled,
} from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { I } from "../reusables";
import { ContactModal } from "../views";
import { useInstallApp, useIsQuotePage } from "@/global/hooks";
import { IconCategoryFilled } from "@tabler/icons-react";
import Banner300x250 from "@/global/ads/Banner300x250";
import Banner320x50 from "@/global/ads/Banner320x50";
import logo from "@/global/assets/pwa-64x64.png";
import { globalUtility } from "@/global/utilities";

export const NavbarMobileLayout = ({ toggle }: any) => {
  const isQuotePage = useIsQuotePage();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [, scrollTo] = useWindowScroll();
  const { isMobile, color } = useSelector((state: RootState) => state.view);
  const { auth } = useSelector((state: RootState) => state.auth);
  const { installPrompt, isInstalled, handleInstallClick } = useInstallApp();
  const [opened, { open, close }] = useDisclosure();

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

  const handleNavigateToTodaysQuote = () => {
    toggle();
    scrollTo({ y: 0 });
    navigate("/");
  };

  const handleNavigateToFeed = () => {
    toggle();
    scrollTo({ y: 0 });
    navigate("/feed");
  };

  const handleNavigateToTopics = () => {
    toggle();
    scrollTo({ y: 0 });
    dispatch(setTopicPage(1));
    navigate(
      `/topics?page=1&sort=${topicSort}&order=${topicOrder}&alpha=${topicAlpha}`
    );
  };

  const handleNavigateToAuthors = () => {
    toggle();
    scrollTo({ y: 0 });
    dispatch(setAuthorPage(1));
    navigate(
      `/authors?page=1&sort=${authorSort}&order=${authorOrder}&alpha=${authorAlpha}`
    );
  };

  const handleNavigateToPlaylists = () => {
    toggle();
    scrollTo({ y: 0 });
    dispatch(setPlaylistPage(1));
    dispatch(setTab("All"));
    navigate(`/playlists?page=1&sort=${playlistSort}&order=${playlistOrder}`);
  };

  const handleNavigateToProfile = () => {
    toggle();
    navigate(`/users/${auth.id}`);
  };

  const handleNavigateToAbout = () => {
    toggle();
    navigate(`/about`);
  };

  const handleContact = () => {
    toggle();
    open();
  };

  const buttonClasses = isQuotePage
    ? globalUtility.getOneTxThemeBgNavbarButtonPseudoStyle(color)
    : oneTxThemeDefaultBgNavbarButtonPseudoStyle;

  return (
    <Stack justify="space-between" gap={0} h="100%">
      <Stack gap={isMobile ? 0 : "xs"} p="xs">
        <Button
          h={layoutCompHeight}
          className={buttonClasses}
          leftSection={<Image src={logo} alt="logo" w={32} />}
          onClick={handleNavigateToTodaysQuote}>
          Today's
        </Button>

        {!isInstalled && installPrompt && (
          <ComponentOrFragmentRoute clearance={Clearance.LevelOne}>
            <Button
              c={themeTealColor}
              h={layoutCompHeight}
              className={buttonClasses}
              leftSection={<I I={IconDownload} />}
              onClick={handleInstallClick}>
              Install App
            </Button>
          </ComponentOrFragmentRoute>
        )}

        <Button
          h={layoutCompHeight}
          className={buttonClasses}
          leftSection={
            <I
              I={
                location.pathname === "/feed"
                  ? IconArticleFilledFilled
                  : IconArticle
              }
            />
          }
          onClick={handleNavigateToFeed}>
          Feed
        </Button>

        <Button
          h={layoutCompHeight}
          className={buttonClasses}
          leftSection={
            <I
              I={
                location.pathname === "/topics"
                  ? IconCategoryFilled
                  : IconCategory
              }
            />
          }
          onClick={handleNavigateToTopics}>
          Topics
        </Button>

        <Button
          h={layoutCompHeight}
          className={buttonClasses}
          leftSection={
            <I
              I={
                location.pathname === "/authors"
                  ? IconBallpenFilled
                  : IconBallpen
              }
            />
          }
          onClick={handleNavigateToAuthors}>
          Authors
        </Button>

        <Button
          h={layoutCompHeight}
          className={buttonClasses}
          leftSection={<I I={IconPlaylist} />}
          onClick={handleNavigateToPlaylists}>
          Playlists
        </Button>

        <Button
          h={layoutCompHeight}
          className={buttonClasses}
          leftSection={<I I={IconInfoCircle} />}
          onClick={handleNavigateToAbout}>
          About
        </Button>

        <ComponentOrFragmentRoute clearance={Clearance.LevelTwo}>
          <Button
            h={layoutCompHeight}
            className={buttonClasses}
            leftSection={
              <I
                I={
                  location.pathname.startsWith("/users")
                    ? IconUserFilled
                    : IconUser
                }
              />
            }
            onClick={handleNavigateToProfile}>
            Profile
          </Button>
        </ComponentOrFragmentRoute>

        <Button
          h={layoutCompHeight}
          className={buttonClasses}
          leftSection={<I I={IconMail} />}
          onClick={handleContact}>
          Contact
        </Button>

        <ContactModal opened={opened} close={close} />
      </Stack>

      <Center p="md">{isMobile ? <Banner320x50 /> : <Banner300x250 />}</Center>
    </Stack>
  );
};
