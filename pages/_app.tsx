import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import LayOut from "../layout";
import { WagmiConfig, createClient } from "wagmi";
import { providers } from "ethers";

const nahmiiProvider = new providers.JsonRpcProvider(
  "https://ngeth.n3g0.nahmii.net/",
  { name: "nahmii", chainId: 5554, ensAddress: undefined }
);

const client = createClient({
  autoConnect: true,
  provider: nahmiiProvider,
});


function MyApp({ Component, pageProps }: AppProps) {
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
