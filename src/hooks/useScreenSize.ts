import { useState, useEffect } from "react";

const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
		"desktop",
	);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 480) {
				setScreenSize("mobile");
			} else if (window.innerWidth <= 768) {
				setScreenSize("tablet");
			} else {
				setScreenSize("desktop");
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return screenSize;
};

export default useScreenSize;
