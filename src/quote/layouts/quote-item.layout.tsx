import { quoteCardMaxWidth } from "@/global/styles/global.styles";
import { roundBorderStyle } from "@/global/styles/app.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PlaylistModal } from "@/playlist/layouts";
import { useClipboard, useDisclosure } from "@mantine/hooks";
import { setFilterObject, setPage, setQid } from "@/quote/quote.slice";
import {
  IconCopy,
  IconPlaylistAdd,
  IconCheck,
  IconDownload,
  IconShare,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Center,
  Group,
  Pill,
  Space,
  Stack,
  Text,
  Tooltip,
  Transition,
} from "@mantine/core";
import {
  QuoteLikerLikeUnlikeButton,
  QuoteLikesCountLayout,
  QuoteLikerReadonlyButton,
} from "@/quote-liker/layouts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Clearance, Role } from "@/user/enums";
import { CustomSkeleton, I } from "@/global/components/reusables";
import DesktopLeaderboard from "@/global/ads/DesktopLeaderboard";
import Banner320x50 from "@/global/ads/Banner320x50";
import { RootState } from "@/global/states/store";
import { globalUtility } from "@/global/utilities";
import { DownloadImageModal } from "./download-image.modal";
import { ShareModal } from "@/global/components/views";
import { ComponentOneOrTwoRoute } from "@/global/routes";

export const QuoteItemLayout = ({ quote, isPending }: any) => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [opened, setOpened] = useState(false);
  const clipboard = useClipboard({ timeout: 50 });
  const [mounted, setMounted] = useState<boolean>(false);

  const { isMobile, font, color } = useSelector(
    (state: RootState) => state.view
  );

  const [
    playlistModalOpened,
    { open: playlistModalOpen, close: playlistModalClose },
  ] = useDisclosure(false);

  const [
    downloadImageModalOpened,
    { open: downloadImageModalOpen, close: downloadImageModalClose },
  ] = useDisclosure(false);

  const [shareModalOpened, { open: shareModalOpen, close: shareModalClose }] =
    useDisclosure(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const handlePlaylistModalOpen = () => {
    if (auth.role === Role.Public) {
      navigate("/sign-in");
      return;
    }

    playlistModalOpen();
    dispatch(setQid(quote.id));
  };

  const handleCopy = () => {
    clipboard.copy(`${quote.content} - ${quote.authorId.name}`);
    setOpened(true);
    setTimeout(() => setOpened(false), 1500);
  };

  const handleDownloadImage = () => {
    downloadImageModalOpen();
  };

  const handleShare = () => {
    shareModalOpen();
  };

  const threeBgColor = globalUtility.getThreeBg(color);
  const url = `${import.meta.env.VITE_CLIENT_URL}/quotes/${quote?.id}`;
  const title = `Read this ${quote?.authorId?.name} quote at`;

  const pills = isPending ? (
    <></>
  ) : (
    quote.topicIds.map((topicId: any) => {
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
      <PlaylistModal opened={playlistModalOpened} close={playlistModalClose} />

      <ShareModal
        opened={shareModalOpened}
        close={shareModalClose}
        url={url}
        title={title}
      />

      <DownloadImageModal
        content={quote?.content}
        author={quote?.authorId?.name}
        opened={downloadImageModalOpened}
        close={downloadImageModalClose}
      />

      <Stack
        p="md"
        h="100%"
        align="center"
        justify="space-between"
        bg={
          isMobile
            ? globalUtility.getOneBg(color)
            : globalUtility.getTwoBg(color)
        }>
        <ComponentOneOrTwoRoute
          clearance={Clearance.LevelThree}
          compOne={<></>}
          compTwo={<Space h={isMobile ? 50 : 90} />}
        />

        <Stack
          bg={globalUtility.getOneBg(color)}
          className={`${roundBorderStyle}`}
          maw={quoteCardMaxWidth}
          gap="xl"
          p="xl"
          justify="center"
          align="center">
          <Transition
            mounted={mounted}
            transition="fade"
            duration={1500}
            timingFunction="ease">
            {(styles: any) => (
              <>
                {isPending ? (
                  <Stack gap={0} miw={350} align="center">
                    <CustomSkeleton w="100%" bgcolor={threeBgColor} />
                    <CustomSkeleton w="100%" bgcolor={threeBgColor} />
                    <CustomSkeleton w="100%" bgcolor={threeBgColor} />
                  </Stack>
                ) : (
                  <Text
                    c={globalUtility.getOneTx(color)}
                    style={{
                      ...styles,
                      ...globalUtility.getFont(font, isMobile),
                    }}
                    ta="center">
                    {quote.content}
                  </Text>
                )}

                {isPending ? (
                  <CustomSkeleton bgcolor={threeBgColor} />
                ) : (
                  <Text
                    style={{
                      ...styles,
                      ...globalUtility.getFont(font, isMobile),
                    }}
                    ta="center"
                    className={globalUtility.getThemeTxPseudoStyle(color)}
                    onClick={handleNavigateToQuoteByAuthor}>
                    {quote.authorId.name}
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
                    {quote.topicIds && quote.topicIds.length > 0 && (
                      <Group style={styles} ta="center" justify="center">
                        {pills}
                      </Group>
                    )}
                  </>
                )}

                <Group style={styles}>
                  <Group gap={4}>
                    {isPending ? (
                      <CustomSkeleton
                        v="circular"
                        w={20}
                        h={20}
                        bgcolor={threeBgColor}
                      />
                    ) : auth.role === Role.Public ? (
                      <QuoteLikerReadonlyButton />
                    ) : (
                      <QuoteLikerLikeUnlikeButton qid={quote.id} />
                    )}

                    {isPending ? (
                      <></>
                    ) : (
                      <QuoteLikesCountLayout qid={quote.id} />
                    )}
                  </Group>

                  {isPending ? (
                    <CustomSkeleton
                      v="circular"
                      w={20}
                      h={20}
                      bgcolor={threeBgColor}
                    />
                  ) : (
                    <ActionIcon
                      size="sm"
                      onClick={handlePlaylistModalOpen}
                      c={globalUtility.getOneTx(color)}>
                      <I I={IconPlaylistAdd} />
                    </ActionIcon>
                  )}

                  {isPending ? (
                    <CustomSkeleton
                      v="circular"
                      w={20}
                      h={20}
                      bgcolor={threeBgColor}
                    />
                  ) : (
                    <Tooltip
                      label="Copied!"
                      position="bottom"
                      opened={opened}
                      bg={globalUtility.getThreeBg(color)}
                      c={globalUtility.getOneTx(color)}>
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
                    <CustomSkeleton
                      v="circular"
                      w={20}
                      h={20}
                      bgcolor={threeBgColor}
                    />
                  ) : (
                    <ActionIcon
                      onClick={handleDownloadImage}
                      c={globalUtility.getOneTx(color)}>
                      <I I={IconDownload} />
                    </ActionIcon>
                  )}

                  {isPending ? (
                    <CustomSkeleton
                      v="circular"
                      w={20}
                      h={20}
                      bgcolor={threeBgColor}
                    />
                  ) : (
                    <ActionIcon
                      onClick={handleShare}
                      c={globalUtility.getOneTx(color)}>
                      <I I={IconShare} />
                    </ActionIcon>
                  )}
                </Group>
              </>
            )}
          </Transition>
        </Stack>

        <ComponentOneOrTwoRoute
          clearance={Clearance.LevelThree}
          compOne={<></>}
          compTwo={
            <Center p="md">
              <Stack h={isMobile ? 50 : 90}>
                {isMobile ? <Banner320x50 /> : <DesktopLeaderboard />}
              </Stack>
            </Center>
          }
        />
      </Stack>
    </>
  );
};
