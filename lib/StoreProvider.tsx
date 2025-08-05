"use client";

import { Provider } from "react-redux";
import { AppStore, Store } from "./store";
import { useRef } from "react";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = Store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};
