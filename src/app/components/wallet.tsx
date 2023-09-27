"use client";
import useWalletConnect from "../../../hooks/ethers";

export default function Wallet() {
  //created a custom hook called useuseWalletConnect to abtract the logic so this component only render the ui
  //extract the values and function needed for the ui from the hook
  //balance of the current connected user {string}
  //connectWallet function the trigger the coonection the wallet using ether js {function}
  //error errors encountered during connection {object}
  //walletAddress  wallet address of the current connected user {string}
  //loading state to showing there is an ongoing request{boolean}
  const { balance, connectWallet, error, walletAddress, loading } =
    useWalletConnect();

  return (
    <div className="m-5  bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 relative flex flex-col gap-2 text-center">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Connect Wallet</h3>

      <p className="absolute top-0 left-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
        1
      </p>

      {!walletAddress ? (
        <h1 className="mt-4  text-gray-800 text-2xl font-bold">
          No wallet Conneted
        </h1>
      ) : (
        <>
          <span className=" text-gray-800  font-bold text-2xl  rounded-xl p-2">
            Balance : {balance}
          </span>
          <span className="bg-black text-white rounded-xl p-2">
            {walletAddress}
          </span>
        </>
      )}

      <div className="my-4">
        <button
          disabled={loading}
          onClick={connectWallet}
          className="mt-4 text-xl w-full text-white bg-indigo-600 p-2 rounded-xl shadow-lg hover:opacity-75"
        >
          {loading ? "loading ...." : "Connect"}
        </button>
      </div>
    </div>
  );
}
