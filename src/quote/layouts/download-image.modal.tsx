import {
  I,
  CustomEnumCombobox,
  CustomEnumScrollableCombobox,
} from "@/global/components/reusables";
import { Format, Preset } from "../enums";
import { saveAs } from "file-saver";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { globalUtility } from "@/global/utilities";
import {
  getDropdownStyles,
  modal,
  modalOverlayProps,
  wordBreakWhiteSpace,
} from "@/global/styles/global.styles";
import {
  ActionIcon,
  Button,
  Group,
  Modal,
  rgba,
  Space,
  Stack,
  Text,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import { toPng, toJpeg, toSvg } from "html-to-image";
import { IconDownload, IconInfoCircle, IconRefresh } from "@tabler/icons-react";
import { getImageValues } from "../data";
import { oneDefaultTx } from "@/global/styles/renamed.variables";
import {
  borderShadowStyle,
  noBorderStyle,
  roundBorderStyle,
} from "@/global/styles/app.css";

export const DownloadImageModal = ({ content, author, opened, close }: any) => {
  const captureRef = useRef<HTMLDivElement | any>(null);
  const [format, setFormat] = useState<Format>(Format.Png);
  const [preset, setPreset] = useState<Preset>(Preset.Original);
  const [isDownloading, setIsDownloading] = useState(false);
  const [refDimensions, setRefDimensions] = useState({ w: 0, h: 0 });
  const { colorScheme } = useMantineColorScheme();
  const { dropdownBg } = getDropdownStyles(colorScheme);

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

  const handleRefresh = () => {
    setFormat(Format.Png);
    setPreset(Preset.Original);
  };

  const handleClose = () => {
    close();
    handleRefresh();
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
            setRefDimensions={setRefDimensions}
          />
        </div>

        <Stack gap={4} align="start">
          <Group justify="space-between" w="100%">
            <Text fz="sm">Select Format</Text>

            {format !== Format.Png || preset !== Preset.Original ? (
              <ActionIcon aria-label="Refresh" onClick={handleRefresh}>
                <I I={IconRefresh} />
              </ActionIcon>
            ) : (
              <ActionIcon
                disabled
                aria-label="Refresh Disabled"
                c="transparent"
              />
            )}
          </Group>

          <CustomEnumCombobox
            id="format"
            EnumObject={Format}
            handleValue={handleFormat}
            data={Object.values(Format)}
            value={globalUtility.getKeyByValue(Format, format)}
          />
        </Stack>

        <Stack gap={4} align="start">
          <Group justify="space-between" w="100%">
            <Text fz="sm">Select Preset</Text>
            <Text fz="xs" c="dimmed">
              {`${refDimensions.w} x ${refDimensions.h} px`}
            </Text>
          </Group>

          <CustomEnumScrollableCombobox
            id="preset"
            EnumObject={Preset}
            handleValue={handlePreset}
            data={Object.values(Preset)}
            value={globalUtility.getKeyByValue(Preset, preset)}
          />
        </Stack>

        <Stack gap={4} align="end">
          <Group justify="center" align="center" gap={4}>
            <Tooltip
              c={oneDefaultTx}
              bg={dropdownBg}
              p="md"
              className={`${borderShadowStyle} ${roundBorderStyle}`}
              events={{ hover: true, focus: true, touch: true }}
              multiline
              maw={400}
              position="top-start"
              label={
                <div style={wordBreakWhiteSpace}>
                  Download may take upto 20 seconds due to font, color, and high
                  resolution image rendering.
                </div>
              }>
              <IconInfoCircle
                color="gray"
                size={16}
                className={`${noBorderStyle}`}
              />
            </Tooltip>

            <Text fz="xs" c="dimmed">
              Download may take time
            </Text>
          </Group>

          <Button
            fullWidth
            bg="green"
            onClick={() => handleDownload(format)}
            rightSection={<I I={IconDownload} size={16} />}
            disabled={isDownloading}
            loading={isDownloading}
            loaderProps={{ type: "dots" }}>
            Download
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
};

export const QuoteImage = ({
  captureRef,
  content,
  author,
  preset,
  setRefDimensions,
}: any) => {
  const { color, font, isMobile } = useSelector(
    (state: RootState) => state.view
  );

  useEffect(() => {
    if (captureRef.current) {
      setRefDimensions({
        w: captureRef.current.offsetWidth,
        h: captureRef.current.offsetHeight,
      });
    }
  }, [captureRef.current, preset]);

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
