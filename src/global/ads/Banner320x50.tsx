import { useRef } from "react";

const Banner320x50 = () => {
  const bannerRef = useRef<any>();

  const atOptions = {
    key: "38be052fd763d67a6037c4953db9c9a6",
    format: "iframe",
    height: 50,
    width: 320,
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

export default Banner320x50;
