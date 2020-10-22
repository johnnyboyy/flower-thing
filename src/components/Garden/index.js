import React from "react";
import Flower from "../Flower";

const styles = {
	box: {
		position: "relative",
		width: "95%",
		height: "600px",
		background: "#f0f0f0",
		margin: "0 auto",
		overflow: "hidden",
	},
};

function App() {
	return (
		<div style={styles.box}>
			<Flower type="0" />
			<Flower type="1" />
			<Flower type="2" />
			<Flower type="3" />
			<Flower type="4" />
			<Flower type="5" />
			<Flower type="6" />
		</div>
	);
}

export default App;
