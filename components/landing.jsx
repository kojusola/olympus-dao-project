import { Container, Text, Stack,Box } from "@chakra-ui/react";
import Details from "./details";
/*
font-weight: 400;
font-size: 20px;
line-height: 24px



*/
function Landing() {
  return (
       <Container maxW={"5xl"} marginTop="10rem">
      <Stack>
        <Text color={"white"} textAlign="center" fontSize={"40px"} lineHeight="48px" fontWeight={"600"}>Nahmii Bond</Text>
        <Text color={"white"} textAlign="center" fontSize={"20px"} lineHeight="24px" fontWeight={"400"}>Raise Liquidity For your projects with ease</Text>
      </Stack>
      <Details/>
    </Container>

  );
}

export default Landing;
