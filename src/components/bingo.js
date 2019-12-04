import React, { useState, useEffect } from "react";
import { numbers } from "./assets/bingo-numbers";

function Bingo() {
  const [bingoNumbers, setBingoNumbers] = useState([]);

  useEffect(() => {
    shuffleNumbers(numbers);
    setBingoNumbers(numbers);
  }, [bingoNumbers]);

  const shuffleNumbers = arr => {
    arr.sort(() => Math.random() - 0.5);
  };

  console.log(bingoNumbers);
  return (
    <div>
      {/* {shuffleNumbers(bingoNumbers)} */}
      {bingoNumbers[1]}
    </div>
  );
}

export default Bingo;
