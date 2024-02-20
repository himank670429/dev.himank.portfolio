import skillData from "../assets/skills";
function About() {
	return (
		<section
			style={{
				minHeight: `${window.innerHeight}px`,
			}}
			id="about"
			className="flex flex-col px-[5rem] py-[4rem]"
		>
			<h1 className="text-[2.3rem] font-bold mb-[2rem]">My Skills 💻</h1>
			<div className="flex flex-wrap">
				{skillData.skills.map((item, index) => (
					<span
						key={index}
						className="text-white bg-[#70B1A1] dark:bg-[#0F5348] px-[1rem] py-[.5rem] font-semibold text-lg m-[.8rem] rounded-lg"
					>
						{item}
					</span>
				))}
			</div>
			<div className="grid grid-cols-2 gap-[2rem]">
				<div className="flex flex-col mr-3 pb-[1rem]">
					<h1 className="text-[2.3rem] font-bold my-[2rem]">Overview</h1>
					{Object.keys(skillData.level).map((item, index) => (
						<div className="font-bold text-lg" key={index}>
							{item}
							<div className="w-full h-[.7rem] bg-[#AFD3CA] dark:bg-[#223C3D] rounded-full mb-[1.2rem]">
								<div
									style={{ width: skillData.level[item] + "%" }}
									className="bg-green rounded-full h-full"
								/>
							</div>
						</div>
					))}
				</div>
				<ul className="flex flex-col border-light pl-3 pb-[1rem] font-semibold list-disc">
					<h1 className="text-[2.3rem] font-bold my-[2rem]">Core Values</h1>
					<li className="ml-[2rem]">
						As a <b>quick learner</b>, I adeptly adapt, utilizing fundamentals for
						effective problem-solving in any environment.
					</li>
					<li className="ml-[2rem]">
						Dedicated to delivering <b>high-quality work</b>, I go the extra mile for
						clean, readable, well-documented, and well-tested code.
					</li>
					<a
						href="#work"
						className="self-center bg-green text-white mt-auto w-fit py-[.4rem] px-[1rem] rounded-md shadow hover:translate-y-[-.2rem] transition-transform text-xl"
					>
						My work Experience
					</a>
				</ul>
			</div>
		</section>
	);
}

export default About;
