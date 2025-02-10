import { Color } from "@/global/enums";
import { RootState } from "@/global/states/store";
import { modal, modalOverlayProps } from "@/global/styles/global.styles";
import {
  ActionIcon,
  ColorSwatch,
  Group,
  Modal,
  Space,
  Stack,
} from "@mantine/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CustomEnumScrollableCombobox, I } from "../reusables";
import { globalUtility } from "@/global/utilities";
import { IconLetterA, IconRefresh } from "@tabler/icons-react";
import { resetColor, setColor } from "@/global/states/view.slice";
import { borderHCStyle } from "@/global/styles/app.css";

export const ColorModal = ({ opened, close }: any) => {
  const dispatch = useDispatch();
  const { color } = useSelector((state: RootState) => state.view);

  const handleColor = (color: Color) => {
    dispatch(setColor(color));
  };

  const handleRefresh = () => {
    dispatch(resetColor());
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

          <ColorSwatch
            color={globalUtility.getOneBg(color)}
            size={40}
            className={borderHCStyle}>
            <I I={IconLetterA} c={globalUtility.getOneTx(color)} />
          </ColorSwatch>

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
