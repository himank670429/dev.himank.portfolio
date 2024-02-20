import { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
function Slider({ slides, size }) {
	const [index, setIndex] = useState(0);

	function slideLeft(e) {
		setIndex((prev) => prev - 1);
	}
	function slideRight(e) {
		setIndex((prev) => prev + 1);
	}

	return (
		<div className="relative">
			{index !== 0 ? (
				<ArrowCircleLeftIcon
					onClick={slideLeft}
					className="absolute cursor-pointer top-[50%] translate-y-[-50%] left-0"
				/>
			) : null}
			<div
				style={{
					backgroundImage: `url(${import.meta.env.BASE_URL + slides[index]})`,
					width: size + "px",
					height: size + "px",
				}}
				className="bg-contain rounded-lg border-2 border-light"
			/>
			{index !== slides.length - 1 ? (
				<ArrowCircleRightIcon
					onClick={slideRight}
					className="absolute cursor-pointer top-[50%] translate-y-[-50%] right-0"
				/>
			) : null}
		</div>
	);
}

export default Slider;
