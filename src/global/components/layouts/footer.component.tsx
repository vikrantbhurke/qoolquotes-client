import { RootState } from "@/global/states/store";
import { setPage as setTopicPage } from "@/topic/topic.slice";
import { setPage as setAuthorPage } from "@/author/author.slice";
import { oneTxOneBgButtonPseudo } from "@/global/styles/app.css";
import { footerHeight } from "@/global/styles/global.styles";
import { Group, Stack, Text } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import {
  IconArticle,
  IconBallpen,
  IconCategory,
  IconSearch,
} from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsSearchbarVisible } from "@/global/states/view.slice";
import { I } from "../components";

export const Footer = ({ opened, toggle }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, scrollTo] = useWindowScroll();

  const { sort: authorSort, order: authorOrder } = useSelector(
    (state: RootState) => state.author
  );

  const { sort: topicSort, order: topicOrder } = useSelector(
    (state: RootState) => state.topic
  );

  const handleNavigateToFeed = () => {
    scrollTo({ y: 0 });
    navigate("/");
    opened && toggle();
  };

  const handleNavigateToTopics = () => {
    scrollTo({ y: 0 });
    dispatch(setTopicPage(1));
    opened && toggle();
    navigate(`/topics?page=1&sort=${topicSort}&order=${topicOrder}`);
  };

  const handleNavigateToAuthors = () => {
    scrollTo({ y: 0 });
    dispatch(setAuthorPage(1));
    opened && toggle();
    navigate(`/authors?page=1&sort=${authorSort}&order=${authorOrder}`);
  };

  const handleReadOnlyClick = () => dispatch(setIsSearchbarVisible(true));

  return (
    <Group justify="space-evenly" grow gap={0} h={footerHeight}>
      <Stack
        justify="center"
        align="center"
        gap={0}
        h={footerHeight}
        className={oneTxOneBgButtonPseudo}
        onClick={handleNavigateToFeed}>
        <I I={IconArticle} />
        <Text>Feed</Text>
      </Stack>

      <Stack
        justify="center"
        align="center"
        gap={0}
        h={footerHeight}
        className={oneTxOneBgButtonPseudo}
        onClick={handleNavigateToTopics}>
        <I I={IconCategory} />
        <Text>Topics</Text>
      </Stack>

      <Stack
        justify="center"
        align="center"
        gap={0}
        h={footerHeight}
        className={oneTxOneBgButtonPseudo}
        onClick={handleNavigateToAuthors}>
        <I I={IconBallpen} />
        <Text>Authors</Text>
      </Stack>

      <Stack
        justify="center"
        align="center"
        gap={0}
        h={footerHeight}
        className={oneTxOneBgButtonPseudo}
        onClick={handleReadOnlyClick}>
        <I I={IconSearch} />
        <Text>Search</Text>
      </Stack>
    </Group>
  );
};
