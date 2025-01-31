import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  HeaderLayout,
  AsideLayout,
  MainLayout,
  FooterLayout,
  NavbarMobileLayout,
  NavbarDesktopLayout,
} from "./index";
import {
  layoutCompHeight,
  getAppShellStyles,
  navbarAsideWidth,
  responsiveBreakpoint,
} from "@/global/styles/global.styles";
import {
  noBorderStyle,
  oneTxOneBgStyle,
  oneTxTwoBgStyle,
} from "@/global/styles/app.css";
import {
  useViewInfo,
  // usePopunderAd
} from "@/global/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const AppLayout = () => {
  // usePopunderAd();
  useViewInfo();
  // useSocialAd();

  const { isMobile } = useSelector((state: RootState) => state.view);
  const [opened, { toggle }] = useDisclosure();

  const { navbar, aside, header, footer } = getAppShellStyles(
    isMobile,
    layoutCompHeight,
    layoutCompHeight,
    navbarAsideWidth,
    opened
  );

  return (
    <AppShell
      header={header}
      navbar={navbar}
      aside={aside}
      footer={footer}
      className={`${oneTxOneBgStyle}`}
      p={0}>
      <AppShell.Header
        visibleFrom={responsiveBreakpoint}
        style={{ zIndex: 2 }}
        className={`${`${oneTxTwoBgStyle} ${noBorderStyle}`}`}>
        <HeaderLayout opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Header
        hiddenFrom={responsiveBreakpoint}
        style={{ zIndex: 2 }}
        className={`${oneTxOneBgStyle} ${noBorderStyle}`}>
        <HeaderLayout opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar
        hiddenFrom={responsiveBreakpoint}
        className={`${oneTxOneBgStyle}`}>
        <NavbarMobileLayout toggle={toggle} />
      </AppShell.Navbar>

      <AppShell.Navbar
        visibleFrom={responsiveBreakpoint}
        className={`${oneTxTwoBgStyle} ${noBorderStyle}`}>
        <NavbarDesktopLayout />
      </AppShell.Navbar>

      <AppShell.Aside className={`${oneTxTwoBgStyle} ${noBorderStyle}`}>
        <AsideLayout />
      </AppShell.Aside>

      <AppShell.Main className={`${oneTxOneBgStyle}`} h="100vh">
        <MainLayout />
      </AppShell.Main>

      <AppShell.Footer
        style={{ zIndex: 2 }}
        className={`${noBorderStyle} ${oneTxOneBgStyle}`}
        hiddenFrom={responsiveBreakpoint}>
        <FooterLayout opened={opened} toggle={toggle} />
      </AppShell.Footer>
    </AppShell>
  );
};
