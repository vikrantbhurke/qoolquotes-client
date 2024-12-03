import {
  noBorder,
  threeBg,
  oneTxThreeBgButtonPseudo,
  oneBg,
} from "@/global/styles/app.css";
import { globalUtility } from "@/global/utilities";
import { Combobox, useCombobox, Button, Text, Stack } from "@mantine/core";

// Used for Sort & Order filters, and playlist Access field
// Sets Enum Value as value and Key as Display Label
export const CustomEnumCombobox = ({
  EnumObject,
  data,
  value,
  handleValue,
}: any) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = data.map((item: any) => (
    <Combobox.Option value={item} key={item} bg={threeBg} p="xs">
      <Text tt="capitalize" ta="center">
        {globalUtility.getKeyByValue(EnumObject, item)}
      </Text>
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(value) => {
        handleValue(value);
        combobox.closeDropdown();
      }}>
      <Combobox.Target>
        <Button
          fullWidth
          className={`${oneTxThreeBgButtonPseudo}`}
          radius="sm"
          onClick={() => combobox.openDropdown()}>
          {value}
        </Button>
      </Combobox.Target>

      <Combobox.Dropdown miw={120} className={noBorder} p={3} bg={oneBg}>
        <Combobox.Options>
          <Stack gap={3}>{options}</Stack>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
