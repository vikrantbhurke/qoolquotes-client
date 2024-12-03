import { Clearance } from "@/user/enums";
import { Button, Stack } from "@mantine/core";
import { CompOrFragmentRoute } from "@/global/routes";
import { RootState } from "@/global/states/store";
import { setPage as setTopicPage } from "@/topic/topic.slice";
import { setPage as setAuthorPage } from "@/author/author.slice";
import { setPage as setPlaylistPage, setTab } from "@/playlist/playlist.slice";
import { borderBottom, oneTxOneBgButtonPseudo } from "@/global/styles/app.css";
import { listButtonHeight } from "@/global/styles/global.styles";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import {
  IconArticle,
  IconBallpen,
  IconCategory,
  IconMessage,
  IconPlaylist,
  IconUser,
} from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ContactModal, I } from "../components";

export const Navbar = ({ toggle }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, scrollTo] = useWindowScroll();
  const { auth } = useSelector((state: RootState) => state.auth);

  const [opened, { open, close }] = useDisclosure();

  const { sort: authorSort, order: authorOrder } = useSelector(
    (state: RootState) => state.author
  );

  const { sort: topicSort, order: topicOrder } = useSelector(
    (state: RootState) => state.topic
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
    navigate(`/topics?page=1&sort=${topicSort}&order=${topicOrder}`);
  };

  const handleNavigateToAuthors = () => {
    toggle();
    scrollTo({ y: 0 });
    dispatch(setAuthorPage(1));
    navigate(`/authors?page=1&sort=${authorSort}&order=${authorOrder}`);
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

  const handleContact = () => {
    toggle();
    open();
  };

  const buttonClasses = `${oneTxOneBgButtonPseudo} ${borderBottom}`;

  return (
    <Stack gap={0} p={0}>
      <Button
        h={listButtonHeight}
        className={buttonClasses}
        leftSection={<I I={IconArticle} />}
        onClick={handleNavigateToFeed}>
        Feed
      </Button>

      <Button
        h={listButtonHeight}
        className={buttonClasses}
        leftSection={<I I={IconCategory} />}
        onClick={handleNavigateToTopics}>
        Topics
      </Button>

      <Button
        h={listButtonHeight}
        className={buttonClasses}
        leftSection={<I I={IconBallpen} />}
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

      <CompOrFragmentRoute clearance={Clearance.LevelTwo}>
        <Button
          h={listButtonHeight}
          className={buttonClasses}
          leftSection={<I I={IconUser} />}
          onClick={handleNavigateToProfile}>
          Profile
        </Button>
      </CompOrFragmentRoute>

      <Button
        h={listButtonHeight}
        className={buttonClasses}
        leftSection={<I I={IconMessage} />}
        onClick={handleContact}>
        Contact
      </Button>

      <ContactModal opened={opened} close={close} />
    </Stack>
  );
};
