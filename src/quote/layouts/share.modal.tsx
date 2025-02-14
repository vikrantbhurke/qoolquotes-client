import { I } from "@/global/components/reusables";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import {
  fiveDefaultBg,
  oneDefaultTx,
  threeDefaultBg,
} from "@/global/styles/renamed.variables";
import { ActionIcon, Group, Modal, Tooltip } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { IconCheck, IconLink } from "@tabler/icons-react";
import { useState } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  ThreadsShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  ThreadsIcon,
  WhatsappIcon,
  XIcon,
} from "react-share";

export const ShareModal = ({ shareModalOpened, close, url, title }: any) => {
  const [opened, setOpened] = useState(false);
  const clipboard = useClipboard({ timeout: 50 });

  const handleCopy = () => {
    clipboard.copy(url);
    setOpened(true);
    setTimeout(() => setOpened(false), 1500);
  };

  return (
    <Modal
      styles={modal}
      overlayProps={modalOverlayProps}
      opened={shareModalOpened}
      onClose={close}
      centered
      title="Share Quote">
      <Group gap="xs" align="center" justify="center">
        <Tooltip
          label="Link copied!"
          position="bottom"
          opened={opened}
          bg={threeDefaultBg}
          c={oneDefaultTx}>
          {opened ? (
            <ActionIcon
              size={24}
              mb={6}
              bg={fiveDefaultBg}
              radius="xl"
              c="teal"
              aria-label="Copy to clipboard">
              <I I={IconCheck} color="teal" />
            </ActionIcon>
          ) : (
            <ActionIcon
              size={24}
              mb={6}
              onClick={handleCopy}
              bg={fiveDefaultBg}
              radius="xl"
              c={oneDefaultTx}
              aria-label="Copy to clipboard">
              <I I={IconLink} />
            </ActionIcon>
          )}
        </Tooltip>

        <FacebookShareButton url={url} title={title} hashtag={"#quote"}>
          <FacebookIcon size={24} round />
        </FacebookShareButton>

        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={24} round={true} />
        </LinkedinShareButton>

        <WhatsappShareButton url={url} title={title} separator=" ">
          <WhatsappIcon size={24} round={true} />
        </WhatsappShareButton>
        <XShareButton url={url} title={title} />
        <TelegramShareButton url={url} title={title}>
          <TelegramIcon size={24} round={true} />
        </TelegramShareButton>
        <ThreadsShareButton url={url} title={title}>
          <ThreadsIcon size={24} round={true} />
        </ThreadsShareButton>
      </Group>
    </Modal>
  );
};

const XShareButton = ({ url, title }: { url: string; title: string }) => {
  const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    url
  )}&text=${encodeURIComponent(title)}`;

  return (
    <a href={shareUrl} target="_blank" rel="noopener noreferrer">
      <XIcon size={24} round />
    </a>
  );
};
