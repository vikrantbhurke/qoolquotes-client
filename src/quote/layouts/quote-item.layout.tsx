import { setPage, setQid } from "@/quote/quote.slice";
import { oneTx, threeBg } from "@/global/styles/app.css";
import { mainContentWidth } from "@/global/styles/global.styles";
import { PlaylistModal } from "@/playlist/layouts";
import { ActionIcon, Group, Pill, Stack, Text, Tooltip } from "@mantine/core";
import { useClipboard, useDisclosure } from "@mantine/hooks";
import { IconCopy, IconPlaylistAdd, IconCheck } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  QuoteLikerLikeUnlikeButtonLayout,
  QuoteLikesCountLayout,
  QuoteLikerReadonlyButtonLayout,
} from "@/quote-liker/layouts";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Role } from "@/user/enums";
import { I } from "@/global/components/components";

export const QuoteItemLayout = ({ quote }: any) => {
  const { auth } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [opened, setOpened] = useState(false);
  const clipboard = useClipboard({ timeout: 50 });
  const [modalOpened, { open, close }] = useDisclosure(false);

  const pills = quote.topicIds.map((topicId: any) => {
    return (
      <Pill
        key={topicId._id}
        bg={threeBg}
        onClick={() => handleNavigateToQuoteByTopic(topicId)}>
        {topicId.name}
      </Pill>
    );
  });

  const handleNavigateToQuoteByAuthor = () => {
    dispatch(setPage(1));
    navigate(`/quotes/authorId/${quote.authorId._id}?page=1`, {
      state: { name: quote.authorId.name, aid: quote.authorId._id },
    });
  };

  const handleNavigateToQuoteByTopic = (topic: any) => {
    dispatch(setPage(1));
    navigate(`/quotes/topicId/${topic._id}?page=1`, {
      state: { name: topic.name, tid: topic._id },
    });
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
    <Stack h="100%" justify="center" align="center">
      <PlaylistModal opened={modalOpened} close={close} />

      <Stack
        maw={mainContentWidth}
        gap="xl"
        px="md"
        justify="center"
        align="center">
        <Text ta="center">{quote.content}</Text>
        <Text ta="center" onClick={handleNavigateToQuoteByAuthor}>
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
    </Stack>
  );
};
