import { Format } from "../enums";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { globalUtility } from "@/global/utilities";
import { CustomEnumCombobox } from "@/global/components/reusables";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { Button, Group, Modal, Space, Stack, Text } from "@mantine/core";

export const DownloadImageModal = ({ content, author, opened, close }: any) => {
  const captureRef = useRef<HTMLDivElement | any>(null);
  const [format, setFormat] = useState<Format>(Format.Png);

  const handleDownload = async (format: Format) => {
    if (!captureRef.current) return;

    try {
      const canvas = await html2canvas(captureRef.current, {
        useCORS: true,
      });

      const dataUrl =
        format === Format.Png
          ? canvas.toDataURL("image/png")
          : canvas.toDataURL("image/jpeg");

      saveAs(dataUrl, `quote.${format.toLowerCase()}`);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const handleFormat = (format: Format) => setFormat(format);

  const handleClose = () => {
    close();
    setFormat(Format.Png);
  };

  return (
    <Modal
      styles={modal}
      overlayProps={modalOverlayProps}
      opened={opened}
      onClose={handleClose}
      centered
      title="Download Image">
      <Stack>
        <QuoteImage captureRef={captureRef} content={content} author={author} />

        <Stack gap={4} align="center">
          <Text fz="sm">Select Format</Text>

          <CustomEnumCombobox
            id="format"
            EnumObject={Format}
            handleValue={handleFormat}
            data={Object.values(Format)}
            value={globalUtility.getKeyByValue(Format, format)}
          />
        </Stack>

        <Button fullWidth bg="green" onClick={() => handleDownload(format)}>
          Download
        </Button>
      </Stack>
    </Modal>
  );
};

export const QuoteImage = ({ captureRef, content, author }: any) => {
  const { color, font, isMobile } = useSelector(
    (state: RootState) => state.view
  );

  const oneTx = globalUtility.getOneTx(color);
  const oneBg = globalUtility.getOneBg(color);
  const fontStyle = globalUtility.getFont(font, isMobile);

  return (
    <Stack
      ref={captureRef}
      p="xs"
      m={0}
      gap="xl"
      bg={oneBg}
      justify="space-between">
      <Space />

      <Stack p="xl" pb={0} gap="md" align="center">
        <Text style={fontStyle} ta="center" c={oneTx} fz="1rem">
          {content}
        </Text>
        <Text style={fontStyle} c={oneTx} fz="1rem">
          {author}
        </Text>
      </Stack>

      <Group justify="end" w="100%">
        <Group gap={2} align="center">
          <Text c={globalUtility.getOneTx(color)} fz={10} fs="italic">
            QoolQuotes.com
          </Text>
        </Group>
      </Group>
    </Stack>
  );
};
