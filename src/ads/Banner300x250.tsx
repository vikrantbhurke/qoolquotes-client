import { useEffect, useRef, useState } from "react";

const getCounter = () => {
  let tmp = 0;
  return () => tmp++;
};

const counter = getCounter();

const Banner300x250 = () => {
  const [toShow, setToShow] = useState(false);
  let index = 0;
  const bannerRef = useRef<any>();

  useEffect(() => {
    index = counter();
    const timeout = index * 500;
    let timer = setTimeout(() => {
      setToShow(true);
      clearTimeout(timer);
    }, timeout);
  }, []);

  useEffect(() => {
    if (!toShow) {
      return;
    }

    const atOptions = {
      key: "0b2563b36e3ba4a74cff81a6977c0373",
      format: "iframe",
      height: 250,
      width: 300,
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
  }, [toShow]);

  return <div ref={bannerRef} />;
};

export default Banner300x250;
