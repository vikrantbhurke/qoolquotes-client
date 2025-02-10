import { RootState } from "@/global/states/store";
import { borderShadowStyle, noBorderStyle } from "@/global/styles/app.css";
import { oneTx, themeGreenColor } from "@/global/styles/renamed.variables";
import {
  oneTxThemeGreenBgMenuButtonPseudoStyle,
  oneTxThemeYellowBgMenuButtonPseudoStyle,
} from "@/global/styles/one-tx-theme-bg-menu-button-pseudo.css";
import {
  Avatar,
  Burger,
  Menu,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getDropdownStyles,
  responsiveBreakpoint,
} from "@/global/styles/global.styles";
import { useInstallApp, useIsQuotePage } from "@/global/hooks";
import {
  IconDownload,
  IconInfoCircle,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";
import { I } from "../reusables";
import { ContactModal } from "../views";
import { ComponentOrFragmentRoute } from "@/global/routes";
import { Clearance } from "@/user/enums";
import { globalUtility } from "@/global/utilities";

export const MenuLayout = () => {
  const isQuotePage = useIsQuotePage();
  const navigate = useNavigate();
  const { installPrompt, isInstalled, handleInstallClick } = useInstallApp();
  const { auth } = useSelector((state: RootState) => state.auth);
  const { color } = useSelector((state: RootState) => state.view);
  const [opened, { open, close }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme();
  const { dropdownBg } = getDropdownStyles(colorScheme);

  const handleNavigateToUser = () => {
    navigate(`/users/${auth.id}`);
  };

  const handleNavigateToAbout = () => {
    navigate("/about");
  };

  const handleContact = () => {
    open();
  };

  return (
    <>
      <ContactModal opened={opened} close={close} />

      <Menu shadow="md" width={200}>
        {auth.id ? (
          <Menu.Target>
            {auth.profilepic ? (
              <Avatar
                src={auth.profilepic}
                visibleFrom={responsiveBreakpoint}
              />
            ) : (
              <Avatar
                visibleFrom={responsiveBreakpoint}
                color={isQuotePage ? globalUtility.getOneTx(color) : oneTx}>
                {auth.firstname[0]}
                {auth.lastname[0]}
              </Avatar>
            )}
          </Menu.Target>
        ) : (
          <Menu.Target>
            <Burger size="sm" visibleFrom={responsiveBreakpoint} />
          </Menu.Target>
        )}

        <Menu.Dropdown
          bg={dropdownBg}
          className={`${noBorderStyle} ${borderShadowStyle}`}>
          {!isInstalled && installPrompt && (
            <Menu.Item
              onClick={handleInstallClick}
              p="xs"
              c={themeGreenColor}
              className={oneTxThemeGreenBgMenuButtonPseudoStyle}
              leftSection={<I I={IconDownload} />}
              hiddenFrom={responsiveBreakpoint}>
              <Text fz="sm" c={themeGreenColor}>
                Install App
              </Text>
            </Menu.Item>
          )}

          <ComponentOrFragmentRoute clearance={Clearance.LevelTwo}>
            <Menu.Item
              onClick={handleNavigateToUser}
              p="xs"
              className={oneTxThemeYellowBgMenuButtonPseudoStyle}
              leftSection={<I I={IconUser} />}>
              <Text fz="sm">Profile</Text>
            </Menu.Item>
          </ComponentOrFragmentRoute>

          <Menu.Item
            onClick={handleNavigateToAbout}
            p="xs"
            className={oneTxThemeYellowBgMenuButtonPseudoStyle}
            leftSection={<I I={IconInfoCircle} />}>
            <Text fz="sm">About</Text>
          </Menu.Item>

          <Menu.Item
            onClick={handleContact}
            p="xs"
            className={oneTxThemeYellowBgMenuButtonPseudoStyle}
            leftSection={<I I={IconMessage} />}>
            <Text fz="sm">Contact</Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};
