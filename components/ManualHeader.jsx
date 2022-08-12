import { useMoralis } from "react-moralis"
import { useEffect } from "react"

export default function ManualHeader() {
    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading} = useMoralis(); // hook

    useEffect(() => {
        if(isWeb3Enabled) return
        if(typeof window !== "undefined") {
            if(window.localStorage.getItem("connected")) {
                enableWeb3()
            }
        }
    }, [isWeb3Enabled]) // dependency list, any time this state changes useEffect runs

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("Null account found")
            }
        })
        // enableWeb3()
    }, [])

    return(<div>
        {account ? (<div>Connected to {account.slice(0,6)}...{account.slice(account.length - 4)}</div>) : 
            (<button onClick={async () => {
                    await enableWeb3()
                    if(typeof window !== "undefined") {
                        window.localStorage.setItem("connected", "injected") // adds new key-value pair to local browser storage (Application -> Local Storage)
                    }
                }}
                disabled = {isWeb3EnableLoading} // button is disabled if metmask is open (connection prompt already up)
            >
                Connect
            </button>)}        
    </div>)
}

