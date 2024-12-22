import { Clearance } from "@/user/enums";
import { Button, Center, Stack } from "@mantine/core";
import { CompOrFragmentRoute } from "@/global/routes";
import { RootState } from "@/global/states/store";
import { setPage as setTopicPage } from "@/topic/topic.slice";
import { setPage as setAuthorPage } from "@/author/author.slice";
import { setPage as setPlaylistPage, setTab } from "@/playlist/playlist.slice";
import { oneTxOneBgButtonPseudo, themeGreen } from "@/global/styles/app.css";
import { listButtonHeight } from "@/global/styles/global.styles";
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
import { ContactModal, I } from "../components";
import { useInstallApp, useIsMobile } from "@/global/hooks";
import { IconCategoryFilled } from "@tabler/icons-react";
import Banner300x250 from "@/ads/Banner300x250";
import Banner320x50 from "@/ads/Banner320x50";

export const Navbar = ({ toggle }: any) => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [, scrollTo] = useWindowScroll();
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
    navigate("/playlists?page=1");
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

  const buttonClasses = `${oneTxOneBgButtonPseudo}`;

  return (
    <Stack justify="space-between" gap={0} p={0} h="100%">
      <Stack gap={0} p={0}>
        {!isInstalled && installPrompt && (
          <CompOrFragmentRoute clearance={Clearance.LevelOne}>
            <Button
              c={themeGreen}
              h={listButtonHeight}
              className={buttonClasses}
              leftSection={<I I={IconDownload} />}
              onClick={handleInstallClick}>
              Install
            </Button>
          </CompOrFragmentRoute>
        )}

        <Button
          h={listButtonHeight}
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
          h={listButtonHeight}
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
          h={listButtonHeight}
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
          h={listButtonHeight}
          className={buttonClasses}
          leftSection={<I I={IconPlaylist} />}
          onClick={handleNavigateToPlaylists}>
          Playlists
        </Button>

        <Button
          h={listButtonHeight}
          className={buttonClasses}
          leftSection={<I I={IconInfoCircle} />}
          onClick={handleNavigateToAbout}>
          About
        </Button>

        <CompOrFragmentRoute clearance={Clearance.LevelTwo}>
          <Button
            h={listButtonHeight}
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
          h={listButtonHeight}
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
