import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Header, Aside, Main, Footer, Navbar } from "./index";
import { useRef } from "react";
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
  readexProFont,
} from "@/global/styles/app.css";
import { useIsMobile } from "@/global/hooks";

export const Layout = () => {
  const isMobile = useIsMobile();
  const mainRef = useRef<any>(null);
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

      <AppShell.Main className={`${oneTxOneBg}`} ref={mainRef}>
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
