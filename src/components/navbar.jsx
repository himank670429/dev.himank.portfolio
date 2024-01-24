import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "../context/ThemeContext";
function NavBar() {
	const { theme, setTheme } = useTheme();
	return (
		<div className="flex justify-between items-center">
			<span className="font-bold text-[1.75rem]">
				{"dev.himank"}
				<span className="text-green">Portfolio</span>
			</span>
			<div className="flex text-xl font-bold gap-[2.4rem] relative box-border">
				<a href="#" className="cursor-pointer hover:font-bold">
					Home
				</a>
				<a href="#about" className="cursor-pointer hover:font-bold">
					About
				</a>
				<a href="#" className="cursor-pointer hover:font-bold">
					Services
				</a>
				<a href="#" className="cursor-pointer hover:font-bold">
					Projects
				</a>
				<a href="#contact" className="cursor-pointer hover:font-bold">
					Contact
				</a>
			</div>
			<span
				onClick={() => setTheme((prev) => !prev)}
				className="text-white dark:text-[#1C9C7D] bg-[#188168] dark:bg-[#1C222F] p-[.6em] rounded-full aspect-square flex justify-center items-center cursor-pointer shadow-lg"
			>
				{theme ? <DarkModeIcon style={{ fontSize: 30 }} /> : <WbSunnyIcon style={{ fontSize: 30 }} />}
			</span>
		</div>
	);
}

export default NavBar;
