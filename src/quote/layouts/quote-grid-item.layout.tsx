import {
  oneTx,
  threeBg,
  themeTxStyle,
  oneTxYellowBgPillPseudoStyle,
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
import { CustomSkeleton, I } from "@/global/components/reusables";
import { useClipboard, useDisclosure } from "@mantine/hooks";
import { setFilterObject, setPage, setQid } from "@/quote/quote.slice";
import { IconCheck, IconCopy, IconPlaylistAdd } from "@tabler/icons-react";
import { ActionIcon, Group, Pill, Stack, Text, Tooltip } from "@mantine/core";
import { RootState } from "@/global/states/store";
import { globalUtility } from "@/global/utilities";

export const QuoteGridItemLayout = ({ item }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [opened, setOpened] = useState(false);
  const clipboard = useClipboard({ timeout: 50 });
  const [modalOpened, { open, close }] = useDisclosure(false);
  const { isMobile, font } = useSelector((state: RootState) => state.view);

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

  const isPending = item.isPending;

  const pills = isPending ? (
    <></>
  ) : (
    item.topicIds.map((topicId: any) => {
      return (
        <Pill
          key={topicId._id}
          className={oneTxYellowBgPillPseudoStyle}
          onClick={() => handleNavigateToQuoteByTopic(topicId)}>
          {topicId.name}
        </Pill>
      );
    })
  );

  return (
    <>
      <PlaylistModal opened={modalOpened} close={close} />

      <Stack p="xl" justify="center" align="center" px="md">
        {isPending ? (
          <Stack gap={0} w="100%" align="center">
            <CustomSkeleton w="100%" />
            <CustomSkeleton w="100%" />
            <CustomSkeleton w="100%" />
          </Stack>
        ) : (
          <Text
            style={globalUtility.getFont(font, isMobile)}
            ta="center"
            onClick={handleNavigateToQuote}
            className={themeTxStyle}>
            {item.content}
          </Text>
        )}

        {isPending ? (
          <CustomSkeleton />
        ) : (
          <Text
            style={globalUtility.getFont(font, isMobile)}
            ta="center"
            onClick={handleNavigateToQuoteByAuthor}
            className={themeTxStyle}>
            {item.authorId.name}
          </Text>
        )}

        {isPending ? (
          <Group ta="center" justify="center">
            <CustomSkeleton w={40} h={35} />
            <CustomSkeleton w={40} h={35} />
            <CustomSkeleton w={40} h={35} />
          </Group>
        ) : (
          <>
            {item.topicIds && item.topicIds.length > 0 && (
              <Group ta="center" justify="center">
                {pills}
              </Group>
            )}
          </>
        )}

        <Group>
          <Group gap={4}>
            {isPending ? (
              <CustomSkeleton v="circular" w={20} h={20} />
            ) : auth.role === Role.Public ? (
              <QuoteLikerReadonlyButtonLayout />
            ) : (
              <QuoteLikerLikeUnlikeButtonLayout qid={item.id} />
            )}

            {isPending ? <></> : <QuoteLikesCountLayout qid={item.id} />}
          </Group>

          {isPending ? (
            <CustomSkeleton v="circular" w={20} h={20} />
          ) : (
            <ActionIcon size="sm" onClick={handleModalOpen}>
              <I I={IconPlaylistAdd} />
            </ActionIcon>
          )}

          {isPending ? (
            <CustomSkeleton v="circular" w={20} h={20} />
          ) : (
            <Tooltip
              label="Copied!"
              position="bottom"
              opened={opened}
              bg={threeBg}
              c={oneTx}>
              {opened ? (
                <ActionIcon c="teal" aria-label="Copy to clipboard">
                  <I I={IconCheck} color="teal" />
                </ActionIcon>
              ) : (
                <ActionIcon aria-label="Copy to clipboard" onClick={handleCopy}>
                  <I I={IconCopy} />
                </ActionIcon>
              )}
            </Tooltip>
          )}
        </Group>
      </Stack>
    </>
  );
};
