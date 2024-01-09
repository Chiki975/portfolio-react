import { useState, useEffect } from "react";

const useHeaderVisibility = () => {
  const [isHeaderVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    let timer;

    const hideHeader = () => {
      setHeaderVisible(false);
    };

    const showHeader = () => {
      setHeaderVisible(true);
      timer = setTimeout(hideHeader, 5000);
    };

    const handleUserInteraction = () => {
      clearTimeout(timer);
      showHeader();
    };

    window.addEventListener("scroll", handleUserInteraction);
    window.addEventListener("click", handleUserInteraction);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleUserInteraction);
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return isHeaderVisible;
};

export default useHeaderVisibility;
