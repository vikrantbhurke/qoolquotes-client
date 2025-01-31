import { quoteCardMaxWidth } from "@/global/styles/global.styles";
import {
  oneTx,
  oneBg,
  twoBg,
  threeBg,
  roundBorderStyle,
  oneTxYellowBgPillPseudoStyle,
  themeTxStyle,
} from "@/global/styles/app.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PlaylistModal } from "@/playlist/layouts";
import { useClipboard, useDisclosure } from "@mantine/hooks";
import { setFilterObject, setPage, setQid } from "@/quote/quote.slice";
import { IconCopy, IconPlaylistAdd, IconCheck } from "@tabler/icons-react";
import {
  ActionIcon,
  Center,
  Group,
  Pill,
  Space,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  QuoteLikerLikeUnlikeButtonLayout,
  QuoteLikesCountLayout,
  QuoteLikerReadonlyButtonLayout,
} from "@/quote-liker/layouts";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Role } from "@/user/enums";
import { I } from "@/global/components/reusables";
import DesktopLeaderboard from "@/global/ads/DesktopLeaderboard";
import Banner320x50 from "@/global/ads/Banner320x50";
import { RootState } from "@/global/states/store";

export const QuoteItemLayout = ({ quote }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [opened, setOpened] = useState(false);
  const clipboard = useClipboard({ timeout: 50 });
  const [modalOpened, { open, close }] = useDisclosure(false);
  const { isMobile, font } = useSelector((state: RootState) => state.view);
  console.log("Font", font);
  const pills = quote.topicIds.map((topicId: any) => {
    return (
      <Pill
        key={topicId._id}
        className={oneTxYellowBgPillPseudoStyle}
        onClick={() => handleNavigateToQuoteByTopic(topicId)}>
        {topicId.name}
      </Pill>
    );
  });

  const handleNavigateToQuoteByAuthor = () => {
    dispatch(setPage(1));

    dispatch(
      setFilterObject({ name: quote.authorId.name, id: quote.authorId._id })
    );

    navigate(`/quotes/authorId/${quote.authorId._id}?page=1`);
  };

  const handleNavigateToQuoteByTopic = (topic: any) => {
    dispatch(setPage(1));
    dispatch(setFilterObject({ name: topic.name, id: topic._id }));
    navigate(`/quotes/topicId/${topic._id}?page=1`);
  };

  const handleModalOpen = () => {
    if (auth.role === Role.Public) {
      navigate("/sign-in");
      return;
    }

    open();
    dispatch(setQid(quote.id));
  };

  const handleCopy = () => {
    clipboard.copy(`${quote.content} - ${quote.authorId.name}`);
    setOpened(true);
    setTimeout(() => setOpened(false), 1500);
  };

  return (
    <>
      <PlaylistModal opened={modalOpened} close={close} />

      <Stack
        p="md"
        h="100%"
        align="center"
        justify="space-between"
        bg={isMobile ? oneBg : twoBg}>
        <Space h={isMobile ? 50 : 90} />

        <Stack
          bg={oneBg}
          className={`${roundBorderStyle}`}
          maw={quoteCardMaxWidth}
          gap="xl"
          p="xl"
          justify="center"
          align="center">
          <Text
            ta="center"
            // className={globalUtility.getFont(font)}
          >
            {quote.content}
          </Text>
          <Text
            ta="center"
            onClick={handleNavigateToQuoteByAuthor}
            className={themeTxStyle}>
            {quote.authorId.name}
          </Text>

          {quote.topicIds && quote.topicIds.length > 0 && (
            <Group ta="center" justify="center">
              {pills}
            </Group>
          )}

          <Group>
            <Group gap={4}>
              {auth.role === Role.Public ? (
                <QuoteLikerReadonlyButtonLayout />
              ) : (
                <QuoteLikerLikeUnlikeButtonLayout qid={quote.id} />
              )}

              <QuoteLikesCountLayout qid={quote.id} />
            </Group>

            <ActionIcon size="sm" onClick={handleModalOpen}>
              <I I={IconPlaylistAdd} />
            </ActionIcon>

            <Tooltip
              label="Copied!"
              position="bottom"
              opened={opened}
              bg={threeBg}
              c={oneTx}>
              {opened ? (
                <ActionIcon c="green" aria-label="Copy to clipboard">
                  <I I={IconCheck} color="green" />
                </ActionIcon>
              ) : (
                <ActionIcon aria-label="Copy to clipboard" onClick={handleCopy}>
                  <I I={IconCopy} />
                </ActionIcon>
              )}
            </Tooltip>
          </Group>
        </Stack>

        <Center p="md">
          <Stack h={isMobile ? 50 : 90}>
            {isMobile ? <Banner320x50 /> : <DesktopLeaderboard />}
          </Stack>
        </Center>
      </Stack>
    </>
  );
};
