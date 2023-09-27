import { Web3Provider } from "@ethersproject/providers";
import { formatEther } from "ethers/utils";
import React, { useState, useEffect } from "react";

// Define the 'ethereum' property on the window object
declare global {
  interface Window {
    ethereum?: any;
  }
}

const useWalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [balance, setBalance] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      setLoading(true);
      try {
        // Request access to the user's Ethereum wallet with method eth_requestAccounts
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        // Get the connected wallet's address getAddress Method
        const address = await signer.getAddress();
        setWalletAddress(address);

        // Get the wallet's balance
        const balance = await signer.getBalance();
        setBalance(formatEther(balance.toString()));
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    } else {
      console.error("Metamask or Ethereum wallet not detected");
      setLoading(false);
    }
  };
  return {
    walletAddress,
    balance,
    error,
    loading,
    connectWallet,
  };
};

export default useWalletConnect;
