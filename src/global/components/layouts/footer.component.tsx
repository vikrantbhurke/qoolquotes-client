import { RootState } from "@/global/states/store";
import { buttonPseudo } from "@/global/styles/app.css";
import { Group, Stack, Text } from "@mantine/core";
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

export const Footer = () => {
  const navigate = useNavigate();
  const { footerHeight } = useSelector((state: RootState) => state.view);

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
    <Group justify="center" grow gap={0} h={footerHeight}>
      <Stack
        justify="center"
        align="center"
        gap={0}
        h={footerHeight}
        className={buttonPseudo}
        onClick={handleNavigateToFeed}>
        <IconArticle stroke={1.5} size={20} />
        <Text size="sm">Feed</Text>
      </Stack>

      <Stack
        justify="center"
        align="center"
        gap={0}
        h={footerHeight}
        className={buttonPseudo}
        onClick={handleNavigateToQuotes}>
        <IconQuote stroke={1.5} size={20} />
        <Text size="sm">Quotes</Text>
      </Stack>

      <Stack
        justify="center"
        align="center"
        gap={0}
        h={footerHeight}
        className={buttonPseudo}
        onClick={handleNavigateToPlaylists}>
        <IconPlaylist stroke={1.5} size={20} />
        <Text size="sm">Playlists</Text>
      </Stack>

      <Stack
        justify="center"
        align="center"
        gap={0}
        h={footerHeight}
        className={buttonPseudo}
        onClick={handleNavigateToTopics}>
        <IconCategory stroke={1.5} size={20} />
        <Text size="sm">Topics</Text>
      </Stack>

      <Stack
        justify="center"
        align="center"
        gap={0}
        h={footerHeight}
        className={buttonPseudo}
        onClick={handleNavigateToAuthors}>
        <IconBallpen stroke={1.5} size={20} />
        <Text size="sm">Authors</Text>
      </Stack>

      <Stack
        justify="center"
        align="center"
        gap={0}
        h={footerHeight}
        className={buttonPseudo}
        onClick={handleNavigateToProfile}>
        <IconUser stroke={1.5} size={20} />
        <Text size="sm">Profile</Text>
      </Stack>
    </Group>
  );
};
