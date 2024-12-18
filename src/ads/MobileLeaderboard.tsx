import { useRef } from "react";

const MobileLeaderboard = () => {
  const bannerRef = useRef<any>();

  const atOptions = {
    key: "ca233e5fc4d26504b4409f8a7b30095d",
    format: "iframe",
    height: 60,
    width: 468,
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

export default MobileLeaderboard;
