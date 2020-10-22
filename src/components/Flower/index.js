import React from "react";
import "./styles.scss";

function Flower({ type }) {
	return (
		<div className={`flower flower-${type}`}>
			<span></span>
		</div>
	);
}

export default Flower;
