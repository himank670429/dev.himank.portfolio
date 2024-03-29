import NavBar from "../components/navbar";
function Home() {
	return (
		<section className="flex flex-col">
			<NavBar />
			<main className="grow flex flex-col md:flex-row-reverse h-auto pb-4 md:pb-0 px-4">
				<div
					style={{ backgroundImage: "url('icons/logo/hero.svg')" }}
					className="bg-contain bg-center bg-no-repeat flex py-[100px] sm:[120px] md:py-[140px] justify-center grow items-center"
				>
					<img
						className="size-[170px] sm:size-[185px] md:size-[200px] lg:size-[240px] rounded-full shadow-normal"
						src="myphoto.jpg"
					/>
				</div>
				<div className="relative flex-col flex grow md:justify-center md:grow-0 lg:grow">
					<div className="text-center md:text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-10 ">
						<p>
							Hi there 👋, <br />I am <b>Himank Singh</b>, <br />A <b>Full Stack</b>
						</p>
						<b className="text-basegreen-300 dark:text-darkbasegreen-300">
							Web Developer
						</b>
					</div>
					<div className="flex gap-2 justify-center md:justify-start mt-6 md:mt-12 font-bold md:gap-4 text-lg sm:text-xl md:text-2xl md:ml-16">
						<a
							href={import.meta.env.BASE_URL + "resume.pdf"}
							className="bg-basegreen-300 dark:bg-darkbasegreen-300 p-2 text-white rounded-md "
						>
							My Resume
						</a>
						<a
							href="#about"
							className="p-2 border-2 broder-basegreen-300 dark:border-darkbasegreen-300 text-basegreen-300 border-basegreen-300  dark:text-darkbasegreen-300 rounded-md"
						>
							My Skills
						</a>
					</div>
				</div>
			</main>
		</section>
	);
}

export default Home;
