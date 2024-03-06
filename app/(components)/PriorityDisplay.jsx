import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PriorityDisplay = () => {
	return (
		<div className="text-red-400 flex flex-row justify-start align-baseline">
			<FontAwesomeIcon icon={faFire} />
			<FontAwesomeIcon icon={faFire} />
			<FontAwesomeIcon icon={faFire} />
			<FontAwesomeIcon icon={faFire} />
			<FontAwesomeIcon icon={faFire} />
		</div>
	);
};

export default PriorityDisplay;
