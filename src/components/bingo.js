import React, { useState, useEffect } from "react";
import { numbers } from "./assets/bingo-numbers";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import SwipeableTemporaryDrawer from "./mat-nav";

function Bingo() {
  const [bingoNumbers, setBingoNumbers] = useState([]);
  let [count, setCount] = useState(0);
  const [currentValue, setCurrentValue] = useState("");
  const [calledNumbers, setCalledNumbers] = useState([1, 2, 3]);

  let displayNumbers = [];

  console.log("display:", calledNumbers, calledNumbers.reverse());

  useEffect(() => {
    shuffleNumbers(numbers);
    setBingoNumbers(numbers);
    document.title = "Bingo";
    console.log(bingoNumbers);
  }, [bingoNumbers]);

  useEffect(() => {
    setCurrentValue(bingoNumbers[count]);
  }, [count, bingoNumbers]);

  const shuffleNumbers = arr => {
    arr.sort(() => Math.random() - 0.5);
  };

  const callNext = e => {
    e.preventDefault();
    setCount(prevCount => prevCount + 1);
    // setCalledNumbers(oldNums => [...oldNums, bingoNumbers[count]]);
    setCalledNumbers(oldNums => [...oldNums, bingoNumbers[count]]);
    console.log("called", bingoNumbers[count]);
    displayNumbers = calledNumbers;
  };
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  console.log(displayNumbers);

  return (
    <>
      <SwipeableTemporaryDrawer title={"Bingo"}></SwipeableTemporaryDrawer>
      <Container>
        <p>{currentValue}</p>
        {displayNumbers.map(num => {
          console.log(num);
          return <p key={num}>{num}</p>;
        })}
        <Button variant="contained" color="primary" onClick={e => callNext(e)}>
          Next
        </Button>
      </Container>
    </>
  );
}

export default Bingo;
