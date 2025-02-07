import { useEffect, useState } from "react";
import { useCountdownNextUpdate } from "../hooks/misc";
import { Affix, Text, Transition } from "@mantine/core";
import { roundBorderStyle, threeBg, twoBg } from "@/global/styles/app.css";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";

export const CountdownAffix = (refetch: any) => {
  const { nextTimeOfDay, countdown } = useCountdownNextUpdate(refetch);
  const [mounted, setMounted] = useState<boolean>(false);
  const { isMobile } = useSelector((state: RootState) => state.view);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Affix
      position={{ top: 60, left: "50%" }}
      style={{ transform: "translateX(-50%)" }}>
      <Transition
        mounted={mounted}
        transition="slide-down"
        duration={1000}
        enterDelay={1000}
        timingFunction="ease">
        {(styles: any) => (
          <Text
            style={styles}
            fz="xs"
            c="dimmed"
            bg={isMobile ? twoBg : threeBg}
            p="xs"
            className={roundBorderStyle}>
            Read {nextTimeOfDay} Quote in {countdown}
          </Text>
        )}
      </Transition>
    </Affix>
  );
};
