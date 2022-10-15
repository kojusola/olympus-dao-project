import { Button, Container } from "@chakra-ui/react";
import React, { useRef, MutableRefObject } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import useContract from "../hooks/useContract";

// uint _controlVariable,
// uint _vestingTerm,
// uint _minimumPrice,
// uint _maxPayout,
// uint _maxDebt,
// uint _initialDebt

function Init() {
  const { contract } = useContract();

  const controlvariable = useRef() as MutableRefObject<HTMLInputElement>;
  const vestingForm = useRef() as MutableRefObject<HTMLInputElement>;
  const minimumPrice = useRef() as MutableRefObject<HTMLInputElement>;
  const maxPay = useRef() as MutableRefObject<HTMLInputElement>;
  const maxDebt = useRef() as MutableRefObject<HTMLInputElement>;
  const initdebt = useRef() as MutableRefObject<HTMLInputElement>;

  const initBond = async () => {
    const cont = controlvariable.current.value;
    const ves = vestingForm.current.value;
    const min = minimumPrice.current.value;
    const max = maxPay.current.value;
    const maxD = maxDebt.current.value;
    const initD = initdebt.current.value;

    try {
        const out = await contract.initializeBond(cont, ves, min, max, maxD, initD)

        console.log(out)
    } catch (error) {
        
    }
  }

  return (
    <Container marginTop={"10rem"}>
      <FormControl>
        <FormLabel color={"white"}>Control Variable</FormLabel>
        <Input backgroundColor={"transparent"} color="white" ref={controlvariable} type="number" />
      </FormControl>
      <FormControl>
        <FormLabel color={"white"}>Vesting Term</FormLabel>
        <Input backgroundColor={"transparent"} color="white" ref={vestingForm} type="number" />
      </FormControl>
      <FormControl>
        <FormLabel color={"white"}>Minimum Price</FormLabel>
        <Input backgroundColor={"transparent"} color="white" ref={minimumPrice} type="number" />
      </FormControl>
      <FormControl>
        <FormLabel color={"white"}>Max Payout</FormLabel>
        <Input backgroundColor={"transparent"} color="white" ref={maxPay} type="number" />
      </FormControl>
      <FormControl>
        <FormLabel color={"white"}>Max Debt</FormLabel>
        <Input backgroundColor={"transparent"} color="white" ref={maxDebt} type="number" />
      </FormControl>
      <FormControl>
        <FormLabel color={"white"}>Initial Debt</FormLabel>
        <Input backgroundColor={"transparent"} color="white" ref={initdebt} type="number" />
      </FormControl>
      <Button width="100%" onClick={initBond} marginTop={"2rem"}>
        Init bond
      </Button>
    </Container>
  );
}

export default Init;
