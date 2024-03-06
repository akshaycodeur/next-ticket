import React from "react";

const ProgressDisplay = () => {
	return (
		<div>
			<div className="w-full bg-gray-300 rounded-full h-2.5"></div>
			<div className="bg-sky-600 rounded-full" style={{ width: "25%" }}></div>
		</div>
	);
};

export default ProgressDisplay;
