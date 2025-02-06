import { RootState } from "@/global/states/store";
import { setPage as setTopicPage } from "@/topic/topic.slice";
import { setPage as setAuthorPage } from "@/author/author.slice";
import { roundBorderStyle, themeYellowBg } from "@/global/styles/app.css";
import { layoutCompHeight } from "@/global/styles/global.styles";
import { Group, Stack, Text, Image } from "@mantine/core";
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
import { I } from "../reusables";
import logo from "@/global/assets/pwa-64x64.png";

export const FooterLayout = ({ opened, toggle }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [, scrollTo] = useWindowScroll();
  const location = useLocation();

  const { isSearchbarVisible } = useSelector((state: RootState) => state.view);

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

  const handleNavigateToTodaysQuote = () => {
    scrollTo({ y: 0 });
    navigate("/quotes/todays");
    opened && toggle();
  };

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

  const todaysIconColor =
    location.pathname === "/quotes/todays" ? themeYellowBg : "transparent";

  const feedIconColor =
    location.pathname === "/" ? themeYellowBg : "transparent";

  const feedPath =
    location.pathname === "/" ? IconArticleFilledFilled : IconArticle;

  const topicsIconColor =
    location.pathname === "/topics" ? themeYellowBg : "transparent";

  const topicsPath =
    location.pathname === "/topics" ? IconCategoryFilled : IconCategory;

  const authorsIconColor =
    location.pathname === "/authors" ? themeYellowBg : "transparent";

  const authorsPath =
    location.pathname === "/authors" ? IconBallpenFilled : IconBallpen;

  const searchIconColor = isSearchbarVisible ? themeYellowBg : "transparent";

  return (
    <Group justify="space-evenly" grow gap={0} h={layoutCompHeight}>
      <Stack
        justify="center"
        align="center"
        gap={0}
        h={layoutCompHeight}
        onClick={handleNavigateToTodaysQuote}>
        <Stack bg={todaysIconColor} px={8} py={2} className={roundBorderStyle}>
          <Image src={logo} alt="logo" w={24} p={0} m={0} />
        </Stack>
        <Text>Today's</Text>
      </Stack>

      <Stack
        justify="center"
        align="center"
        gap={0}
        h={layoutCompHeight}
        onClick={handleNavigateToFeed}>
        <Stack bg={feedIconColor} px="xs" py={4} className={roundBorderStyle}>
          <I I={feedPath} />
        </Stack>
        <Text>Feed</Text>
      </Stack>

      <Stack
        justify="center"
        align="center"
        gap={0}
        h={layoutCompHeight}
        onClick={handleNavigateToTopics}>
        <Stack bg={topicsIconColor} px="xs" py={4} className={roundBorderStyle}>
          <I I={topicsPath} />
        </Stack>
        <Text>Topics</Text>
      </Stack>

      <Stack
        justify="center"
        align="center"
        gap={0}
        h={layoutCompHeight}
        onClick={handleNavigateToAuthors}>
        <Stack
          bg={authorsIconColor}
          px="xs"
          py={4}
          className={roundBorderStyle}>
          <I I={authorsPath} />
        </Stack>
        <Text>Authors</Text>
      </Stack>

      <Stack
        justify="center"
        align="center"
        gap={0}
        h={layoutCompHeight}
        onClick={handleReadOnlyClick}>
        <Stack bg={searchIconColor} px="xs" py={4} className={roundBorderStyle}>
          <I I={IconSearch} />
        </Stack>
        <Text>Search</Text>
      </Stack>
    </Group>
  );
};
