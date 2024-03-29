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
		<>
			<PCNav theme={theme} toggleTheme={toggleTheme} navs={navs} />
			<MobileNav
				theme={theme}
				toggleTheme={toggleTheme}
				navs={navs}
				open={open}
				setOpen={setOpen}
			/>
		</>
	);
}

function PCNav({ theme, toggleTheme, navs }) {
	return (
		<nav className="hidden lg:flex justify-between items-center px-4 ">
			<span className="font-bold text-3xl lg:text-4xl">
				{"dev.himank."}
				<span className="text-basegreen-300 dark:text-darkbasegreen-300">
					Portfolio
				</span>
			</span>
			<ul className="flex text-xl font-semibold gap-[2.4rem] relative box-border">
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
				className="icon-btn text-white dark:text-[#1C9C7D] bg-[#188168] dark:bg-[#1C222F] p-[.6em] rounded-full aspect-square flex justify-center items-center cursor-pointer shadow-lg"
			>
				{theme ? <DarkModeIcon /> : <WbSunnyIcon />}
			</button>
		</nav>
	);
}

function MobileNav({ theme, toggleTheme, navs, open, setOpen }) {
	return (
		<nav className="lg:hidden flex flex-col flex-shrink-0 px-4 ">
			<div className="flex justify-between items-center">
				<button className="text-3xl sm:text-4xl">
					<MenuIcon
						fontSize="inherit"
						className="cursor-pointer"
						onClick={() => setOpen((prev) => !prev)}
					/>
				</button>
				<span className="font-bold text-xl sm:text-2xl md:text-3xl">
					{"dev.himank."}
					<span className="text-basegreen-300 dark:text-darkbasegreen-300">
						Portfolio
					</span>
				</span>
				<button
					onClick={toggleTheme}
					className="icon-btn text-white dark:text-darkbasegreen-300 bg-basegreen-300 dark:bg-darkblue-200 p-2 rounded-full aspect-square flex justify-center items-center cursor-pointer shadow-lg"
				>
					{theme ? <DarkModeIcon /> : <WbSunnyIcon />}
				</button>
			</div>
			<div className="relative mt-4">
				<ul
					style={{ display: open ? "flex" : "none" }}
					className="bg-[#F4F4F488] flex-col dark:bg-[#1C222F88] z-10 absolute w-full rounded-b-xl backdrop-blur-2xl p-4"
				>
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
			</div>
		</nav>
	);
}

export default NavBar;
