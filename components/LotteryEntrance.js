import { useEffect, useState } from "react";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddresses } from "../constants";
import { ethers } from "ethers";
import { useNotification } from "web3uikit"

export default function LotteryEntrance() {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis();
    const chainId = parseInt(chainIdHex);
    const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null;
    const [entranceFee, setEntranceFee] = useState("0"); // starting value 0, setEntranceFee is function used to update it

    const dispatch = useNotification();

    const { runContractFunction: enterRaffle } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "enterRaffle",
        params: {},
        msgValue: entranceFee,
    });

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getEntranceFee",
        params: {},
    });

    useEffect(() => {
        if (isWeb3Enabled) {
            async function updateUI() {
                const entranceFeeFromCall = (await getEntranceFee()).toString();
                setEntranceFee(entranceFeeFromCall);
            }
            updateUI();
        }
    }, [isWeb3Enabled])

    const handleSuccess = async function (tx) {
        await tx.wait(1);
        handleNewNotfication(tx);

    }

    const handleNewNotfication = function() {
        dispatch({
            type: "info",
            message: "Transaction Complete!",
            title: "Tx Notification",
            position: "topR",
            icon: "bell",
        })
    }

    return (
        <div>
            Hi from LotteryEntrance!
            { raffleAddress ? 
                <div>
                    <button onClick={async function(){
                        await enterRaffle({
                            onSuccess: handleSuccess,
                            onError: (error) => console.log(error),
                        });
                    }}>
                        Enter Raffle
                    </button>
                    Entrance Fee: {ethers.utils.formatUnits(entranceFee, "ether")} ETH</div> : 
                <div>No Raffle Adress detected!</div>}
        </div>
    )
}