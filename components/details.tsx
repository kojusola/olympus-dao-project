import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { useAccount } from "wagmi";
import Connected from "./connected";
import NotConnected from "./notConnected";

function DetailsHeader() {
  const { isConnected } = useAccount();
  return (
    <div>
      <Stack marginTop={"5rem"}>
        <Box
          as="div"
          display={"flex"}
          justifyContent="space-around"
          padding="20px"
          borderRadius={"10px"}
          bgGradient="linear-gradient(90.53deg, #DC398C 0.28%, #00A3DE 77.64%)"
        >
          <Text color={"white"}>Bonds</Text>
          <Text color={"white"}>Payout</Text>
          <Text color="white" display={"flex"} alignItems="center">
            Discount <HiOutlineInformationCircle />
          </Text>
          <Text color="white" display={"flex"} alignItems="center">
            TBV
            <HiOutlineInformationCircle data-tip="Helo" />
          </Text>
        </Box>
      </Stack>

      {isConnected ? <Connected /> : <NotConnected />}
    </div>
  );
}

export default DetailsHeader;
