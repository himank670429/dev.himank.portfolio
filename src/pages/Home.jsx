import NavBar from "../components/navbar";
function Home() {
	console.log(`${window.innerHeight}px`);
	return (
		<section
			style={{
				minHeight: `${Math.min(window.innerHeight, 1024)}px`,
			}}
			className="home flex flex-col py-[5rem]"
		>
			<NavBar />
			<main className="flex flex-grow flex-col">
				<div className="intro w-full flex-grow grid grid-cols-2">
					<div className="text-[3.2rem] my-auto home-text flex flex-col">
						<h1 className="font-semibold">Hi Mate 👋,</h1>
						<h1 className="font-bold">
							I am Himank Singh <br /> A Full Stack
						</h1>
						<h1 className="font-bold text-green">Web Developer</h1>
					</div>
					<div className="relative flex justify-center hero">
						<img
							className="rounded-full self-center w-[50%] border-green border-2"
							src={import.meta.env.BASE_URL + "myphoto.jpg"}
						/>
					</div>
				</div>
				<div className="flex mb-0 mt-[3rem] ml-[3rem] gap-[2rem] home-buttons">
					<a href={import.meta.env.BASE_URL + "resume.pdf"} className="btn-primary">
						My Resume
					</a>
					<a href="#about" className="btn-secondary">
						My Skills
					</a>
				</div>
			</main>
		</section>
	);
}

export default Home;
