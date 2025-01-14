import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  HeaderLayout,
  AsideLayout,
  MainLayout,
  FooterLayout,
  NavbarLayout,
} from "./index";
import {
  footerHeight,
  getAppShell,
  headerHeight,
  navbarAsideWidth,
  responsiveBreakpoint,
} from "@/global/styles/global.styles";
import {
  borderBottom,
  borderBottomShadow,
  borderLeftShadow,
  borderRightShadow,
  borderTop,
  borderTopShadow,
  oneTxOneBg,
  readexProFont,
} from "@/global/styles/app.css";
import { useViewInfo, usePopunderAd } from "@/global/hooks";
import { useSelector } from "react-redux";

export const AppLayout = () => {
  usePopunderAd();
  useViewInfo();
  // useSocialAd();

  const { isMobile, isPaginationVisible, isAdHeaderVisible } = useSelector(
    (state: any) => state.view
  );
  const [opened, { toggle }] = useDisclosure();

  const { navbar, aside, header, footer } = getAppShell(
    isMobile,
    footerHeight,
    headerHeight,
    navbarAsideWidth,
    responsiveBreakpoint,
    opened
  );

  return (
    <AppShell
      header={header}
      navbar={navbar}
      aside={aside}
      footer={footer}
      className={`${oneTxOneBg} ${readexProFont}`}
      p={0}>
      <AppShell.Header
        style={{ zIndex: 2 }}
        className={`${oneTxOneBg} ${isAdHeaderVisible ? borderBottom : borderBottomShadow}`}>
        <HeaderLayout opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar className={`${oneTxOneBg} ${borderRightShadow}`}>
        <NavbarLayout toggle={toggle} />
      </AppShell.Navbar>

      <AppShell.Aside className={`${oneTxOneBg} ${borderLeftShadow}`}>
        <AsideLayout />
      </AppShell.Aside>

      <AppShell.Main className={`${oneTxOneBg}`} h="100vh">
        <MainLayout />
      </AppShell.Main>

      <AppShell.Footer
        style={{ zIndex: 2 }}
        className={`${oneTxOneBg} ${isMobile && isPaginationVisible ? borderTop : borderTopShadow}`}
        hiddenFrom={responsiveBreakpoint}>
        <FooterLayout opened={opened} toggle={toggle} />
      </AppShell.Footer>
    </AppShell>
  );
};
