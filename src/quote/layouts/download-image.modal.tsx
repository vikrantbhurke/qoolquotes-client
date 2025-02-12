import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import { Format, Preset } from "../enums";
import { useSelector } from "react-redux";
import logo from "@/global/assets/pwa-64x64.png";
import { RootState } from "@/global/states/store";
import { globalUtility } from "@/global/utilities";
import {
  CustomEnumCombobox,
  CustomEnumScrollableCombobox,
} from "@/global/components/reusables";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { Button, Group, Image, Modal, Space, Stack, Text } from "@mantine/core";
import { socialMediaPresets } from "../data/social-media-sizes";

export const DownloadImageModal = ({ content, author, opened, close }: any) => {
  const captureRef = useRef<HTMLDivElement | any>(null);
  const [format, setFormat] = useState<Format>(Format.PNG);
  const [preset, setPreset] = useState<Preset>(Preset.Original);

  const handleDownload = async (format: Format) => {
    if (!captureRef.current) return;

    try {
      // Generate canvas with proper scaling
      const canvas = await html2canvas(captureRef.current, {
        useCORS: true, // Fixes cross-origin issues with images
      });

      // Convert to image format
      const dataUrl =
        format === Format.PNG
          ? canvas.toDataURL("image/png")
          : canvas.toDataURL("image/jpeg");

      saveAs(dataUrl, `${preset.toLowerCase()}.${format.toLowerCase()}`);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const handleFormat = (format: Format) => setFormat(format);
  const handlePreset = (preset: Preset) => setPreset(preset);

  const handleClose = () => {
    close();
    setPreset(Preset.Original);
    setFormat(Format.PNG);
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
        <QuoteImage
          captureRef={captureRef}
          content={content}
          author={author}
          preset={preset}
        />

        <CustomEnumScrollableCombobox
          id="preset"
          EnumObject={Preset}
          handleValue={handlePreset}
          data={Object.values(Preset)}
          value={globalUtility.getKeyByValue(Preset, preset)}
        />

        <CustomEnumCombobox
          id="format"
          EnumObject={Format}
          handleValue={handleFormat}
          data={Object.values(Format)}
          value={globalUtility.getKeyByValue(Format, format)}
        />

        <Button fullWidth bg="green" onClick={() => handleDownload(format)}>
          Download
        </Button>
      </Stack>
    </Modal>
  );
};

export const QuoteImage = ({ captureRef, content, author, preset }: any) => {
  const { color, font, isMobile } = useSelector(
    (state: RootState) => state.view
  );

  const oneTx = globalUtility.getOneTx(color);
  const oneBg = globalUtility.getOneBg(color);
  const fontStyle = globalUtility.getFont(font, isMobile);

  if (preset !== Preset.Original) {
    const { w, h, fz, imgw, pxl, pxs, gap } = socialMediaPresets[preset];

    return (
      <Stack
        ref={captureRef}
        p={pxs}
        bg={oneBg}
        justify="space-between"
        w={w}
        h={h}>
        <Space />

        <Stack p={pxl} pb={0} gap={gap} align="center">
          <Text style={fontStyle} ta="center" c={oneTx} fz={`${fz}rem`}>
            {content}
          </Text>
          <Text style={fontStyle} c={oneTx} fz={`${fz}rem`}>
            {author}
          </Text>
        </Stack>

        <Group justify="end" w="100%">
          <Image src={logo} alt="logo" w={imgw} />
        </Group>
      </Stack>
    );
  }

  return (
    <Stack ref={captureRef} p="xs" bg={oneBg} justify="space-between">
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
        <Image src={logo} alt="logo" w={32} />
      </Group>
    </Stack>
  );
};
