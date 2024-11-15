import { borderStyle, buttonPseudo, oneTx } from "@/global/styles/app.css";
import {
  getMainAndContentGap,
  getMainContentHeight,
} from "@/global/styles/global.styles";
import { Button, Container, ScrollArea, Tabs } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import {
  IconMessageCircle,
  IconPhoto,
  IconSettings,
} from "@tabler/icons-react";
import { useSelector } from "react-redux";

export const PlaylistsPage = () => {
  const { width } = useViewportSize();

  const {
    mainContentWidth,
    navbarAsideWidth,
    headerHeight,
    footerHeight,
    mainWidth,
    listButtonHeight,
    tabHeight,
  } = useSelector((state: any) => state.view);

  return (
    <Container size={mainContentWidth} p={0}>
      <Tabs
        radius={0}
        color={oneTx}
        defaultValue="gallery"
        style={getMainAndContentGap(
          mainWidth,
          navbarAsideWidth,
          mainContentWidth
        )}>
        <Tabs.List justify="center" h={50}>
          <Tabs.Tab
            value="gallery"
            leftSection={<IconPhoto stroke={1.5} size={20} />}>
            Community
          </Tabs.Tab>
          <Tabs.Tab
            value="messages"
            leftSection={<IconMessageCircle stroke={1.5} size={20} />}>
            Saved
          </Tabs.Tab>
          <Tabs.Tab
            value="settings"
            leftSection={<IconSettings stroke={1.5} size={20} />}>
            Created
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="gallery">
          <ScrollArea
            mih={getMainContentHeight(
              headerHeight,
              footerHeight,
              tabHeight,
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
                  borderBottom: k === 19 ? "none" : borderStyle,
                }}
                onClick={() => {}}>
                Community Playlist {k}
              </Button>
            ))}
          </ScrollArea>
        </Tabs.Panel>

        <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

        <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
      </Tabs>
    </Container>
  );
};
