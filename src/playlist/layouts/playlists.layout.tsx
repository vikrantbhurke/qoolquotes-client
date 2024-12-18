import { borderBottom } from "@/global/styles/app.css";
import {
  footerHeight,
  getSubheaderButton,
  headerHeight,
  mainContentWidth,
  subheaderHeight,
} from "@/global/styles/global.styles";
import {
  Button,
  Center,
  Container,
  Group,
  Radio,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { setTab } from "../playlist.slice";
import { useDispatch } from "react-redux";
import { CompOrFragmentRoute } from "@/global/routes";
import { Clearance } from "@/user/enums";
import { useState } from "react";
import { setPage } from "@/playlist/playlist.slice";
import { IconFileDescription, IconTrash } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { DeletePlaylistsModalLayout } from "./delete-playlists-modal.layout";
import { RemovePlaylistsModalLayout } from "@/playlist-saver/layouts";
import { globalUtility } from "@/global/utilities";
import { I } from "@/global/components/components";
import { useIsMobile } from "@/global/hooks";
import DesktopLeaderboard from "@/ads/DesktopLeaderboard";
import MobileLeaderboard from "@/ads/MobileLeaderboard";

export const PlaylistsLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const [
    deletePlaylistOpened,
    { open: openDeletePlaylist, close: closeDeletePlaylist },
  ] = useDisclosure();

  const [
    removePlaylistsOpened,
    { open: openRemovePlaylist, close: closeRemovePlaylist },
  ] = useDisclosure();

  const { tab } = useSelector((state: any) => state.playlist);
  const { auth } = useSelector((state: any) => state.auth);

  const [data, setData] = useState<any>({
    page: 0,
    totalPages: 0,
    totalElements: 0,
  });

  const handleNavigateToPlaylists = () => {
    navigate("/playlists?page=1");
    dispatch(setTab("All"));
    dispatch(setPage(1));
  };

  const handleNavigateToCreatedPlaylists = () => {
    navigate(`/playlists/creatorId/${auth.id}?page=1`);
    dispatch(setTab("Created"));
    dispatch(setPage(1));
  };

  const handleNavigateToSavedPlaylists = () => {
    navigate(`/playlists/saverId/${auth.id}?page=1`);
    dispatch(setTab("Saved"));
    dispatch(setPage(1));
  };

  return (
    <Container
      size={mainContentWidth}
      p={0}
      h={`calc(100vh - ${headerHeight}px - ${isMobile ? footerHeight : 0}px)`}>
      <Stack gap={0} h="100%">
        <Radio.Group value={tab} className={borderBottom}>
          <DeletePlaylistsModalLayout
            opened={deletePlaylistOpened}
            close={closeDeletePlaylist}
          />

          <RemovePlaylistsModalLayout
            opened={removePlaylistsOpened}
            close={closeRemovePlaylist}
          />

          <Group justify="space-between" px="sm" gap={0}>
            <Group gap={3}>
              <I I={IconFileDescription} />

              <Text pt={3}>
                {globalUtility.formatNumber(data.page)}/
                {globalUtility.formatNumber(data.totalPages)} Page
              </Text>
            </Group>

            <Group gap={0} justify="center">
              <Button
                h={subheaderHeight}
                style={getSubheaderButton(tab === "All")}
                onClick={handleNavigateToPlaylists}>
                All{" "}
                {tab === "All" &&
                  `(${globalUtility.formatNumber(data.totalElements)})`}
              </Button>

              <CompOrFragmentRoute clearance={Clearance.LevelTwo}>
                <Button
                  h={subheaderHeight}
                  style={getSubheaderButton(tab === "Created")}
                  onClick={handleNavigateToCreatedPlaylists}>
                  Created{" "}
                  {tab === "Created" &&
                    `(${globalUtility.formatNumber(data.totalElements)})`}
                </Button>

                <Button
                  h={subheaderHeight}
                  style={getSubheaderButton(tab === "Saved")}
                  onClick={handleNavigateToSavedPlaylists}>
                  Saved{" "}
                  {tab === "Saved" &&
                    `(${globalUtility.formatNumber(data.totalElements)})`}
                </Button>
              </CompOrFragmentRoute>
            </Group>

            {tab === "Saved" && data.totalElements ? (
              <Group
                gap={3}
                justify="center"
                align="center"
                onClick={openRemovePlaylist}>
                <I I={IconTrash} color="crimson" />

                {isMobile ? (
                  <Space />
                ) : (
                  <Text pt={3} c="crimson">
                    Remove All
                  </Text>
                )}
              </Group>
            ) : tab === "Created" && data.totalElements ? (
              <Group
                gap={3}
                justify="center"
                align="center"
                onClick={openDeletePlaylist}>
                <I I={IconTrash} color="crimson" />

                {isMobile ? (
                  <Space />
                ) : (
                  <Text pt={3} c="crimson">
                    Delete All
                  </Text>
                )}
              </Group>
            ) : (
              <Space w="xl" />
            )}
          </Group>
        </Radio.Group>

        <Center p="md" className={borderBottom}>
          <Stack h={90}>
            {isMobile ? <MobileLeaderboard /> : <DesktopLeaderboard />}
          </Stack>
        </Center>

        <Outlet context={setData} />
      </Stack>
    </Container>
  );
};
