import { AppShell } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useSelector } from "react-redux";
import { Header, Aside, Main, Footer, Navbar } from "./index";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setMainHeight, setMainWidth } from "@/global/states/view.slice";
import { getAppShell } from "@/global/styles/global.styles";
import { borderStyle, oneTxOneBg } from "@/global/styles/app.css";

export const Layout = () => {
  const dispatch = useDispatch();
  const mainRef = useRef<any>(null);
  const { width } = useViewportSize();

  const { headerHeight, footerHeight, navbarAsideWidth, responsiveBreakpoint } =
    useSelector((state: any) => state.view);

  const { navbar, aside, header, footer } = getAppShell(
    width,
    footerHeight,
    headerHeight,
    navbarAsideWidth,
    responsiveBreakpoint
  );

  useEffect(() => {
    dispatch(setMainWidth(mainRef.current.offsetWidth));
    dispatch(setMainHeight(mainRef.current.offsetHeight));
  }, [dispatch, mainRef]);

  return (
    <AppShell
      header={header}
      navbar={navbar}
      aside={aside}
      footer={footer}
      className={`${oneTxOneBg}`}
      p={0}>
      <AppShell.Header
        className={`${oneTxOneBg}`}
        style={{ borderBottom: borderStyle }}>
        <Header />
      </AppShell.Header>

      <AppShell.Navbar
        className={`${oneTxOneBg}`}
        style={{ borderRight: borderStyle }}>
        <Navbar />
      </AppShell.Navbar>

      <AppShell.Aside
        className={`${oneTxOneBg}`}
        style={{ borderLeft: borderStyle }}>
        <Aside />
      </AppShell.Aside>

      <AppShell.Main className={`${oneTxOneBg}`} ref={mainRef}>
        <Main />
      </AppShell.Main>

      <AppShell.Footer
        style={{ borderTop: borderStyle }}
        className={`${oneTxOneBg}`}
        hiddenFrom={responsiveBreakpoint}>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};
