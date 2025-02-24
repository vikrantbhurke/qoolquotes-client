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
import { oneDefaultTxOneDefaultBgStyle } from "@/global/styles/one-tx-one-bg.css";
import { oneDefaultTxTwoDefaultBgStyle } from "@/global/styles/one-tx-two-bg.css";
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

  const oneTxOneBgStyles = isQuotePage
    ? globalUtility.getOneTxOneBgStyle(color)
    : oneDefaultTxOneDefaultBgStyle;

  const oneTxTwoBgStyles = isQuotePage
    ? globalUtility.getOneTxTwoBgStyle(color)
    : oneDefaultTxTwoDefaultBgStyle;

  return (
    <AppShell
      header={header}
      navbar={navbar}
      aside={aside}
      footer={footer}
      className={`${oneTxOneBgStyles}`}
      p={0}>
      <AppShell.Header
        visibleFrom={responsiveBreakpoint}
        style={{ zIndex: 2 }}
        className={`${`${oneTxTwoBgStyles} ${noBorderStyle}`}`}>
        <HeaderLayout opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Header
        hiddenFrom={responsiveBreakpoint}
        style={{ zIndex: 2 }}
        className={`${oneTxOneBgStyles} ${noBorderStyle}`}>
        <HeaderLayout opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar
        style={{ zIndex: 2 }}
        hiddenFrom={responsiveBreakpoint}
        className={oneTxOneBgStyles}>
        <NavbarMobileLayout toggle={toggle} />
      </AppShell.Navbar>

      <AppShell.Navbar
        visibleFrom={responsiveBreakpoint}
        className={`${oneTxTwoBgStyles} ${noBorderStyle}`}>
        <NavbarDesktopLayout />
      </AppShell.Navbar>

      <AppShell.Aside className={`${oneTxTwoBgStyles} ${noBorderStyle}`}>
        <AsideLayout />
      </AppShell.Aside>

      <AppShell.Main className={oneTxOneBgStyles} h="100vh">
        <MainLayout />
      </AppShell.Main>

      <AppShell.Footer
        style={{ zIndex: 2 }}
        className={`${noBorderStyle} ${oneTxOneBgStyles}`}
        hiddenFrom={responsiveBreakpoint}>
        <FooterLayout opened={opened} toggle={toggle} />
      </AppShell.Footer>
    </AppShell>
  );
};
