import React from "react";
import Bingo from "../../src/components/bingo";
import Twister from "../../src/components/twister";

console.log(Bingo);

export default {
	title: "Games",
	component: Bingo
};

export const bingo = () => <Bingo />;
export const twister = () => <Twister />;
