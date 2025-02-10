import { Color } from "@/global/enums";
import { RootState } from "@/global/states/store";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import { ActionIcon, Group, Modal, Space, Stack } from "@mantine/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CustomEnumScrollableCombobox, I } from "../reusables";
import { globalUtility } from "@/global/utilities";
import { IconRefresh } from "@tabler/icons-react";
import { setColor } from "@/global/states/view.slice";

export const ColorModal = ({ opened, close }: any) => {
  const dispatch = useDispatch();
  const { color } = useSelector((state: RootState) => state.view);

  const handleColor = (color: Color) => {
    dispatch(setColor(color));
  };

  const handleRefresh = () => {
    dispatch(setColor(Color.Default));
  };

  return (
    <Modal
      styles={modal}
      overlayProps={modalOverlayProps}
      opened={opened}
      onClose={close}
      centered
      title="Select Color">
      <Stack align="center" gap="xs">
        <Group justify="space-between" w="100%">
          <Space w="md" />

          {color !== Color.Default ? (
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
          id="color-modal"
          EnumObject={Color}
          label="Color"
          data={Object.values(Color)}
          handleValue={handleColor}
          value={globalUtility.getKeyByValue(Color, color)}
        />
      </Stack>
    </Modal>
  );
};
