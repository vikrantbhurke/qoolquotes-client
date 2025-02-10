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
import { noBorderStyle } from "@/global/styles/app.css";
import { oneTxOneBgStyle } from "@/global/styles/one-tx-one-bg.css";
import { oneTxTwoBgStyle } from "@/global/styles/one-tx-two-bg.css";
import {
  useIsQuotePage,
  useViewInfo,
  // usePopunderAd
} from "@/global/hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { globalUtility } from "@/global/utilities";

export const AppLayout = () => {
  useViewInfo();
  const isQuotePage = useIsQuotePage();
  // usePopunderAd();
  // useSocialAd();

  const { isMobile, color } = useSelector((state: RootState) => state.view);
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
      className={`${isQuotePage ? globalUtility.getOneTxOneBgStyle(color) : oneTxOneBgStyle}`}
      p={0}>
      <AppShell.Header
        visibleFrom={responsiveBreakpoint}
        style={{ zIndex: 2 }}
        className={`${`${isQuotePage ? globalUtility.getOneTxTwoBgStyle(color) : oneTxTwoBgStyle} ${noBorderStyle}`}`}>
        <HeaderLayout opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Header
        hiddenFrom={responsiveBreakpoint}
        style={{ zIndex: 2 }}
        className={`${isQuotePage ? globalUtility.getOneTxOneBgStyle(color) : oneTxOneBgStyle} ${noBorderStyle}`}>
        <HeaderLayout opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar
        style={{ zIndex: 2 }}
        hiddenFrom={responsiveBreakpoint}
        className={`${isQuotePage ? globalUtility.getOneTxOneBgStyle(color) : oneTxOneBgStyle}`}>
        <NavbarMobileLayout toggle={toggle} />
      </AppShell.Navbar>

      <AppShell.Navbar
        visibleFrom={responsiveBreakpoint}
        className={`${isQuotePage ? globalUtility.getOneTxTwoBgStyle(color) : oneTxTwoBgStyle} ${noBorderStyle}`}>
        <NavbarDesktopLayout />
      </AppShell.Navbar>

      <AppShell.Aside
        className={`${isQuotePage ? globalUtility.getOneTxTwoBgStyle(color) : oneTxTwoBgStyle} ${noBorderStyle}`}>
        <AsideLayout />
      </AppShell.Aside>

      <AppShell.Main
        className={`${isQuotePage ? globalUtility.getOneTxOneBgStyle(color) : oneTxOneBgStyle}`}
        h="100vh">
        <MainLayout />
      </AppShell.Main>

      <AppShell.Footer
        style={{ zIndex: 2 }}
        className={`${noBorderStyle} ${isQuotePage ? globalUtility.getOneTxOneBgStyle(color) : oneTxOneBgStyle}`}
        hiddenFrom={responsiveBreakpoint}>
        <FooterLayout opened={opened} toggle={toggle} />
      </AppShell.Footer>
    </AppShell>
  );
};
