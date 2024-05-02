import skillData from "../assets/skills";
import React from "react";
import { useTheme } from "../context/ThemeContext";
function About() {
	const [theme, _] = useTheme();
	return (
		<section
			id="about"
			className="flex flex-col p-4 md:p-8 lg:p-16 border-b-2 border-darkblue-300 gap-6"
		>
			<h1 className="text-[2.3rem] font-bold mb-4">About me</h1>
			{/* my self */}
			<div className="flex flex-col gap-4 lg:flex-row">
				<img
					src="/myphoto_2.jpg"
					className="rounded-xl max-h-[300px] self-center"
				/>
				<p className="text-base sm:text-lg lg:text-xl">
					My self Himank Singh, and i am a <strong>full stack web developer.</strong>{" "}
					<br />
					<br />I enjoy working in this domain to serve people their needs by making
					various <strong>cross platform web based tools.</strong> I have a strong
					web development skills. I am passionate
					<br />
					<br />
					towards learning new skills and gain more knowledge about the things I
					don't know.
					<br />
					<br />I am currently pursuing{" "}
					<strong>Bachelors in Computer Science</strong>
				</p>
			</div>

			{/* skills */}
			<ul className="flex flex-col mt-8 gap-8">
				<h1 className="text-[2rem] font-bold">My Skills</h1>
				{skillData.map((item, index) => {
					return (
						<li className="flex flex-col gap-4" key={index}>
							<span className="text-xl font-bold flex items-center gap-2">
								{item.icon} {item.name}
							</span>
							<div className="flex flex-wrap gap-2 items-end">
								{item.skills.map((skill, s_index) => {
									const last_index = item.skills.length - 1;
									return (
										<React.Fragment key={s_index}>
											<span
												className="flex items-center flex-col bg-basegreen-50 dark:bg-darkbasegreen-100 box-border p-3 rounded-lg"
											>
												<img
													src={theme ? skill["dark-icon"] || skill.icon : skill.icon}
													className="size-[30px] object-contain"
												/>
												<span>{skill.name}</span>
											</span>
											{s_index !== last_index ? <b className="mb-2">.</b> : null}
										</React.Fragment>
									);
								})}
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
}

export default About;
