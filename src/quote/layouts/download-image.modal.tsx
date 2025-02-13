import {
  I,
  CustomEnumCombobox,
  CustomEnumScrollableCombobox,
} from "@/global/components/reusables";
import { Format, Preset } from "../enums";
import { saveAs } from "file-saver";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { globalUtility } from "@/global/utilities";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { Button, Group, Modal, rgba, Space, Stack, Text } from "@mantine/core";
import { toPng, toJpeg, toSvg } from "html-to-image";
import { IconDownload } from "@tabler/icons-react";
import { getImageValues } from "../data";

export const DownloadImageModal = ({ content, author, opened, close }: any) => {
  const captureRef = useRef<HTMLDivElement | any>(null);
  const [format, setFormat] = useState<Format>(Format.Png);
  const [preset, setPreset] = useState<Preset>(Preset.Original);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (format: Format) => {
    if (!captureRef.current) return;
    setIsDownloading(true);

    try {
      let dataUrl: string;

      if (format === Format.Png) {
        dataUrl = await toPng(captureRef.current, { cacheBust: true });
      } else if (format === Format.Jpeg) {
        dataUrl = await toJpeg(captureRef.current, { quality: 0.95 });
      } else if (format === Format.Svg) {
        dataUrl = await toSvg(captureRef.current);
      } else {
        throw new Error("Unsupported format");
      }

      saveAs(dataUrl, `${preset.toLowerCase()}.${format.toLowerCase()}`);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleFormat = (format: Format) => setFormat(format);
  const handlePreset = (preset: Preset) => setPreset(preset);

  const handleClose = () => {
    close();
    setFormat(Format.Png);
    setPreset(Preset.Original);
  };

  return (
    <Modal
      // size="auto" - Takes the dimensions of the content
      styles={modal}
      overlayProps={modalOverlayProps}
      opened={opened}
      onClose={handleClose}
      centered
      title="Download Image">
      <Stack>
        {/* Render QuoteImage Component Off Screen */}

        <div
          style={{
            position: "absolute",
            left: "-9999px",
            top: "-9999px",
            width: 408,
          }}>
          <QuoteImage
            captureRef={captureRef}
            preset={preset}
            content={content}
            author={author}
          />
        </div>

        <Stack gap={4} align="start">
          <Text fz="sm">Select Format</Text>

          <CustomEnumCombobox
            id="format"
            EnumObject={Format}
            handleValue={handleFormat}
            data={Object.values(Format)}
            value={globalUtility.getKeyByValue(Format, format)}
          />
        </Stack>

        <Stack gap={4} align="start">
          <Text fz="sm">Select Preset</Text>

          <CustomEnumScrollableCombobox
            id="preset"
            EnumObject={Preset}
            handleValue={handlePreset}
            data={Object.values(Preset)}
            value={globalUtility.getKeyByValue(Preset, preset)}
          />
        </Stack>

        <Stack gap={4} align="end">
          <Text fz="xs" c="dimmed">
            Download may take upto 20 seconds
          </Text>
          <Button
            fullWidth
            bg="green"
            onClick={() => handleDownload(format)}
            rightSection={<I I={IconDownload} size={16} />}
            loading={isDownloading}
            loaderProps={{ type: "dots" }}>
            Download
          </Button>
        </Stack>
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
  const fontType = globalUtility.getFontType(font);
  const fontStyle = globalUtility.getFont(font, isMobile);
  const imageValues = getImageValues();

  let contentType: "smallContent" | "mediumContent" | "largeContent" =
    content.length < 130
      ? "smallContent"
      : content.length < 260
        ? "mediumContent"
        : "largeContent";

  if (preset !== Preset.Original) {
    const w = imageValues[preset].w;
    const h = imageValues[preset].h;
    const xs = imageValues[preset][fontType][contentType].xs;
    const md = imageValues[preset][fontType][contentType].md;
    const xl = imageValues[preset][fontType][contentType].xl;
    const fz = imageValues[preset][fontType][contentType].fz;
    const logoFz = imageValues[preset][fontType][contentType].logoFz;

    return (
      <Stack
        ref={captureRef}
        m={0}
        w={w}
        h={h}
        p={xs}
        gap={md}
        bg={oneBg}
        justify="space-between">
        <Space />

        <Stack p={xl} gap={md} align="center">
          <Text style={{ ...fontStyle, fontSize: fz }} ta="center" c={oneTx}>
            {content}
          </Text>

          <Text style={{ ...fontStyle, fontSize: fz }} c={oneTx}>
            {author}
          </Text>
        </Stack>

        <Group justify="end" w="100%">
          <Group gap={2} align="center">
            <Text
              c={rgba(globalUtility.getFiveTx(color), 0.5)}
              fz={logoFz}
              fs="italic">
              QoolQuotes.com
            </Text>
          </Group>
        </Group>
      </Stack>
    );
  }

  return (
    <Stack
      ref={captureRef}
      p="xs"
      m={0}
      gap="xl"
      bg={oneBg}
      justify="space-between">
      <Space />

      <Stack p="xl" gap="md" align="center">
        <Text style={fontStyle} ta="center" c={oneTx}>
          {content}
        </Text>

        <Text style={fontStyle} c={oneTx}>
          {author}
        </Text>
      </Stack>

      <Group justify="end" w="100%">
        <Group gap={2} align="center">
          <Text
            c={rgba(globalUtility.getFiveTx(color), 0.5)}
            fz={10}
            fs="italic">
            QoolQuotes.com
          </Text>
        </Group>
      </Group>
    </Stack>
  );
};
