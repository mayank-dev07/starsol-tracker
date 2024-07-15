import { PublicKey } from '@solana/web3.js';

export const truncatedPublicKey = (publicKey: string, length?: number) => {
  if (!publicKey) return;
  if (!length) {
    length = 3;
  }
  return publicKey.replace(publicKey.slice(length, 44 - length), '...');
};

export const truncatedPublicKeyForTransaction = (key: string, startLength = 4, endLength = 18) => {
    if (!key) return '';
    const totalLength = key.length;
    if (startLength + endLength >= totalLength) return key;
    return `${key.slice(0, startLength)}...${key.slice(totalLength - endLength)}`;
};