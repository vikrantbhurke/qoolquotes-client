import { borderStyle, buttonPseudo } from "@/global/styles/app.css";
import {
  getMainAndContentGap,
  getMainContentHeight,
  subheaderButton,
} from "@/global/styles/global.styles";
import {
  Button,
  Container,
  Group,
  Radio,
  ScrollArea,
  Stack,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useState } from "react";
import { useSelector } from "react-redux";

export const PlaylistsPage = () => {
  const { width } = useViewportSize();
  const [value, setValue] = useState<string | null>(null);

  const {
    mainContentWidth,
    subheaderHeight,
    navbarAsideWidth,
    headerHeight,
    footerHeight,
    mainWidth,
    listButtonHeight,
  } = useSelector((state: any) => state.view);

  const cards = ["Community", "Saved", "Created"].map((item) => (
    <Button
      h={subheaderHeight}
      radius={0}
      style={subheaderButton(value === item)}
      onClick={() => setValue(item)}>
      {item}
    </Button>
  ));

  return (
    <Container size={mainContentWidth} p={0}>
      <Stack
        gap={0}
        style={getMainAndContentGap(
          mainWidth,
          navbarAsideWidth,
          mainContentWidth
        )}>
        <Radio.Group value={value} onChange={setValue}>
          <Group justify="center" gap={0} maw={mainContentWidth}>
            {cards}
          </Group>
        </Radio.Group>

        <ScrollArea
          h={getMainContentHeight(
            headerHeight,
            footerHeight,
            subheaderHeight,
            width
          )}>
          {Array.from({ length: 20 }).map((_, k) => (
            <Button
              key={k}
              fullWidth
              h={listButtonHeight}
              radius={0}
              className={buttonPseudo}
              style={{
                borderTop: k === 0 ? borderStyle : "none",
                borderBottom: k === 19 ? "none" : borderStyle,
              }}
              onClick={() => {}}>
              Community Playlist {k}
            </Button>
          ))}
        </ScrollArea>
      </Stack>
    </Container>
  );
};
