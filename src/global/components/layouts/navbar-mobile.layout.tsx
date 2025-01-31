import { Clearance } from "@/user/enums";
import { Button, Center, Stack } from "@mantine/core";
import { CompOrFragmentRoute } from "@/global/routes";
import { RootState } from "@/global/states/store";
import { setPage as setTopicPage } from "@/topic/topic.slice";
import { setPage as setAuthorPage } from "@/author/author.slice";
import { setPage as setPlaylistPage, setTab } from "@/playlist/playlist.slice";
import {
  oneTxGreenBgNavbarButtonPseudoStyle,
  oneTxYellowBgNavbarButtonPseudoStyle,
  themeGreenColor,
} from "@/global/styles/app.css";
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
import { useInstallApp } from "@/global/hooks";
import { IconCategoryFilled } from "@tabler/icons-react";
import Banner300x250 from "@/global/ads/Banner300x250";
import Banner320x50 from "@/global/ads/Banner320x50";

export const NavbarMobileLayout = ({ toggle }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [, scrollTo] = useWindowScroll();
  const { isMobile } = useSelector((state: any) => state.view);
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

  const handleNavigateToFeed = () => {
    toggle();
    scrollTo({ y: 0 });
    navigate("/");
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

  const buttonClasses = `${oneTxYellowBgNavbarButtonPseudoStyle}`;

  return (
    <Stack justify="space-between" gap={0} h="100%">
      <Stack gap={isMobile ? 0 : "xs"} p="xs">
        {!isInstalled && installPrompt && (
          <CompOrFragmentRoute clearance={Clearance.LevelOne}>
            <Button
              c={themeGreenColor}
              h={layoutCompHeight}
              className={oneTxGreenBgNavbarButtonPseudoStyle}
              leftSection={<I I={IconDownload} />}
              onClick={handleInstallClick}>
              Install App
            </Button>
          </CompOrFragmentRoute>
        )}

        <Button
          h={layoutCompHeight}
          className={buttonClasses}
          leftSection={
            <I
              I={
                location.pathname === "/"
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

        <CompOrFragmentRoute clearance={Clearance.LevelTwo}>
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
        </CompOrFragmentRoute>

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
