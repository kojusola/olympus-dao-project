import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import LayOut from "../layout";
import { WagmiConfig, createClient } from "wagmi";
import { providers } from "ethers";

const nahmiiProvider = new providers.JsonRpcProvider(
  process.env.NEXT_PUBLIC_RPC,
  { name: "nahmii", chainId: 5553, ensAddress: undefined }
);

const client = createClient({
  autoConnect: true,
  provider: nahmiiProvider,
});


function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
    <ChakraProvider>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </ChakraProvider>
    </WagmiConfig>
  );
}

export default MyApp;
