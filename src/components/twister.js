import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";
import Navigation from "./navigation";
// import PropTypes from "prop-types";

function Twister(props) {
  const [bodyPart, setBodyPart] = React.useState("");
  const [color, setColor] = React.useState("");
  const [nonColor, setNonColor] = React.useState("");
  const [side, setSide] = React.useState("");
  const [spinning, setSpinning] = React.useState(false);

  React.useEffect(() => {
    document.title = "Twister";
  }, []);

  const bodyParts = ["🖐", "🦶"];
  const sides = ["LEFT", "RIGHT"];
  const colors = ["blue", "yellow", "red", "green", "AIR ⛅️", "  SPINNER CHOOSES 🤔"];

  const spin = (e, bodyParts, colors, sides) => {
    e.preventDefault();
    setBodyPart("");
    setColor("");
    setSide("");
    setSpinning(true);
    setNonColor("");
    const currentColor = colors[Math.floor(Math.random() * colors.length)];
    const currentBodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
    const currentSide = sides[Math.floor(Math.random() * sides.length)];
    setTimeout(() => {
      setSide(currentSide);
      setTimeout(() => {
        setBodyPart(currentBodyPart);
        setTimeout(() => {
          setColor(currentColor);
          if (currentColor === "AIR ⛅️" || currentColor === "  SPINNER CHOOSES 🤔") {
            setNonColor(currentColor);
          }
          setTimeout(() => {
            setSpinning(false);
          }, 200);
        }, 500);
      }, 500);
    }, 500);
  };

  const Header = styled.h1`
    margin-top: 50px;
    margin-bottom: 0px;
    color: orange;
    text-align: center;
  `;

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
          <BodyPart>{bodyPart.toUpperCase()}</BodyPart>
        </ActionDiv>
        <ActionDiv>
          <Color>{nonColor}</Color>
        </ActionDiv>
      </ActionContainer>
      <ButtonContainer>
        <Button onClick={e => spin(e, bodyParts, colors, sides)}>
          {spinning ? (
            <LoadingContainer>
              <ReactLoading type={"bubbles"} color="white" />
            </LoadingContainer>
          ) : (
            "Spin"
          )}
        </Button>
      </ButtonContainer>
    </Container>
  );
}

// Twister.propTypes = {};

export default Twister;
