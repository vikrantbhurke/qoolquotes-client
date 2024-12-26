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
  borderLeft,
  borderRight,
  borderTop,
  oneTxOneBg,
  oneTxTwoBg,
  readexProFont,
} from "@/global/styles/app.css";
import { useIsMobile, usePopunderAd } from "@/global/hooks";

export const Layout = () => {
  usePopunderAd();
  // useSocialAd();
  const isMobile = useIsMobile();
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
      <AppShell.Header className={`${oneTxOneBg} ${borderBottom}`}>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar className={`${oneTxOneBg} ${borderRight}`}>
        <Navbar toggle={toggle} />
      </AppShell.Navbar>

      <AppShell.Aside className={`${oneTxOneBg} ${borderLeft}`}>
        <Aside />
      </AppShell.Aside>

      <AppShell.Main
        className={`${isMobile ? `${oneTxOneBg}` : `${oneTxTwoBg}`}`}
        h="100vh">
        <Main />
      </AppShell.Main>

      <AppShell.Footer
        className={`${oneTxOneBg} ${borderTop}`}
        hiddenFrom={responsiveBreakpoint}>
        <Footer opened={opened} toggle={toggle} />
      </AppShell.Footer>
    </AppShell>
  );
};
