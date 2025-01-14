import { useRef } from "react";

const DesktopLeaderboard = () => {
  const bannerRef = useRef<any>();

  const atOptions = {
    key: "a5eeb880fd09b09d641e2a64013ceddc",
    format: "iframe",
    height: 90,
    width: 728,
    params: {},
  };

  if (bannerRef.current && !bannerRef.current.firstChild) {
    const confScript = document.createElement("script");
    const adScript = document.createElement("script");
    adScript.type = "text/javascript";
    adScript.src = `//www.disadvantageattached.com/${atOptions.key}/invoke.js`;
    confScript.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;
    bannerRef.current.appendChild(confScript);
    bannerRef.current.appendChild(adScript);
  }

  return <div ref={bannerRef} />;
};

export default DesktopLeaderboard;
