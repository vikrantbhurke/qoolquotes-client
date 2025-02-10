import { useIsQuotePage } from "@/global/hooks";
import { RootState } from "@/global/states/store";
import { setFocusedInput } from "@/global/states/view.slice";
import { borderShadowStyle, noBorderStyle } from "@/global/styles/app.css";
import { oneTxThemeYellowBgMenuButtonPseudoStyle } from "@/global/styles/one-tx-theme-bg-menu-button-pseudo.css";
import {
  oneDefaultTx,
  threeDefaultBg,
} from "@/global/styles/renamed.variables";
import {
  getDropdownStyles,
  getComboboxTextInputForPaginationStyles,
} from "@/global/styles/global.styles";
import { globalUtility } from "@/global/utilities";
import {
  Combobox,
  ScrollArea,
  Stack,
  Text,
  TextInput,
  useCombobox,
  useMantineColorScheme,
} from "@mantine/core";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const CustomNumberCombobox = ({
  data,
  value,
  handleValue,
  id,
  totalPages,
}: any) => {
  const isQuotePage = useIsQuotePage();
  const ref = useRef<any>(null);
  const dispatch = useDispatch();
  const { colorScheme } = useMantineColorScheme();
  const { dropdownBg } = getDropdownStyles(colorScheme);
  const { color } = useSelector((state: RootState) => state.view);

  const handleFocus = (id: string) => dispatch(setFocusedInput(id));
  const handleBlur = () => dispatch(setFocusedInput(""));

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = data.map((item: any) => (
    <Combobox.Option
      p="xs"
      key={item}
      value={item}
      className={oneTxThemeYellowBgMenuButtonPseudoStyle}>
      <Text fz="sm" tt="capitalize" ta="center">
        {item}
      </Text>
    </Combobox.Option>
  ));

  const oneTxColor = isQuotePage ? globalUtility.getOneTx(color) : oneDefaultTx;
  const threeBgColor = isQuotePage
    ? globalUtility.getThreeBg(color)
    : threeDefaultBg;

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(value) => {
        handleValue(value);
        combobox.closeDropdown();
      }}>
      <Combobox.Target>
        <TextInput
          ref={ref}
          id={id}
          w={60}
          value={value}
          readOnly
          styles={getComboboxTextInputForPaginationStyles(
            oneTxColor,
            threeBgColor
          )}
          wrapperProps={{
            onFocus: () => handleFocus(id),
            onBlur: handleBlur,
          }}
          onClick={() => combobox.openDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown
        miw={60}
        className={`${noBorderStyle} ${borderShadowStyle}`}
        p={3}
        bg={dropdownBg}>
        <Combobox.Options>
          <ScrollArea
            h={totalPages === 1 ? 45 : totalPages === 2 ? 90 : 110}
            scrollbarSize={2}
            p={0}>
            <Stack gap={3}>{options}</Stack>
          </ScrollArea>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
