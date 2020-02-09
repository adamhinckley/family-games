import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	padding-top: 20px;
	/* padding-bottom: 150px; */
	flex-direction: column;
	height: 80vh;
`;

export const ActionContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 80vh;
	border: 1px solid blue;
	/* justify-content: space-around; */
`;

export const ActionDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 33.3%;
	border: 1px solid red;
`;

export const Word = styled.p`
	font-size: 30px;
	color: #347edd;
	font-weight: bold;
	text-align: center;
`;

export const BodyPart = styled.p`
	font-size: 100px;
`;

export const Button = styled.button`
	width: 100%;
	font-size: 30px;
	color: white;
	background-color: #347edd;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 20vh;
`;

export const LoadingContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
