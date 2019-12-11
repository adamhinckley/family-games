import React, { useState, useEffect } from "react";
import { numbers } from "./assets/bingo-numbers";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import SwipeableTemporaryDrawer from "./mat-nav";

function Bingo() {
  const [bingoNumbers, setBingoNumbers] = useState([]);
  let [count, setCount] = useState(0);
  const [currentValue, setCurrentValue] = useState("");
  const [calledNumbers, setCalledNumbers] = useState([]);
  const [ready, setReady] = useState(false);
  const [b, setB] = useState([]);
  const [i, setI] = useState([]);
  const [n, setN] = useState([]);
  const [g, setG] = useState([]);
  const [o, setO] = useState([]);

  let displayNumbers = [];

  useEffect(() => {
    shuffleNumbers(numbers);
    setBingoNumbers(numbers);
    setReady(true);
    document.title = "Bingo";
    bingoNumbers.unshift("Ready?");
    bingoNumbers.push("Finished");
  }, [bingoNumbers]);

  useEffect(() => {
    setCurrentValue(bingoNumbers[count]);
  }, [count, bingoNumbers]);

  const shuffleNumbers = arr => {
    arr.sort(() => Math.random() - 0.5);
  };

  const startOver = () => {
    document.location.reload(true);
  };

  const callNext = e => {
    e.preventDefault();
    if (bingoNumbers[count] !== "Finished") {
      setReady(false);
      setCount(prevCount => prevCount + 1);
      setCalledNumbers(oldNums => [...oldNums, bingoNumbers[count]]);
      if (bingoNumbers[count].charAt(0) === "B") {
        setB(oldNums => [...oldNums, bingoNumbers[count].slice(2, 4)]);
      } else if (bingoNumbers[count].charAt(0) === "I") {
        setI(oldNums => [...oldNums, bingoNumbers[count].slice(2, 4)]);
      } else if (bingoNumbers[count].charAt(0) === "N") {
        setN(oldNums => [...oldNums, bingoNumbers[count].slice(2, 4)]);
      } else if (bingoNumbers[count].charAt(0) === "G") {
        setG(oldNums => [...oldNums, bingoNumbers[count].slice(2, 4)]);
      } else if (bingoNumbers[count].charAt(0) === "O") {
        setO(oldNums => [...oldNums, bingoNumbers[count].slice(2, 4)]);
      }
    }
    displayNumbers = calledNumbers;
  };
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const BingoContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const LetterContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px 0 20px;
    /* justify-content: center; */
    align-items: center;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 250px;
  `;

  return (
    <>
      <SwipeableTemporaryDrawer title={"Bingo"}></SwipeableTemporaryDrawer>
      <Container>
        <h1>{currentValue}</h1>
        {displayNumbers.map(num => {
          return <p key={num}>{num}</p>;
        })}
        <ButtonContainer>
          <Button
            style={{ display: "hidden" }}
            variant="contained"
            color="primary"
            onClick={e => startOver(e)}
          >
            Start Over
          </Button>
          <Button variant="contained" color="primary" onClick={e => callNext(e)}>
            {ready ? "START" : "NEXT"}
          </Button>
        </ButtonContainer>
        <BingoContainer>
          <LetterContainer>
            <h1>B</h1>
            {b.map((num, i) => {
              return <p key={i}>{num}</p>;
            })}
          </LetterContainer>
          <LetterContainer>
            <h1>I</h1>
            {i.map((num, i) => {
              return <p key={i}>{num}</p>;
            })}
          </LetterContainer>
          <LetterContainer>
            <h1>N</h1>
            {n.map((num, i) => {
              return <p key={i}>{num}</p>;
            })}
          </LetterContainer>
          <LetterContainer>
            <h1>G</h1>
            {g.map((num, i) => {
              return <p key={i}>{num}</p>;
            })}
          </LetterContainer>
          <LetterContainer>
            <h1>O</h1>
            {o.map((num, i) => {
              return <p key={i}>{num}</p>;
            })}
          </LetterContainer>
        </BingoContainer>
      </Container>
    </>
  );
}

export default Bingo;
