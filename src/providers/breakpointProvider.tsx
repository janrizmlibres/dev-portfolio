import React, { useState, useEffect } from "react";

import { BreakpointContext } from "../hooks/useBreakpoint";

interface Params {
  children: React.ReactNode;
  queries: Record<string, string>;
}

const BreakpointProvider = ({ children, queries }: Params) => {
  const [queryMatch, setQueryMatch] = useState({});

  useEffect(() => {
    const mediaQueryLists: Record<string, MediaQueryList> = {};
    const keys = Object.keys(queries);
    let isAttached = false;

    const handleQueryListener = () => {
      const updatedMatches = keys.reduce<Record<string, boolean>>(
        (acc, media) => {
          acc[media] = !!(
            mediaQueryLists[media] && mediaQueryLists[media].matches
          );
          return acc;
        },
        {}
      );
      setQueryMatch(updatedMatches);
    };

    if (window && window.matchMedia) {
      const matches: Record<string, boolean> = {};
      keys.forEach((media) => {
        if (typeof queries[media] === "string") {
          mediaQueryLists[media] = window.matchMedia(queries[media]);
          matches[media] = mediaQueryLists[media].matches;
        } else {
          matches[media] = false;
        }
      });
      setQueryMatch(matches);
      isAttached = true;
      keys.forEach((media) => {
        if (typeof queries[media] === "string") {
          mediaQueryLists[media].addListener(handleQueryListener);
        }
      });
    }

    return () => {
      if (isAttached) {
        keys.forEach((media) => {
          if (typeof queries[media] === "string") {
            mediaQueryLists[media].removeListener(handleQueryListener);
          }
        });
      }
    };
  }, [queries]);

  return (
    <BreakpointContext.Provider value={queryMatch}>
      {children}
    </BreakpointContext.Provider>
  );
};

export default BreakpointProvider;
