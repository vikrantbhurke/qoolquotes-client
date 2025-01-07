import { RootState } from "@/global/states/store";
import { setPage as setTopicPage } from "@/topic/topic.slice";
import { setPage as setAuthorPage } from "@/author/author.slice";
import { borderLowContrastColor, roundBorders } from "@/global/styles/app.css";
import { footerHeight } from "@/global/styles/global.styles";
import { Group, Stack, Text } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import {
  IconArticle,
  IconArticleFilledFilled,
  IconBallpen,
  IconBallpenFilled,
  IconCategory,
  IconCategoryFilled,
  IconSearch,
} from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setIsSearchbarVisible } from "@/global/states/view.slice";
import { I } from "../components";

export const Footer = ({ opened, toggle }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, scrollTo] = useWindowScroll();
  const location = useLocation();

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
    scrollTo({ y: 0 });
    navigate("/");
    opened && toggle();
  };

  const handleNavigateToTopics = () => {
    scrollTo({ y: 0 });
    dispatch(setTopicPage(1));
    opened && toggle();
    navigate(
      `/topics?page=1&sort=${topicSort}&order=${topicOrder}&alpha=${topicAlpha}`
    );
  };

  const handleNavigateToAuthors = () => {
    scrollTo({ y: 0 });
    dispatch(setAuthorPage(1));
    opened && toggle();
    navigate(
      `/authors?page=1&sort=${authorSort}&order=${authorOrder}&alpha=${authorAlpha}`
    );
  };

  const handleReadOnlyClick = () => dispatch(setIsSearchbarVisible(true));

  const feedIconColor =
    location.pathname === "/" ? borderLowContrastColor : "transparent";

  const feedPath =
    location.pathname === "/" ? IconArticleFilledFilled : IconArticle;

  const topicsIconColor =
    location.pathname === "/topics" ? borderLowContrastColor : "transparent";

  const topicsPath =
    location.pathname === "/topics" ? IconCategoryFilled : IconCategory;

  const authorsIconColor =
    location.pathname === "/authors" ? borderLowContrastColor : "transparent";

  const authorsPath =
    location.pathname === "/authors" ? IconBallpenFilled : IconBallpen;

  return (
    <Group justify="space-evenly" grow gap={0} h={footerHeight}>
      <Stack
        justify="center"
        align="center"
        gap={0}
        h={footerHeight}
        onClick={handleNavigateToFeed}>
        <Stack bg={feedIconColor} px="xs" py={4} className={roundBorders}>
          <I I={feedPath} />
        </Stack>
        <Text>Feed</Text>
      </Stack>

      <Stack
        justify="center"
        align="center"
        gap={0}
        h={footerHeight}
        onClick={handleNavigateToTopics}>
        <Stack bg={topicsIconColor} px="xs" py={4} className={roundBorders}>
          <I I={topicsPath} />
        </Stack>
        <Text>Topics</Text>
      </Stack>

      <Stack
        justify="center"
        align="center"
        gap={0}
        h={footerHeight}
        onClick={handleNavigateToAuthors}>
        <Stack bg={authorsIconColor} px="xs" py={4} className={roundBorders}>
          <I I={authorsPath} />
        </Stack>
        <Text>Authors</Text>
      </Stack>

      <Stack
        justify="center"
        align="center"
        gap={0}
        h={footerHeight}
        onClick={handleReadOnlyClick}>
        <I I={IconSearch} />
        <Text>Search</Text>
      </Stack>
    </Group>
  );
};
