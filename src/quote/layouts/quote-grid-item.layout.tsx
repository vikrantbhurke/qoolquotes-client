import {
  oneTx,
  threeBg,
  borderLowContrastColor,
} from "@/global/styles/app.css";
import {
  QuoteLikesCountLayout,
  QuoteLikerReadonlyButtonLayout,
  QuoteLikerLikeUnlikeButtonLayout,
} from "@/quote-liker/layouts";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Role } from "@/user/enums";
import { useSelector } from "react-redux";
import { PlaylistModal } from "@/playlist/layouts";
import { I } from "@/global/components/components";
import { useClipboard, useDisclosure } from "@mantine/hooks";
import { setFilterObject, setPage, setQid } from "@/quote/quote.slice";
import { IconCheck, IconCopy, IconPlaylistAdd } from "@tabler/icons-react";
import { ActionIcon, Group, Pill, Stack, Text, Tooltip } from "@mantine/core";

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
        bg={borderLowContrastColor}
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

    dispatch(
      setFilterObject({ name: item.authorId.name, id: item.authorId._id })
    );

    navigate(`/quotes/authorId/${item.authorId._id}?page=1`);
  };

  const handleNavigateToQuoteByTopic = (item: any) => {
    dispatch(setPage(1));
    dispatch(setFilterObject({ name: item.name, id: item._id }));
    navigate(`/quotes/topicId/${item._id}?page=1`);
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
