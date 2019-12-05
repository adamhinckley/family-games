import React, { useReducer } from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
import Navigation from "./navigation";
import { spinReducer, initialState } from "../Reducers/twister-reducer";

function Twister(props) {
  const [state, dispatch] = useReducer(spinReducer, initialState);

  const { bodyPart, color, nonColor, side, spinning } = state;

  React.useEffect(() => {
    document.title = "Twister";
  }, []);

  // Values for the spinner
  const bodyParts = ["🖐", "🦶"];
  const sides = ["LEFT", "RIGHT"];
  const colors = ["blue", "yellow", "red", "green", "AIR ⛅️", "  SPINNER CHOOSES 🤔"];

  //For better readability in the spin function
  const delay = duration => {
    return new Promise(resolve => setTimeout(resolve, duration));
  };

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
    if (currentColor === "AIR ⛅️" || currentColor === "  SPINNER CHOOSES 🤔") {
      dispatch({ type: "setNonColor", payload: currentColor });
    }
    await delay(200);
    dispatch({ type: "stopSpinning" });
  };
  console.log("fired");

  const Container = styled.div`
    display: flex;
    padding-top: 20px;
    padding-bottom: 150px;
    flex-direction: column;
    height: 80vh;
  `;

  const ActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: space-around;
  `;

  const ActionDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 33.3%;
  `;

  const Word = styled.p`
    font-size: 30px;
    color: #347edd;
    font-weight: bold;
    text-align: center;
  `;

  const BodyPart = styled.p`
    font-size: 100px;
  `;

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

  const Button = styled.button`
    width: 100%;
    font-size: 30px;
    color: white;
    background-color: #347edd;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 20vh;
  `;

  const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <Container>
      <Navigation title={"Twister"} />
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
        <Button onClick={e => spin(e, bodyParts, colors, sides)} disabled={spinning}>
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
