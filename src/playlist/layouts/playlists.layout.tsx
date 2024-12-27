import { oneBg, oneTx, oneTxOneBgButtonPseudo } from "@/global/styles/app.css";
import {
  footerHeight,
  getBottomRoundBorders,
  getSubheaderButton,
  getSubheadersStyles,
  headerHeight,
  mainContentWidth,
  subheaderHeight,
} from "@/global/styles/global.styles";
import {
  ActionIcon,
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
import {
  IconFileDescription,
  IconFilter,
  IconFilterFilled,
  IconTrash,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { DeletePlaylistsModalLayout } from "./delete-playlists-modal.layout";
import { RemovePlaylistsModalLayout } from "@/playlist-saver/layouts";
import { globalUtility } from "@/global/utilities";
import { I } from "@/global/components/components";
import DesktopLeaderboard from "@/ads/DesktopLeaderboard";
import Banner320x50 from "@/ads/Banner320x50";
import { Order } from "@/global/enums";
import { Sort } from "../enums";
import { PlaylistsFilterModal } from "./playlists-filter.modal";
import { PlaylistsFilterDrawer } from "./playlists-filter.drawer";

export const PlaylistsLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isMobile } = useSelector((state: any) => state.view);

  const [
    deletePlaylistOpened,
    { open: openDeletePlaylist, close: closeDeletePlaylist },
  ] = useDisclosure();

  const [
    removePlaylistsOpened,
    { open: openRemovePlaylist, close: closeRemovePlaylist },
  ] = useDisclosure();

  const [drawerOpened, { open: drawerOpen, close: drawerClose }] =
    useDisclosure(false);

  const [modalOpened, { open: modalOpen, close: modalClose }] =
    useDisclosure(false);

  const { tab, sort, order } = useSelector((state: any) => state.playlist);
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

  const isFilterApplied = order !== Order.Descending || sort !== Sort.Date;

  return (
    <Container
      size={mainContentWidth}
      p={0}
      h={`calc(100vh - ${headerHeight}px - ${isMobile ? footerHeight : 0}px)`}>
      <Stack gap={0} h="100%">
        <Radio.Group
          value={tab}
          bg={oneBg}
          style={{
            ...getSubheadersStyles(isMobile),
          }}>
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

            <Group gap={0} justify="center">
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

              {isMobile ? (
                <ActionIcon
                  h={subheaderHeight}
                  c={isFilterApplied ? "green" : oneTx}
                  className={oneTxOneBgButtonPseudo}
                  onClick={isMobile ? drawerOpen : modalOpen}>
                  {isFilterApplied ? (
                    <I I={IconFilterFilled} />
                  ) : (
                    <I I={IconFilter} />
                  )}
                </ActionIcon>
              ) : (
                <Button
                  radius={0}
                  h={subheaderHeight}
                  c={isFilterApplied ? "green" : oneTx}
                  className={oneTxOneBgButtonPseudo}
                  onClick={isMobile ? drawerOpen : modalOpen}
                  leftSection={
                    isFilterApplied ? (
                      <I I={IconFilterFilled} />
                    ) : (
                      <I I={IconFilter} />
                    )
                  }>
                  Filter
                </Button>
              )}
            </Group>
          </Group>

          <PlaylistsFilterDrawer opened={drawerOpened} close={drawerClose} />
          <PlaylistsFilterModal opened={modalOpened} close={modalClose} />
        </Radio.Group>

        <Center
          bg={oneBg}
          style={{
            ...getSubheadersStyles(isMobile),
            ...getBottomRoundBorders(isMobile),
          }}>
          <Stack h={isMobile ? 50 : 90}>
            {isMobile ? <Banner320x50 /> : <DesktopLeaderboard />}
          </Stack>
        </Center>

        <Outlet context={setData} />
      </Stack>
    </Container>
  );
};
