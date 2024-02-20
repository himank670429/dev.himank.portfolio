import React from "react";
import { useTheme } from "../context/ThemeContext";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Slider from "../components/slider";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
function Experience() {
	const { theme } = useTheme();
	return (
		<section
			style={{
				minHeight: `${window.innerHeight}px`,
			}}
			className="flex flex-col px-[5rem] py-[4rem]"
			id="work"
		>
			<h1 className="text-[2.3rem] font-bold mb-[2rem]">My WorkExperience</h1>
			{/* Sanganika website DDUC */}
			<div
				id="front-end-sanganika"
				className="mb-[3rem] pb-[2rem] border-b-2 border-light"
			>
				<div className="flex items-start px-[1rem]">
					<div className="flex-grow border-b-2 border-light pb-[1rem]">
						<h2 className="text-[1.5rem] font-bold mb-[.4rem] relative before:content-['1.'] before:absolute before:left-[-2rem]">
							Front Web Developer
						</h2>
						<h4 className="text-[1.2rem] font-semibold pb-[.3rem] text-[#6d6d6d]">
							Sangaika DDUC
						</h4>
						<h4 className="text-[.9rem] pb-[.3rem] text-[#6d6d6d]">
							<LocationOnOutlinedIcon />
							Deen Dayal Upadhyaya College, Dwarka Sector-3
						</h4>
						<h4 className="text-[.9rem] pb-[.3rem] text-[#6d6d6d]">
							<LocationOnOutlinedIcon />
							New Delhi, India
						</h4>
						<h4 className="text-[.9rem] pb-[.3rem] text-[#6d6d6d]">
							<HourglassEmptyIcon />
							Dec'23 - Present
						</h4>
					</div>
					{theme ? (
						<img
							className="h-[100px] flex-grow object-contain"
							src={import.meta.env.BASE_URL + "icons/org/sanganika-white.png"}
						/>
					) : (
						<img
							className="h-[100px] flex-grow object-contain"
							src={import.meta.env.BASE_URL + "icons/org/sanganika-black.png"}
						/>
					)}
				</div>
				<article className="text-[#6d6d6d] pt-[1rem] flex flex-col px-[1rem] font-medium">
					<h3 className="text-[1.2rem] font-bold pb-[.3rem] text-black dark:text-[#C9D1D9]">
						About the role :-
					</h3>
					<p className="mb-[1rem]">
						1. Worked on the official website of sanganika DDUC, Department of
						Computer Science, Deen Dayal Upadhyaya college, Delhi Univertisy.
						<br />
						2. Designed, Developed The whole website from scratch (currently
						Maintaining.)
						<br />
						3. official website link :-{" "}
						<a className="text-green" href="https://dduc.acm.org/sanganika">
							dduc.acm.org/sanganika
						</a>
					</p>
					<h3 className="text-[1.2rem] font-bold pb-[.3rem] text-black dark:text-[#C9D1D9]">
						skills used :-
					</h3>
					<div className="flex flex-wrap">
						{[
							"React.js",
							"Figma",
							"Tailwind CSS",
							"CSS",
							"Git",
							"GitHub",
							"cPanel",
						].map((item, index) => (
							<span
								key={index}
								className="text-white bg-[#70B1A1] dark:bg-[#0F5348] px-[.7rem] py-[.2rem] font-semibold text-base m-[.8rem] rounded-lg"
							>
								{item}
							</span>
						))}
					</div>
				</article>
			</div>

			{/* Graphics Designer */}
			<div className="mb-[3rem] pb-[2rem] border-b-2 border-light">
				<div className="flex items-start px-[1rem]">
					<div className="flex-grow border-b-2 border-light pb-[1rem]">
						<h2 className="text-[1.5rem] font-bold mb-[.4rem] relative before:content-['2.'] before:absolute before:left-[-2rem]">
							Graphics Designer
						</h2>
						<h4 className="text-[1.2rem] font-semibold pb-[.3rem] text-[#6d6d6d]">
							Data Analytics Club DDUC
						</h4>
						<h4 className="text-[.9rem] pb-[.3rem] text-[#6d6d6d]">
							<LocationOnOutlinedIcon />
							Deen Dayal Upadhyaya College, Dwarka Sector-3
						</h4>
						<h4 className="text-[.9rem] pb-[.3rem] text-[#6d6d6d]">
							<LocationOnOutlinedIcon />
							New Delhi, India
						</h4>
						<h4 className="text-[.9rem] pb-[.3rem] text-[#6d6d6d]">
							<HourglassEmptyIcon />
							Dec'23 - Present
						</h4>
					</div>
					{theme ? (
						<img
							className="h-[100px] flex-grow object-contain"
							src={import.meta.env.BASE_URL + "icons/org/dac-dark.png"}
						/>
					) : (
						<img
							className="h-[100px] flex-grow object-contain"
							src={import.meta.env.BASE_URL + "icons/org/dac-light.png"}
						/>
					)}
				</div>
				<article className="text-[#6d6d6d] pt-[1rem] flex flex-col px-[1rem] font-medium">
					<h3 className="text-[1.2rem] font-bold pb-[.3rem] text-black dark:text-[#C9D1D9]">
						About the role :-
					</h3>
					<p className="mb-[1rem]">
						1. Making poster for the event conducted by the scociety.
						<br />
						2. Making social media posts in Figma.
						<br />
					</p>
					<h3 className="text-[1.2rem] font-bold pb-[.3rem] text-black dark:text-[#C9D1D9]">
						skills used :-
					</h3>
					<div className="flex flex-wrap">
						{["Figma", "UI/UX"].map((item, index) => (
							<span
								key={index}
								className="text-white bg-[#70B1A1] dark:bg-[#0F5348] px-[.7rem] py-[.2rem] font-semibold text-base m-[.8rem] rounded-lg"
							>
								{item}
							</span>
						))}
					</div>
					<h3 className="text-[1.2rem] font-bold pb-[.3rem] text-black dark:text-[#C9D1D9]">
						Work Sample :-
					</h3>
					<div className="flex gap-[3rem] mt-4">
						<Slider
							slides={[
								"images/work-sample/17-11-2023/1_1.png",
								"images/work-sample/17-11-2023/1_2.png",
								"images/work-sample/17-11-2023/1_3.png",
								"images/work-sample/17-11-2023/1_4.png",
								"images/work-sample/17-11-2023/1_5.png",
								"images/work-sample/17-11-2023/1_6.png",
								"images/work-sample/17-11-2023/1_7.png",
							]}
							size={300}
						/>
						<Slider
							slides={[
								"images/work-sample/11-02-2024/2_1.png",
								"images/work-sample/11-02-2024/2_2.png",
								"images/work-sample/11-02-2024/2_3.png",
								"images/work-sample/11-02-2024/2_4.png",
								"images/work-sample/11-02-2024/2_5.png",
								"images/work-sample/11-02-2024/2_6.png",
							]}
							size={300}
						/>
						<Slider
							slides={[
								"images/work-sample/16-02-2024/3_1.png",
								"images/work-sample/16-02-2024/3_2.png",
								"images/work-sample/16-02-2024/3_3.png",
								"images/work-sample/16-02-2024/3_4.png",
								"images/work-sample/16-02-2024/3_5.png",
							]}
							size={300}
						/>
					</div>
					<p className="text-[#6d6d6d] text-[1rem] mt-[1rem] font-normal">
						Social Media post i have designed so far
					</p>
				</article>
			</div>

			{/* Python instership */}
			<div>
				<div className="flex items-start px-[1rem]">
					<div className="flex-grow border-b-2 border-light pb-[1rem]">
						<h2 className="text-[1.5rem] font-bold mb-[.4rem] relative before:content-['3.'] before:absolute before:left-[-2rem]">
							Python Developer
						</h2>
						<h4 className="text-[1.2rem] font-semibold pb-[.3rem] text-[#6d6d6d]">
							Axe Consultancy and Security Services LLC
						</h4>
						<h4 className="text-[.9rem] pb-[.3rem] text-[#6d6d6d]">
							<LocationOnOutlinedIcon />
							Remote Intership
						</h4>
						<h4 className="text-[.9rem] pb-[.3rem] text-[#6d6d6d]">
							<HourglassEmptyIcon />
							Nov'23 - Dec'23
						</h4>
					</div>
				</div>
				<article className="text-[#6d6d6d] pt-[1rem] flex flex-col px-[1rem] font-medium">
					<h3 className="text-[1.2rem] font-bold pb-[.3rem] text-black dark:text-[#C9D1D9]">
						About the role :-
					</h3>
					<p className="mb-[1rem]">
						1. Make python Scripts to automate task to upload production details in
						shopify store
						<br />
						2. Used shopify API to interact with the shopify store.
						<br /> 
						3. Used cron job to Automate report generation of product sale.
						<br /> 
					</p>
					<h3 className="text-[1.2rem] font-bold pb-[.3rem] text-black dark:text-[#C9D1D9]">
						skills used :-
					</h3>
					<div className="flex flex-wrap">
						{["python", "SQL"].map((item, index) => (
							<span
								key={index}
								className="text-white bg-[#70B1A1] dark:bg-[#0F5348] px-[.7rem] py-[.2rem] font-semibold text-base m-[.8rem] rounded-lg"
							>
								{item}
							</span>
						))}
					</div>
				</article>
			</div>
		</section>
	);
}

export default Experience;
