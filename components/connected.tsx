import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import useContract from "../hooks/useContract";
import { ModalBond } from "./modal";

function Connected() {
  const {contract} =  useContract()
  console.log(contract)
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      as="div"
      borderRadius={"5px"}
      height="400px"
      padding={"10px"}
      backgroundColor={"rgba(20, 26, 31, 0.51)"}
    >
      <Box>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <Box display="flex" alignItems="center">
            <Flex marginRight={"10px"}>
              <div>
                <img src="/eth.png" alt="logo" />
              </div>
              <div style={{marginLeft:"10px"}}>
                <img src="/polygon.png" alt="logo" />
              </div>
            </Flex>

            <Text color="white">ETH - MATIC</Text>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <div>
              <img src="/polygon.png" alt="logo" />
            </div>
            <Box marginLeft={"10px"}>
            <Text color={"white"}>$ 0.815</Text>
            <Text color={"white"}>$ 0.815 (Market)</Text>
            </Box>
          </Box>
          <Box>
            <Text color={"white"}>7.18%</Text>
          </Box>
          <div style={{display:"flex", alignItems:"center"}}>
          <Box marginRight={"3rem"}>
            <Text color="white" alignItems={"center"}>$239,546</Text>
          </Box>
          <Button onClick={onOpen} >Bond</Button>
        </div>
        </div>
          {isOpen && <ModalBond isOpen={isOpen} onClose={onClose}/>}
      </Box>
    </Box>
  );
}

export default Connected;
