import { useDispatch } from "react-redux";
import { setQid } from "@/quote/quote.slice";
import { Modal, Stack, Text } from "@mantine/core";
import { GetPlaylistsByCreatorIdModalList } from "../lists";
import {
  modal,
  modalOverlayProps,
  textBold,
} from "@/global/styles/global.styles";
import { CreatePlaylistFormLayout } from "./create-playlist-form.layout";

export const PlaylistModal = ({ opened, close }: any) => {
  const dispatch = useDispatch();

  const handleModalClose = () => {
    close();
    dispatch(setQid(""));
  };

  return (
    <Modal
      styles={modal}
      overlayProps={modalOverlayProps}
      opened={opened}
      onClose={handleModalClose}
      centered>
      <Stack align="stretch" gap="xl">
        <CreatePlaylistFormLayout />

        <Stack gap="xs">
          <Text fz="sm" ta="center" fw={textBold}>
            Add or remove quote
          </Text>
          <GetPlaylistsByCreatorIdModalList />
        </Stack>
      </Stack>
    </Modal>
  );
};
