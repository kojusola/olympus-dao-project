import {
  Box,
  Button,
  VStack,
  Text,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";

import { useAccount, useConnect, useNetwork } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
const AuthButton = dynamic(() => import("../components/connectedButton"), {
  ssr: false,
});

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { connect, error } = useConnect({ connector: new InjectedConnector() });
  const { isConnected, address } = useAccount();
  const { chain } = useNetwork();


const metamask = () =>{
  connect()
  onClose()
}

  return (
    <header>
      <Box
        as="div"
        bgGradient="linear(to-r, #DC398C, #902784)"
        display={"flex"}
        justifyContent="space-between"
        padding={"1rem"}
      >
        <Box as="div" display={"flex"} alignItems="center">
          <div>
            <img src="/nahmi.png" alt="nahmi_logo" />
          </div>
          <Box as="div" marginLeft={"1rem"}>
            <Text
              fontSize={"20px"}
              fontWeight={"800"}
              lineHeight={"24px"}
              color={"#FFE7E7"}
            >
              Nahmii
            </Text>
          </Box>
        </Box>
      {isConnected?  <AuthButton/> : <Button onClick={onOpen}>Connect wallet</Button>  }
      
      </Box>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <VStack>
                <Box as="button" marginBottom={"5px"} cursor="pointer" onClick={metamask}>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "15px",
                      }}
                    >
                      <Image
                        boxSize="100px"
                        objectFit="cover"
                        src="/metamask.png"
                        alt="metamask"
                      />
                    </div>
                    <Text
                      fontSize={"20px"}
                      fontWeight="bold"
                      textAlign={"center"}
                    >
                      Metamask
                    </Text>
                    <Text
                      fontSize={"20px"}
                      textAlign={"center"}
                      color="#968B8B"
                    >
                      Connect with your Metamask
                    </Text>
                  </div>
                </Box>

              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </header>
  );
}

export default Header;
