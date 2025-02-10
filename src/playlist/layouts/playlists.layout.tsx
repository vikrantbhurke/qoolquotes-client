import { roundTopBorderStyle } from "@/global/styles/app.css";
import { oneTxOneBgButtonPseudoStyle } from "@/global/styles/one-tx-one-bg-button-pseudo.css";
import { themeDefaultTxPseudoStyle } from "@/global/styles/theme-tx-pseudo.css";
import {
  oneDefaultBg,
  oneDefaultTx,
  twoDefaultBg,
} from "@/global/styles/renamed.variables";
import {
  layoutCompHeight,
  getPlaylistTabStyles,
  playlistLayoutWidth,
} from "@/global/styles/global.styles";
import {
  ActionIcon,
  Box,
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
import { ComponentOrFragmentRoute } from "@/global/routes";
import { Clearance } from "@/user/enums";
import { useRef, useState } from "react";
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
import { I } from "@/global/components/reusables";
import Banner320x50 from "@/global/ads/Banner320x50";
import { Order } from "@/global/enums";
import { Sort } from "../enums";
import { PlaylistsFilterModal } from "./playlists-filter.modal";
import { PlaylistsFilterDrawer } from "./playlists-filter.drawer";
import { setIsAdHeaderVisible } from "@/global/states/view.slice";
import { useIsComponentVisible } from "@/global/hooks";
import MobileLeaderboard from "@/global/ads/MobileLeaderboard";
import { RootState } from "@/global/states/store";

export const PlaylistsLayout = () => {
  const ref = useRef<HTMLDivElement>(null);
  useIsComponentVisible(ref, setIsAdHeaderVisible);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isMobile } = useSelector((state: RootState) => state.view);

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

  const { tab, sort, order } = useSelector(
    (state: RootState) => state.playlist
  );
  const { auth } = useSelector((state: RootState) => state.auth);

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
    <Box component="div" bg={twoDefaultBg}>
      <Container
        size={playlistLayoutWidth}
        p={0}
        h={`calc(100vh - ${layoutCompHeight}px - ${isMobile ? layoutCompHeight : 2}px)`}>
        <Stack gap={0} h="100%">
          <Radio.Group
            value={tab}
            bg={oneDefaultBg}
            className={`${!isMobile && roundTopBorderStyle}`}>
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

                <Text fz="sm" pt={3}>
                  {globalUtility.formatNumber(data.page)}/
                  {globalUtility.formatNumber(data.totalPages)} Page
                </Text>
              </Group>

              <Group gap={0} justify="center">
                <Button
                  h={layoutCompHeight}
                  className={`${themeDefaultTxPseudoStyle}`}
                  style={getPlaylistTabStyles(tab === "All")}
                  onClick={handleNavigateToPlaylists}>
                  All{" "}
                  {tab === "All" &&
                    `(${globalUtility.formatNumber(data.totalElements)})`}
                </Button>

                <ComponentOrFragmentRoute clearance={Clearance.LevelTwo}>
                  <Button
                    h={layoutCompHeight}
                    className={`${themeDefaultTxPseudoStyle}`}
                    style={getPlaylistTabStyles(tab === "Created")}
                    onClick={handleNavigateToCreatedPlaylists}>
                    Created{" "}
                    {tab === "Created" &&
                      `(${globalUtility.formatNumber(data.totalElements)})`}
                  </Button>

                  <Button
                    h={layoutCompHeight}
                    className={`${themeDefaultTxPseudoStyle}`}
                    style={getPlaylistTabStyles(tab === "Saved")}
                    onClick={handleNavigateToSavedPlaylists}>
                    Saved{" "}
                    {tab === "Saved" &&
                      `(${globalUtility.formatNumber(data.totalElements)})`}
                  </Button>
                </ComponentOrFragmentRoute>
              </Group>

              <Group gap="xs" justify="center">
                {tab === "Saved" && data.totalElements ? (
                  <ActionIcon onClick={openRemovePlaylist}>
                    <I I={IconTrash} color="crimson" />
                  </ActionIcon>
                ) : tab === "Created" && data.totalElements ? (
                  <ActionIcon onClick={openDeletePlaylist}>
                    <I I={IconTrash} color="crimson" />
                  </ActionIcon>
                ) : (
                  <Space w="xl" />
                )}

                <ActionIcon
                  h={layoutCompHeight}
                  c={isFilterApplied ? "green" : oneDefaultTx}
                  className={oneTxOneBgButtonPseudoStyle}
                  onClick={isMobile ? drawerOpen : modalOpen}>
                  {isFilterApplied ? (
                    <I I={IconFilterFilled} />
                  ) : (
                    <I I={IconFilter} />
                  )}
                </ActionIcon>
              </Group>
            </Group>

            <PlaylistsFilterDrawer opened={drawerOpened} close={drawerClose} />
            <PlaylistsFilterModal opened={modalOpened} close={modalClose} />
          </Radio.Group>

          <Center
            bg={oneDefaultBg}
            ref={ref}
            style={{
              zIndex: 1,
            }}>
            <Stack h={isMobile ? 50 : 90}>
              {isMobile ? <Banner320x50 /> : <MobileLeaderboard />}
            </Stack>
          </Center>

          <Outlet context={setData} />
        </Stack>
      </Container>
    </Box>
  );
};
