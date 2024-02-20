import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "../context/ThemeContext";
function NavBar() {
	const { theme, setTheme } = useTheme();
	return (
		<nav className="flex justify-between items-center">
			<span className="font-bold text-[1.75rem]">
				{"dev.himank."}
				<span className="text-green">Portfolio</span>
			</span>
			<ul className="flex text-xl font-bold gap-[2.4rem] relative box-border">
				<li>
					<a href="#" className="cursor-pointer hover:font-bold">
						Home
					</a>
				</li>
				<li>
					<a href="#about" className="cursor-pointer hover:font-bold">
						About
					</a>
				</li>
				<li>
					<a href="#" className="cursor-pointer hover:font-bold">
						Services
					</a>
				</li>
				<li>
					<a href="#" className="cursor-pointer hover:font-bold">
						Projects
					</a>
				</li>
				<li>
					<a href="#contact" className="cursor-pointer hover:font-bold">
						Contact
					</a>
				</li>
			</ul>
			<button
				onClick={() => setTheme((prev) => !prev)}
				className="text-white dark:text-[#1C9C7D] bg-[#188168] dark:bg-[#1C222F] p-[.6em] rounded-full aspect-square flex justify-center items-center cursor-pointer shadow-lg"
			>
				{theme ? (
					<DarkModeIcon style={{ fontSize: 30 }} />
				) : (
					<WbSunnyIcon style={{ fontSize: 30 }} />
				)}
			</button>
		</nav>
	);
}

export default NavBar;
