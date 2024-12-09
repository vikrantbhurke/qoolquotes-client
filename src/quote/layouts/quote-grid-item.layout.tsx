import { setPage, setQid } from "@/quote/quote.slice";
import { oneTx, threeBg } from "@/global/styles/app.css";
import { ActionIcon, Group, Pill, Stack, Text, Tooltip } from "@mantine/core";
import { IconCheck, IconCopy, IconPlaylistAdd } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useClipboard, useDisclosure } from "@mantine/hooks";
import { PlaylistModal } from "@/playlist/layouts";
import { useState } from "react";
import {
  QuoteLikerLikeUnlikeButtonLayout,
  QuoteLikesCountLayout,
  QuoteLikerReadonlyButtonLayout,
} from "@/quote-liker/layouts";
import { Role } from "@/user/enums";
import { useSelector } from "react-redux";
import { I } from "@/global/components/components";

export const QuoteGridItemLayout = ({ item }: any) => {
  const { auth } = useSelector((state: any) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [opened, setOpened] = useState(false);
  const clipboard = useClipboard({ timeout: 50 });
  const [modalOpened, { open, close }] = useDisclosure(false);

  const pills = item.topicIds.map((topicId: any) => {
    return (
      <Pill
        key={topicId._id}
        bg={threeBg}
        onClick={() => handleNavigateToQuoteByTopic(topicId)}>
        {topicId.name}
      </Pill>
    );
  });

  const handleNavigateToQuote = () => {
    navigate(`/quotes/${item.id}`);
  };

  const handleNavigateToQuoteByAuthor = () => {
    dispatch(setPage(1));
    navigate(`/quotes/authorId/${item.authorId._id}?page=1`, {
      state: { name: item.authorId.name, aid: item.authorId._id },
    });
  };

  const handleNavigateToQuoteByTopic = (item: any) => {
    console.log(`/quotes/topicId/${item._id}?page=1`);
    dispatch(setPage(1));
    navigate(`/quotes/topicId/${item._id}?page=1`, {
      state: { name: item.name, tid: item._id },
    });
  };

  const handleModalOpen = () => {
    if (auth.role === Role.Public) {
      navigate("/sign-in");
      return;
    }

    open();
    dispatch(setQid(item.id));
  };

  const handleCopy = () => {
    clipboard.copy(`${item.content} - ${item.authorId.name}`);
    setOpened(true);
    setTimeout(() => setOpened(false), 1500);
  };

  return (
    <>
      <PlaylistModal opened={modalOpened} close={close} />

      <Stack p="xl" justify="center" align="center" px="md">
        <Text ta="center" onClick={handleNavigateToQuote}>
          {item.content}
        </Text>
        <Text ta="center" onClick={handleNavigateToQuoteByAuthor}>
          {item.authorId.name}
        </Text>

        {item.topicIds && item.topicIds.length > 0 && (
          <Group ta="center" justify="center">
            {pills}
          </Group>
        )}

        <Group>
          <Group gap={4}>
            {auth.role === Role.Public ? (
              <QuoteLikerReadonlyButtonLayout />
            ) : (
              <QuoteLikerLikeUnlikeButtonLayout qid={item.id} />
            )}

            <QuoteLikesCountLayout qid={item.id} />
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
    </>
  );
};
