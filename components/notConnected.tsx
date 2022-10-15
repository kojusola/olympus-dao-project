import { Box, Stack, Text, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import { HiOutlineInformationCircle } from "react-icons/hi";

function NotConnected() {
  return (
    <div>
      <Stack width={"1000px"} display="flex" marginTop={"2rem"}>
        <Box
          as="div"
          borderRadius={"5px"}
          backgroundColor={"rgba(20, 26, 31, 0.51)"}
          width={"1000px"} height="200px" padding="1rem"
        >
          <HStack>
            <Box>
              <Heading fontSize="xl" color={"white"}>Exchange your LP</Heading>
              <Text mt={4} color="white">
                Exchange available LP tokens for governance tokens at below
                market rate Bonds.
              </Text>
            </Box>

            <Box>
              <Heading fontSize="xl" color={"white"}>Linear Vesting</Heading>
              <Text mt={4} color={"white"}>
                Once you receive a Bond, you are able to vest at any time within
                the vesting period.
              </Text>
            </Box>

            <Box>
              <Heading fontSize="xl" color={"white"}>Below-Market-Rate Discount</Heading>
              <Text mt={4} color={"white"}>
                To receive a below market rate swap, find your desired Bond with
                a positive discount rate.
              </Text>
            </Box>
          </HStack>
        </Box>
      </Stack>
    </div>
  );
}

export default NotConnected;
