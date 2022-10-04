import type { NextPage } from "next";
import * as Chakra from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Chakra.Text color="red">Hello World!!!</Chakra.Text>
    </div>
  );
};

export default Home;
