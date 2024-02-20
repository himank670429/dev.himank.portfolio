import React from "react";

function Projects() {
	return (
		<section
			style={{
				minHeight: `${window.innerHeight}px`,
			}}
			id="project"
			className="flex flex-col px-[5rem] py-[4rem]"
		>
			<h1 className="text-[2.3rem] font-bold mb-[2rem]">Personal Projects</h1>

			{/* sanganika website*/}
			<article className="mb-[3rem] pb-[2rem] border-b-2 border-light">
				<h2 className="text-[1.5rem] font-bold mb-[.4rem] relative before:content-['1.'] before:absolute before:left-[-2rem]">
					Sanganika Website
				</h2>
				<p className="text-[#6d6d6d] pt-[1rem] mb-[1rem]">
					1. official website Sanganika DDUC, Department of Computer Science. Deen
					Dayal Upadhyaya College
					<br />
					2.The website show cases various aspects of the Scociety, from its members
					to is enviroment.
					<br />
					3. The project is hosted on URL :-{" "}
					<a
						className="text-green font-bold"
						target="_blank"
						href="https://dduc.acm.org/sanganika"
					>
						dduc.acm.org/sanganika
					</a>
					<br />
					4. Project source code on github :-{" "}
					<a
						className="text-green font-bold"
						target="_blank"
						href="https://github.com/sanganikaDDUC/SanganikaWebsite"
					>
						SanganikaWebsite
					</a>
				</p>
				<h3 className="text-[1.2rem] font-bold pb-[.3rem] text-black dark:text-[#C9D1D9]">
					Skills used :-
				</h3>
				<div className="flex flex-wrap mb-4">
					{["React.js", "Figma", "CSS", "Tailwind CSS", "Git", "GitHub"].map(
						(item, index) => (
							<span
								key={index}
								className="text-white bg-[#70B1A1] dark:bg-[#0F5348] px-[.7rem] py-[.2rem] font-semibold text-base m-[.8rem] rounded-lg"
							>
								{item}
							</span>
						)
					)}
				</div>
				<h3 className="text-[1.2rem] font-bold pb-[.3rem] text-black dark:text-[#C9D1D9]">
					Project Screen Shots :-
				</h3>
				<div className="flex gap-4">
					<img
						className="w-[300px] aspect-auto rounded-lg border-2 border-light"
						src={import.meta.env.BASE_URL + "images/projects/sanganika-landing.png"}
					/>
					<img
						className="w-[300px] aspect-auto rounded-lg border-2 border-light"
						src={import.meta.env.BASE_URL + "images/projects/sanganika-TM.png"}
					/>
				</div>
			</article>

			{/* todo */}
			<article className="mb-[3rem] pb-[2rem] border-b-2 border-light">
				<h2 className="text-[1.5rem] font-bold mb-[.4rem] relative before:content-['2.'] before:absolute before:left-[-2rem]">
					dev.himank.Todo
				</h2>
				<p className="text-[#6d6d6d] pt-[1rem] mb-[1rem]">
					1. A full stack to-do web application made to organize your productivity,
					made using <b>MERN STACK and webs sockets.</b>
					<br />
					2.you can login with you google account and sync your progress.
					<br />
					3. The project is hosted on URL :-{" "}
					<a
						className="text-green font-bold"
						target="_blank"
						href="https://dev-himank-todo.onrender.com"
					>
						dev.himank.todo
					</a>
					<br />
					4. Project source code on github :-{" "}
					<a
						className="text-green font-bold"
						target="_blank"
						href="https://github.com/himank670429/Todo-List"
					>
						Todo-List
					</a>
				</p>
				<h3 className="text-[1.2rem] font-bold pb-[.3rem] text-black dark:text-[#C9D1D9]">
					Skills used :-
				</h3>
				<div className="flex flex-wrap mb-4">
					{[
						"React.js",
						"Figma",
						"CSS",
						"MongoDB",
						"Node.js",
						"Express.js",
						"Git",
						"GitHub",
						"Web Sockets",
					].map((item, index) => (
						<span
							key={index}
							className="text-white bg-[#70B1A1] dark:bg-[#0F5348] px-[.7rem] py-[.2rem] font-semibold text-base m-[.8rem] rounded-lg"
						>
							{item}
						</span>
					))}
				</div>
				<h3 className="text-[1.2rem] font-bold pb-[.3rem] text-black dark:text-[#C9D1D9]">
					Project Screen Shots :-
				</h3>
				<div className="flex gap-4">
					<img
						className="w-[300px] aspect-auto rounded-lg border-2 border-light"
						src="https://camo.githubusercontent.com/c345b89926fa8fc60c95d098f44a8506866c4d964b9fa342ae22d8af42a5597c/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d646f776e6c6f61642669643d31446a533066396637754d56776c67364865354b495172374c763179467642564f"
					/>
					<img
						className="w-[300px] aspect-auto rounded-lg border-2 border-light"
						src="https://camo.githubusercontent.com/5cf77a51965b33222a3f6cb0ea626cb0eab115c6238e09ec73ee13927f1f0c4f/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d646f776e6c6f61642669643d31667a785932595554505432434b4d53376d766f4e556336756669316854772d50"
					/>
					<img
						className="w-[300px] aspect-auto rounded-lg border-2 border-light"
						src="https://camo.githubusercontent.com/792ab956cf1939408acf48750d9691a09ecad57a60c56ed3370485ee7e6ac7e9/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d646f776e6c6f61642669643d31476c6d37715661647958326e765657464747764e32787932414c57424f324273"
					/>
				</div>
			</article>

			{/* sem-5 */}
			<article>
				<h2 className="text-[1.5rem] font-bold mb-[.4rem] relative before:content-['3.'] before:absolute before:left-[-2rem]">
					college semester website
				</h2>
				<p className="text-[#6d6d6d] pt-[1rem] mb-[1rem]">
					1. a simple website without a back-end that servers all kinds of study
					material for my college semester (semester 5).
					<br />
					2.you can login with you google account and sync your progress.
					<br />
					3. The project is hosted on URL :-{" "}
					<a
						className="text-green font-bold"
						target="_blank"
						href="https://dev-himank-todo.onrender.com"
					>
						dev.himank.todo
					</a>
					<br />
					4. Project source code on github :-{" "}
					<a
						className="text-green font-bold"
						target="_blank"
						href="https://github.com/himank670429/Todo-List"
					>
						Todo-List
					</a>
				</p>
				<h3 className="text-[1.2rem] font-bold pb-[.3rem] text-black dark:text-[#C9D1D9]">
					Skills used :-
				</h3>
				<div className="flex flex-wrap mb-4">
					{["React.js", "Figma", "CSS", "Git", "GitHub"].map((item, index) => (
						<span
							key={index}
							className="text-white bg-[#70B1A1] dark:bg-[#0F5348] px-[.7rem] py-[.2rem] font-semibold text-base m-[.8rem] rounded-lg"
						>
							{item}
						</span>
					))}
				</div>
				<h3 className="text-[1.2rem] font-bold pb-[.3rem] text-black dark:text-[#C9D1D9]">
					Project Screen Shots :-
				</h3>
				<div className="flex gap-4">
					<img
						className="w-[300px] aspect-auto rounded-lg border-2 border-light"
						src={import.meta.env.BASE_URL + "images/projects/sem-5-landing.png"}
					/>
					<img
						className="w-[300px] aspect-auto rounded-lg border-2 border-light"
						src={import.meta.env.BASE_URL + "images/projects/sem-5-books.png"}
					/>
				</div>
			</article>
		</section>
	);
}

export default Projects;
