import React from "react";
import { makeNum, shortenAddress } from "../utils/helper";
import {useAccount, useBalance, useConnect, useDisconnect} from "wagmi";
import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";






const  AuthButton = () => {
 const {disconnect} = useDisconnect()
  const {address} =  useAccount()
   const {data} = useBalance({
    addressOrName:address
   })

   const disconnectInjected = () =>{
    disconnect()
   }


  return (
      <Box cursor={"pointer"} onClick={disconnectInjected} backgroundColor={"transparent"} border="1px solid #f9f9f9" display={"flex"} justifyContent="center" alignItems={"center"} padding="0.75rem">
        <p>
          <Text color="white" marginRight={"15px"}>{shortenAddress(address as string)}</Text>
        </p>
        <p>
          <Text color="white">{`${(makeNum(data?.formatted as string))} ETH`}</Text>
        </p>
      </Box>
  );
}

export default AuthButton;