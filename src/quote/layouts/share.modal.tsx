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
  RedditShareButton,
  TelegramShareButton,
  ThreadsShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  RedditIcon,
  TelegramIcon,
  ThreadsIcon,
  WhatsappIcon,
  XIcon,
} from "react-share";

export const ShareModal = ({ shareModalOpened, close, id, title }: any) => {
  const [opened, setOpened] = useState(false);
  const clipboard = useClipboard({ timeout: 50 });

  const handleCopy = () => {
    clipboard.copy(`${title} http://localhost:5173/quotes/${id}`);
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

        <WhatsappShareButton
          url={`http://localhost:5173/quotes/${id}`}
          title={title}
          separator=" ">
          <WhatsappIcon size={24} round={true} />
        </WhatsappShareButton>

        <XShareButton
          url={`http://localhost:5173/quotes/${id}`}
          title={title}
        />

        <TelegramShareButton
          url={`http://localhost:5173/quotes/${id}`}
          title={title}>
          <TelegramIcon size={24} round={true} />
        </TelegramShareButton>

        <ThreadsShareButton
          url={`http://localhost:5173/quotes/${id}`}
          title={title}>
          <ThreadsIcon size={24} round={true} />
        </ThreadsShareButton>

        <RedditShareButton
          url={`http://localhost:5173/quotes/${id}`}
          title={title}>
          <RedditIcon size={24} round={true} />
        </RedditShareButton>
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
