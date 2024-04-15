import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

import ContactsIcon from "@mui/icons-material/Contacts";
import WorkIcon from "@mui/icons-material/Work";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

function NavBar() {
	const [theme, toggleTheme] = useTheme();
	const [open, setOpen] = useState(false);
	const navs = [
		{ url: "#", text: "Home", icon: <HomeIcon /> },
		{ url: "#about", text: "About", icon: <PersonIcon /> },
		{ url: "#work", text: "Experience", icon: <WorkIcon /> },
		{ url: "#project", text: "Projects", icon: <DeveloperModeIcon /> },
		{ url: "#contact", text: "Contact", icon: <ContactsIcon /> },
	];
	return (
		<nav className="flex justify-between items-center relative pb-4">
			<button className="text-3xl sm:text-4xl lg:hidden">
				<MenuIcon
					fontSize="inherit"
					className="cursor-pointer"
					onClick={() => setOpen((prev) => !prev)}
				/>
			</button>
			<span className="font-bold text-xl md:text-2xl lg:text-3xl">
				{"dev.himank."}
				<span className="text-basegreen-300 dark:text-darkbasegreen-300 ">
					Portfolio
				</span>
			</span>
			<ul className="hidden lg:flex text-base lg:text-lg xl:text-2xl font-semibold gap-4 lg:gap-6 xl:gap-10  relative box-border">
				{navs.map((item, index) => (
					<li key={index}>
						<a
							href={item.url}
							className="cursor-pointer hover:font-bold dark:hover:text-white"
						>
							{item.text}
						</a>
					</li>
				))}
			</ul>
			<button
				onClick={toggleTheme}
				className="icon-btn text-white dark:text-darkbasegreen-300 bg-basegreen-300 dark:bg-darkblue-200 p-[.6em] rounded-full aspect-square flex justify-center items-center cursor-pointer shadow-lg"
			>
				{theme ? <DarkModeIcon /> : <WbSunnyIcon />}
			</button>
			<div className="absolute w-full left-0 top-0">
				{open ? (
					<ul className="bg-[#F4F4F488] flex left-0 flex-col dark:bg-[#1C222F88] z-10 absolute w-full top-[50px] rounded-b-xl backdrop-blur-2xl p-4">
						{navs.map((item, index) => (
							<li
								key={index}
								className="border-b-2 border-gray-dark dark:border-darkblue-300 cursor-pointer py-3 flex gap-2 items-center px-2 hover:dark:bg-[#28314566] hover:bg-[#F4F4F466] hover:font-bold"
								onClick={() => setOpen(false)}
							>
								{item.icon}
								<a className="text-sm sm:text-base md:text-md" href={item.url}>
									{item.text}
								</a>
							</li>
						))}
					</ul>
				) : null}
			</div>
		</nav>
	);
}
export default NavBar;
