import { RootState } from "@/global/states/store";
import {
  ActionIcon,
  Button,
  Drawer,
  Group,
  Modal,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconCircle,
  IconCircleFilled,
  IconDownload,
  IconLetterA,
  IconLogin,
  IconLogout,
  IconMoon,
  IconSearch,
  IconStarFilled,
  IconSun,
} from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Search } from "./index";
import { useDispatch } from "react-redux";
import { setIsSearchbarVisible } from "@/global/states/view.slice";
import { useDisclosure } from "@mantine/hooks";
import {
  drawer,
  modal,
  modalOverlayProps,
} from "@/global/styles/global.styles";
import { oneTx } from "@/global/styles/app.css";

export const Header = () => {
  const [normalOpened, { open: normalOpen, close: normalClose }] =
    useDisclosure(false);

  const [fullOpened, { open: fullOpen, close: fullClose }] =
    useDisclosure(false);

  const [drawerOpened, { open: drawerOpen, close: drawerClose }] =
    useDisclosure(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isAuth] = useState(false);
  const [isTheme, setIsTheme] = useState(false);
  const [isZenMode] = useState(false);

  const { headerHeight, isSearchbarVisible } = useSelector(
    (state: RootState) => state.view
  );

  const handleNavigateToFeed = () => {
    navigate("/");
  };

  const handleNavigateToSignIn = () => {
    navigate("/sign-in");
  };

  const handleOpenSearchbar = () => {
    dispatch(setIsSearchbarVisible(true));
  };

  // const handleZenMode = () => {
  //   setIsZenMode(!isZenMode);
  // };

  const handleTheme = () => {
    setIsTheme(!isTheme);
  };

  return (
    <>
      {isSearchbarVisible ? (
        <Search />
      ) : (
        <Group h={headerHeight} px="md" justify="space-between" align="center">
          <NormalModal normalOpened={normalOpened} normalClose={normalClose} />
          <FullModal fullOpened={fullOpened} fullClose={fullClose} />
          <Drawer
            size="xs"
            styles={drawer}
            opened={drawerOpened}
            onClose={drawerClose}
            position="bottom"
            title="Authentication">
            This is a bottom up drawer.
          </Drawer>

          <Group gap="xs" onClick={handleNavigateToFeed} align="flex-start">
            <ActionIcon size="md" bg="transparent" c="#3be8d4">
              <IconStarFilled />
            </ActionIcon>

            <Title order={3}>{import.meta.env.VITE_APP_NAME}</Title>
          </Group>

          <Group gap="xs">
            <ActionIcon onClick={drawerOpen} bg="transparent" c={oneTx}>
              <IconDownload stroke={1.5} size={20} />
            </ActionIcon>

            <ActionIcon
              onClick={handleOpenSearchbar}
              bg="transparent"
              c={oneTx}>
              <IconSearch stroke={1.5} size={20} />
            </ActionIcon>

            <ActionIcon onClick={handleTheme} bg="transparent" c={oneTx}>
              {isTheme ? (
                <IconSun stroke={1.5} size={20} />
              ) : (
                <IconMoon stroke={1.5} size={20} />
              )}
            </ActionIcon>

            <ActionIcon onClick={normalOpen} bg="transparent" c={oneTx}>
              <IconLetterA stroke={1.5} size={20} />
            </ActionIcon>

            <ActionIcon onClick={fullOpen} bg="transparent" c={oneTx}>
              {isZenMode ? (
                <IconCircleFilled stroke={1.5} size={20} />
              ) : (
                <IconCircle stroke={1.5} size={20} />
              )}
            </ActionIcon>

            <ActionIcon
              onClick={handleNavigateToSignIn}
              bg="transparent"
              c={oneTx}>
              {isAuth ? (
                <IconLogin stroke={1.5} size={20} />
              ) : (
                <IconLogout stroke={1.5} size={20} />
              )}
            </ActionIcon>

            {/* <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom={responsiveBreakpoint}
            size="sm"
          /> */}
          </Group>
        </Group>
      )}
    </>
  );
};

const NormalModal = ({ normalOpened, normalClose }: any) => {
  return (
    <Modal
      styles={modal}
      overlayProps={modalOverlayProps}
      opened={normalOpened}
      onClose={normalClose}
      centered>
      <Stack align="center">
        <Text size="sm">Change font of the Quotes</Text>
        <Button
          fullWidth
          bg="white"
          c="black"
          radius="xl"
          onClick={() => {}}
          leftSection={<IconLetterA stroke={1.5} size={20} />}>
          Change Font
        </Button>
      </Stack>
    </Modal>
  );
};

const FullModal = ({ fullOpened, fullClose }: any) => {
  return (
    <Modal
      styles={modal}
      overlayProps={modalOverlayProps}
      opened={fullOpened}
      onClose={fullClose}
      fullScreen>
      <Stack align="center">
        <Text size="sm">This is a full screen modal</Text>
        <Button
          fullWidth
          bg="white"
          c="black"
          radius="xl"
          onClick={() => {}}
          leftSection={<IconLetterA stroke={1.5} size={20} />}>
          Change Font
        </Button>
      </Stack>
    </Modal>
  );
};
