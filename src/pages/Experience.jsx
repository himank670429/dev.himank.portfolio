import React from "react";
import { useTheme } from "../context/ThemeContext";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import MapIcon from "@mui/icons-material/Map";
import experience from "../assets/experience";
function Experience() {
	const [theme] = useTheme();
	return (
		<section
			className="flex flex-col p-4 md:p-8 lg:p-16 border-b-2 border-darkblue-300 "
			id="work"
		>
			<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 ">
				My WorkExperience
			</h1>
			{experience.map((item, index) => (
				<section
					className={`flex flex-col gap-4 ${
						index !== experience.length - 1
							? "border-b-2 border-darkblue-300 mb-12"
							: ""
					}`}
					key={index}
				>
					<div className="flex w-full">
						<div className="grow flex flex-col border-b-2 border-darkblue-300 pb-4 gap-2">
							<h2 className={`font-bold mb-2 text-xl lg:text-2xl`}>
								{index + 1}. {item.name}
							</h2>
							<span className="text-gray-dark dark:text-skyblue  text-lg lg:text-xl py-1 font-semibold">
								{item.org}
							</span>
							<span className="text-gray-dark dark:text-skyblue text-xs lg:text-sm flex gap-1 items-center">
								<LocationOnOutlinedIcon />
								{item.location}
							</span>
							{item.state ? (
								<span className="text-gray-dark dark:text-skyblue text-xs lg:text-sm flex gap-1 items-center">
									<MapIcon />
									{item.state}
								</span>
							) : null}
							<h4 className="text-gray-dark dark:text-skyblue text-xs lg:text-sm pb-1 flex gap-1 items-center">
								<HourglassEmptyIcon />
								{item.time}
							</h4>
						</div>
						<img
							src={theme ? item.logo_dark : item.logo}
							className="h-[100px] grow object-contain"
						/>
					</div>
					<span className="text-xl font-bold">About the Role :- </span>
					<ul className="text-gray-dark text-sm lg:text-base dark:text-skyblue flex-col flex gap-2">
						{item.desc.map((point, index) => (
							<li className="flex gap-1 md:gap-2" key={index}>
								<span>{index + 1}. </span>
								<span className="text-wrap">{point}</span>
							</li>
						))}
					</ul>
					<span className="text-xl font-bold">skills used :-</span>
					<div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 pb-4 flex-wrap text-xs sm:text-sm md:text-base">
						{item.skills.map((item, index) => (
							<span
								className="text-nowrap text-white font-semibold rounded-lg bg-basegreen-200 dark:bg-darkbasegreen-200 py-1 px-2"
								key={index}
							>
								{item}
							</span>
						))}
					</div>
				</section>
			))}
		</section>
	);
}

export default Experience;
