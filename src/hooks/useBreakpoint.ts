import { createContext, useContext } from "react";

const defaultValue = {};

export const BreakpointContext = createContext(defaultValue);

function useBreakpoint() {
  const context = useContext(BreakpointContext);
  if (context === defaultValue) {
    throw new Error("useBreakpoint must be used within BreakpointProvider");
  }
  return context;
}

export default useBreakpoint;
