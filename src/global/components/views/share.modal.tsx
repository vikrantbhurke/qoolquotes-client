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
import { TelegramShareButton, WhatsappShareButton } from "react-share";
import { TelegramIcon, WhatsappIcon, XIcon } from "react-share";

export const ShareModal = ({ opened, close, url, title }: any) => {
  const [tooltipOpened, setTooltipOpened] = useState(false);
  const clipboard = useClipboard({ timeout: 50 });

  const handleCopy = () => {
    clipboard.copy(url);
    setTooltipOpened(true);
    setTimeout(() => setTooltipOpened(false), 1500);
  };

  return (
    <Modal
      styles={modal}
      overlayProps={modalOverlayProps}
      opened={opened}
      onClose={close}
      centered
      title="Share">
      <Group gap="xs" align="center" justify="center">
        <Tooltip
          label="Link copied!"
          position="bottom"
          opened={tooltipOpened}
          bg={threeDefaultBg}
          c={oneDefaultTx}>
          {tooltipOpened ? (
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

        <WhatsappShareButton url={url} title={title} separator=" ">
          <WhatsappIcon size={24} round={true} />
        </WhatsappShareButton>

        <XShareButton url={url} title={title} />

        <TelegramShareButton url={url} title={title}>
          <TelegramIcon size={24} round={true} />
        </TelegramShareButton>
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
