import React, { useState, useEffect } from "react";
import { numbers } from "./assets/bingo-numbers";
import Navigation from "./navigation";

function Bingo() {
  const [bingoNumbers, setBingoNumbers] = useState([]);

  useEffect(() => {
    shuffleNumbers(numbers);
    setBingoNumbers(numbers);
    document.title = "Bingo";
  }, []);

  const shuffleNumbers = arr => {
    arr.sort(() => Math.random() - 0.5);
  };

  console.log(bingoNumbers);
  return (
    <div>
      <Navigation title={"Bingo"} />

      {/* {shuffleNumbers(bingoNumbers)} */}
      {bingoNumbers[1]}
    </div>
  );
}

export default Bingo;
