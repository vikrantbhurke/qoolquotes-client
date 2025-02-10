import { useEffect, useState } from "react";
import { useCountdownNextUpdate } from "../hooks/misc";
import { Affix, Text, Transition } from "@mantine/core";
import { roundBorderStyle } from "@/global/styles/app.css";
import { useSelector } from "react-redux";
import { RootState } from "@/global/states/store";
import { globalUtility } from "@/global/utilities";

export const CountdownAffix = (refetch: any) => {
  const { nextTimeOfDay, countdown } = useCountdownNextUpdate(refetch);
  const [mounted, setMounted] = useState<boolean>(false);
  const { isMobile, color } = useSelector((state: RootState) => state.view);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Affix
      position={{ top: 60, left: "50%" }}
      style={{ transform: "translateX(-50%)", zIndex: 1 }}>
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
            c={globalUtility.getThreeTx(color)}
            bg={
              isMobile
                ? globalUtility.getTwoBg(color)
                : globalUtility.getThreeBg(color)
            }
            p="xs"
            className={roundBorderStyle}>
            Read {nextTimeOfDay} Quote in {countdown}
          </Text>
        )}
      </Transition>
    </Affix>
  );
};
