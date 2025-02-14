import {
  oneDefaultTx,
  threeDefaultBg,
} from "@/global/styles/renamed.variables";
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
import {
  IconCheck,
  IconCopy,
  IconDownload,
  IconPlaylistAdd,
  IconShare,
} from "@tabler/icons-react";
import { ActionIcon, Group, Pill, Stack, Text, Tooltip } from "@mantine/core";
import { RootState } from "@/global/states/store";
import { globalUtility } from "@/global/utilities";
import { DownloadImageModal } from "./download-image.modal";
import { ShareModal } from "./share.modal";

export const QuoteGridItemLayout = ({ item }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [opened, setOpened] = useState(false);
  const clipboard = useClipboard({ timeout: 50 });

  const { isMobile, font, color } = useSelector(
    (state: RootState) => state.view
  );

  const [playlistModalOpened, { open: playlistOpen, close: playlistClose }] =
    useDisclosure(false);

  const [
    downloadImageModalOpened,
    { open: downloadImageOpen, close: downloadImageClose },
  ] = useDisclosure(false);

  const [shareModalOpened, { open: shareOpen, close: shareClose }] =
    useDisclosure(false);

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

    playlistOpen();
    dispatch(setQid(item.id));
  };

  const handleCopy = () => {
    clipboard.copy(`${item.content} - ${item.authorId.name}`);
    setOpened(true);
    setTimeout(() => setOpened(false), 1500);
  };

  const isPending = item.isPending;

  const threeBgColor = globalUtility.getThreeBg(color);

  const handleDownloadImage = () => {
    downloadImageOpen();
  };

  const handleShare = () => {
    shareOpen();
  };

  const pills = isPending ? (
    <></>
  ) : (
    item.topicIds.map((topicId: any) => {
      return (
        <Pill
          key={topicId._id}
          className={globalUtility.getOneTxThemeBgPillButtonPseudoStyle(color)}
          onClick={() => handleNavigateToQuoteByTopic(topicId)}>
          {topicId.name}
        </Pill>
      );
    })
  );

  return (
    <>
      <PlaylistModal opened={playlistModalOpened} close={playlistClose} />

      <ShareModal shareModalOpened={shareModalOpened} close={shareClose} />

      <DownloadImageModal
        content={item?.content}
        author={item?.authorId?.name}
        opened={downloadImageModalOpened}
        close={downloadImageClose}
      />

      <Stack p="xl" justify="center" align="center" px="md">
        {isPending ? (
          <Stack gap={0} w="100%" align="center">
            <CustomSkeleton w="100%" bgcolor={threeBgColor} />
            <CustomSkeleton w="100%" bgcolor={threeBgColor} />
            <CustomSkeleton w="100%" bgcolor={threeBgColor} />
          </Stack>
        ) : (
          <Text
            style={globalUtility.getFont(font, isMobile)}
            ta="center"
            onClick={handleNavigateToQuote}
            className={globalUtility.getThemeTxPseudoStyle(color)}>
            {item.content}
          </Text>
        )}

        {isPending ? (
          <CustomSkeleton bgcolor={threeBgColor} />
        ) : (
          <Text
            style={globalUtility.getFont(font, isMobile)}
            ta="center"
            onClick={handleNavigateToQuoteByAuthor}
            className={globalUtility.getThemeTxPseudoStyle(color)}>
            {item.authorId.name}
          </Text>
        )}

        {isPending ? (
          <Group ta="center" justify="center">
            <CustomSkeleton w={40} h={35} bgcolor={threeBgColor} />
            <CustomSkeleton w={40} h={35} bgcolor={threeBgColor} />
            <CustomSkeleton w={40} h={35} bgcolor={threeBgColor} />
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
              <CustomSkeleton
                v="circular"
                w={20}
                h={20}
                bgcolor={threeBgColor}
              />
            ) : auth.role === Role.Public ? (
              <QuoteLikerReadonlyButtonLayout />
            ) : (
              <QuoteLikerLikeUnlikeButtonLayout qid={item.id} />
            )}

            {isPending ? <></> : <QuoteLikesCountLayout qid={item.id} />}
          </Group>

          {isPending ? (
            <CustomSkeleton v="circular" w={20} h={20} bgcolor={threeBgColor} />
          ) : (
            <ActionIcon
              size="sm"
              onClick={handleModalOpen}
              c={globalUtility.getOneTx(color)}>
              <I I={IconPlaylistAdd} />
            </ActionIcon>
          )}

          {isPending ? (
            <CustomSkeleton v="circular" w={20} h={20} bgcolor={threeBgColor} />
          ) : (
            <Tooltip
              label="Copied!"
              position="bottom"
              opened={opened}
              bg={threeDefaultBg}
              c={oneDefaultTx}>
              {opened ? (
                <ActionIcon c="teal" aria-label="Copy to clipboard">
                  <I I={IconCheck} color="teal" />
                </ActionIcon>
              ) : (
                <ActionIcon
                  aria-label="Copy to clipboard"
                  onClick={handleCopy}
                  c={globalUtility.getOneTx(color)}>
                  <I I={IconCopy} />
                </ActionIcon>
              )}
            </Tooltip>
          )}

          {isPending ? (
            <CustomSkeleton v="circular" w={20} h={20} bgcolor={threeBgColor} />
          ) : (
            <ActionIcon
              onClick={handleDownloadImage}
              c={globalUtility.getOneTx(color)}>
              <I I={IconDownload} />
            </ActionIcon>
          )}

          {isPending ? (
            <CustomSkeleton v="circular" w={20} h={20} bgcolor={threeBgColor} />
          ) : (
            <ActionIcon onClick={handleShare} c={globalUtility.getOneTx(color)}>
              <I I={IconShare} />
            </ActionIcon>
          )}
        </Group>
      </Stack>
    </>
  );
};
