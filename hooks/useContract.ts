import * as wagmi from "wagmi";
import { useProvider, useSigner } from "wagmi";
import nftabi from "./abi/contract.json";
import { address } from "./constants";


const useContract = () => {
    const { data: signer } = useSigner();
    const provider = useProvider();
  
    const contract = wagmi.useContract({
      addressOrName: address,
      contractInterface: nftabi,
      signerOrProvider: signer || provider,
    });
    return {
      contract
    };
  };
  
  export default useContract;
