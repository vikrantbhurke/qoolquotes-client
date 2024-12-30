import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Header, Aside, Main, Footer, Navbar } from "./index";
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
  oneTxTwoBg,
  readexProFont,
} from "@/global/styles/app.css";
import { useIsMobile, usePopunderAd } from "@/global/hooks";
import { useSelector } from "react-redux";

export const Layout = () => {
  usePopunderAd();
  useIsMobile();
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
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar className={`${oneTxOneBg} ${borderRightShadow}`}>
        <Navbar toggle={toggle} />
      </AppShell.Navbar>

      <AppShell.Aside className={`${oneTxOneBg} ${borderLeftShadow}`}>
        <Aside />
      </AppShell.Aside>

      <AppShell.Main
        className={`${isMobile ? `${oneTxOneBg}` : `${oneTxTwoBg}`}`}
        h="100vh">
        <Main />
      </AppShell.Main>

      <AppShell.Footer
        style={{ zIndex: 2 }}
        className={`${oneTxOneBg} ${isMobile && isPaginationVisible ? borderTop : borderTopShadow}`}
        hiddenFrom={responsiveBreakpoint}>
        <Footer opened={opened} toggle={toggle} />
      </AppShell.Footer>
    </AppShell>
  );
};
