import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";

import { FiClock } from "react-icons/fi";

type Props = {
  isOpen: boolean;
  onClose: boolean;
};

export function ModalBond({ isOpen, onOpen, onClose }: any) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent backgroundColor={"rgba(20, 26, 31, 0.88)"}>
          <ModalHeader textAlign={"center"} color={"white"}>
            ETH - MATIC BOND{" "}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody color={"white"}>
            <Box>
              <Box display={"flex"} justifyContent="space-between">
                <div>
                  <Text color="white">Bond Price</Text>
                  <Text color="white" textAlign={"center"}>
                    $10.08
                  </Text>
                </div>
                <div>
                  <Text color="white">Market Price</Text>
                  <Text color="white" textAlign={"center"}>
                    $10.08
                  </Text>
                </div>
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent="space-between"
              marginTop={"20px"}
            >
              <div>
                <Flex marginRight={"10px"}>
                  <div>
                    <img src="/eth.png" alt="logo" />
                  </div>
                  <div style={{ marginLeft: "10px" }}>
                    <img src="/polygon.png" alt="logo" />
                  </div>
                </Flex>
                <Text color={"white"}>You give</Text>
              </div>
              <div>
                <Text display={"flex"} justifyContent="center">
                  <FiClock/>
                </Text>
                <Text color={"white"} marginTop="10px">
                  Vested for over 7 days
                </Text>
              </div>

              <div>
                <div>
                  <img src="/polygon.png" alt="logo" />
                </div>
                <Text color="white">You get</Text>
              </div>
            </Box>

            <Box>
                <Button border={"1px solid #DC398C"} width="100%" marginTop={"20px"} marginBottom={"20px"} backgroundColor={"transparent"}>GET ETH-POLY</Button>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
