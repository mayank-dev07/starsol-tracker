import create from "zustand";

interface WalletState {
  publicKey: string | null;
  setPublicKey: (publicKey: string | null) => void;
  walletAddress: string | null;
  setWalletAddress: (walletAddress: string | null) => void;
  show: boolean;
  setShow: (show: boolean) => void;
  value: string | null;
  setValue: (value: string | null) => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  publicKey: null,
  setPublicKey: (publicKey) => set({ publicKey }),
  walletAddress: null,
  setWalletAddress: (walletAddress) => set({ walletAddress }),
  show: false,
  setShow: (show) => set({ show }),
  value: null,
  setValue: (value) => set({ value }),
}));
