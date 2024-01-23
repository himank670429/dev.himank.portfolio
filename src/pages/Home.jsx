import NavBar from "../components/navbar";
function Home() {
	return (
		<section className="flex flex-col px-[6.7rem] py-[5rem] ">
			<NavBar />
			<div className="flex-grow flex flex-col hero">
				<div className="w-full mt-[10rem] grid grid-cols-2">
					<div className="text-[3.4rem]  flex flex-col">
						<h1 className="font-semibold">Hi Mate 👋,</h1>
						<h1 className="font-bold">
							I am Himank Singh <br /> A Full Stack
						</h1>
						<h1 className="font-bold text-[#188168]">Web Developer</h1>
					</div>
					<div className="relative flex justify-center">
						<img
							className="rounded-full self-center w-[50%] border-[#188168] border-2"
							src={import.meta.env.BASE_URL + "myphoto.jpg"}
						/>
					</div>
				</div>
				<div className="flex mt-[3rem] ml-[3rem] gap-[2rem]">
					<a href = {import.meta.env.BASE_URL + 'resume.pdf'} className="btn-primary">My Resume</a>
					<a href = "#about" className="btn-secondary">My Skills</a>
				</div>
			</div>
		</section>
	);
}

export default Home;
