import React from "react";
import Header from "../components/header";
import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const LayOut = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <Box 
      as="main"
        bgGradient="linear(#68299A 100%, #0E67AB 0%, #902784 100%)"
        height={"100vh"}
        position="fixed"
        width={"100vw"}
      >
        <div>{children}</div>
      </Box>
    </div>
  );
};

export default LayOut;
