import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ActionIcon, Group, Modal, Space, Stack } from "@mantine/core";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { CustomEnumScrollableCombobox, I } from "@/global/components/reusables";
import { Font } from "@/global/enums";
import { globalUtility } from "@/global/utilities";
import { IconRefresh } from "@tabler/icons-react";
import { setFont } from "@/global/states/view.slice";
import { RootState } from "@/global/states/store";

export const FontModal = ({ opened, close }: any) => {
  const dispatch = useDispatch();
  const { font } = useSelector((state: RootState) => state.view);

  const handleFont = (font: Font) => {
    dispatch(setFont(font));
  };

  const handleRefresh = () => {
    dispatch(setFont(Font.Inter));
  };

  return (
    <Modal
      styles={modal}
      overlayProps={modalOverlayProps}
      opened={opened}
      onClose={close}
      centered
      title="Select Font">
      <Stack align="center" gap="xs">
        <Group justify="space-between" w="100%">
          <Space w="md" />

          {font !== Font.Inter ? (
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

        <CustomEnumScrollableCombobox
          id="font-modal"
          EnumObject={Font}
          label="Font"
          data={Object.values(Font)}
          handleValue={handleFont}
          value={globalUtility.getKeyByValue(Font, font)}
        />
      </Stack>
    </Modal>
  );
};
