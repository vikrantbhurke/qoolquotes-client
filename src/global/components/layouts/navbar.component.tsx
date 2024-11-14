import { RootState } from "@/global/states/store";
import { buttonPseudo } from "@/global/styles/app.css";
import { Button, Stack } from "@mantine/core";
import {
  IconArticle,
  IconBallpen,
  IconCategory,
  IconPlaylist,
  IconQuote,
  IconUser,
} from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const { listButtonHeight: navbarButtonHeight } = useSelector(
    (state: RootState) => state.view
  );

  const handleNavigateToFeed = () => {
    navigate("/");
  };

  const handleNavigateToQuotes = () => {
    navigate("/quotes");
  };

  const handleNavigateToTopics = () => {
    navigate("/topics");
  };

  const handleNavigateToAuthors = () => {
    navigate("/authors");
  };

  const handleNavigateToPlaylists = () => {
    navigate("/playlists");
  };

  const handleNavigateToProfile = () => {
    navigate("/users/12345");
  };

  return (
    <Stack gap={0}>
      <Button
        h={navbarButtonHeight}
        radius={0}
        className={buttonPseudo}
        leftSection={<IconArticle stroke={1.5} size={20} />}
        onClick={handleNavigateToFeed}>
        Feed
      </Button>

      <Button
        h={navbarButtonHeight}
        radius={0}
        className={buttonPseudo}
        leftSection={<IconQuote stroke={1.5} size={20} />}
        onClick={handleNavigateToQuotes}>
        Quotes
      </Button>

      <Button
        h={navbarButtonHeight}
        radius={0}
        className={buttonPseudo}
        leftSection={<IconCategory stroke={1.5} size={20} />}
        onClick={handleNavigateToTopics}>
        Topics
      </Button>

      <Button
        h={navbarButtonHeight}
        radius={0}
        className={buttonPseudo}
        leftSection={<IconBallpen stroke={1.5} size={20} />}
        onClick={handleNavigateToAuthors}>
        Authors
      </Button>

      <Button
        h={navbarButtonHeight}
        radius={0}
        className={buttonPseudo}
        leftSection={<IconPlaylist stroke={1.5} size={20} />}
        onClick={handleNavigateToPlaylists}>
        Playlists
      </Button>

      <Button
        h={navbarButtonHeight}
        radius={0}
        className={buttonPseudo}
        leftSection={<IconUser stroke={1.5} size={20} />}
        onClick={handleNavigateToProfile}>
        Profile
      </Button>
    </Stack>
  );
};
