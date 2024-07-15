"use client";
import React, {
  createContext,
  useContext,
  useMemo,
  useEffect,
  useState,
} from "react";
import { SystemProgram } from "@solana/web3.js";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";

const anchor = require("@project-serum/anchor");

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();

  return (
    <AppContext.Provider value={{ connection, wallet }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
