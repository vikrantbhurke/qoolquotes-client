import { useEffect } from "react";
import { twoBg } from "../styles/renamed.variables";

export const useCustomScrollbar = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
          .custom-scrollbar {
            overflow-y: auto;
          }
    
          .custom-scrollbar::-webkit-scrollbar {
            width: 10px;
            background: ${twoBg};
          }
    
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: gray;
            border-radius: 5px; /* Ensures capsule shape */
            height: 20px; /* Adds a minimum height to the thumb */
          }
    
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: gray ${twoBg};
          }
        `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
};
