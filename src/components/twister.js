import React, { useReducer, useCallback } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
import { spinReducer, initialState } from "../Reducers/twister-reducer";
import SwipeableTemporaryDrawer from "./mat-nav";

import {
  Container,
  ActionDiv,
  BodyPart,
  ButtonContainer,
  Button,
  ActionContainer,
  Word,
  LoadingContainer
} from "./../components/Styles/twisterStyles";

function Twister(props) {
  const [state, dispatch] = useReducer(spinReducer, initialState);

  const { bodyPart, color, nonColor, side, spinning } = state;

  React.useEffect(() => {
    document.title = "Twister";
  }, []);

  // Values for the spinner
  const bodyParts = ["🖐", "🦶"];
  const sides = ["LEFT", "RIGHT"];
  const colors = ["blue", "yellow", "red", "green", "AIR", "  SPINNER CHOOSES"];

  //For better readability in the spin function
  const delay = duration => {
    return new Promise(resolve => setTimeout(resolve, duration));
  };
  console.log("rendered");

  const startSpin = useCallback(
    e => {
      // spin(e, bodyParts, colors, sides);
      const spin = async (e, bodyParts, colors, sides) => {
        e.preventDefault();
        dispatch({ type: "spin" });

        const currentColor = colors[Math.floor(Math.random() * colors.length)];
        const currentBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
        const currentSide = sides[Math.floor(Math.random() * sides.length)];

        await delay(500);
        dispatch({ type: "setSide", payload: currentSide });
        await delay(500);
        dispatch({ type: "setBodyPart", payload: currentBodyPart });
        await delay(500);
        dispatch({ type: "setColor", payload: currentColor });
        if (currentColor === "AIR" || currentColor === "  SPINNER CHOOSES") {
          dispatch({ type: "setNonColor", payload: currentColor });
        }
        await delay(200);
        dispatch({ type: "stopSpinning" });
      };
      spin(e, bodyParts, colors, sides);
    },
    [bodyParts, colors, sides]
  );
  // this is here so the color can be taken from local state for the time being
  const Color = styled.div`
    border-radius: 50%;
    background-color: ${color};
    height: 100px;
    width: 100px;
    font-size: 30px;
    color: #347edd;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Container>
      <SwipeableTemporaryDrawer title={"Twister"}></SwipeableTemporaryDrawer>

      <ActionContainer>
        <ActionDiv>
          <Word>{side}</Word>
        </ActionDiv>
        <ActionDiv>
          <BodyPart>{bodyPart}</BodyPart>
        </ActionDiv>
        <ActionDiv>
          <Color>{nonColor}</Color>
        </ActionDiv>
      </ActionContainer>
      <ButtonContainer>
        <Button onClick={startSpin} disabled={spinning}>
          {spinning ? (
            <LoadingContainer>
              <ReactLoading type={"spin"} color="white" />
            </LoadingContainer>
          ) : (
            "Spin"
          )}
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default Twister;
