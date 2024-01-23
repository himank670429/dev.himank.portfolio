import Brightness7Icon from "@mui/icons-material/Brightness7";
function NavBar() {
	return (
		<div className="flex justify-between items-center">
			<span className="font-bold text-[1.75rem]">
				{"dev.himank"}
				<span className="text-[#188168]">Portfolio</span>
			</span>
			<div className="flex text-xl font-bold gap-[2.4rem] relative box-border">
				<span className="cursor-pointer hover:font-bold">Home</span>
				<span className="cursor-pointer hover:font-bold">About</span>
				<span className="cursor-pointer hover:font-bold">Services</span>
				<span className="cursor-pointer hover:font-bold">Projects</span>
				<span className="cursor-pointer hover:font-bold">Contact</span>
			</div>
			<span className="text-white bg-[#188168] p-[.6em] rounded-full aspect-square flex justify-center items-center cursor-pointer shadow-lg" >
				<Brightness7Icon style={{ fontSize: 30 }} />
			</span>
		</div>
	);
}

export default NavBar;
