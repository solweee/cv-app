import {useEffect, useRef} from "react";
import Isotope from "isotope-layout";

export const useIsotopeLayout = (filterKey) => {
  const isotope = useRef();

  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows",
    });
    return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    filterKey === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);
};
