import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "../context/ThemeContext";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
function NavBar() {
	const { theme, setTheme } = useTheme();
	const [open, setOpen] = useState(false);
	const navs = [
		{ url: "#", text: "Home" },
		{ url: "#about", text: "About" },
		{ url: "#work", text: "Experience" },
		{ url: "#project", text: "Projects" },
		{ url: "#contact", text: "Contact" },
	];
	return (
		<>
			<nav className="pc-nav flex justify-between items-cente mb-[1rem]">
				<span className="font-bold text-[1.75rem] logo">
					{"dev.himank."}
					<span className="text-green">Portfolio</span>
				</span>
				<ul className="flex text-xl font-semibold gap-[2.4rem] relative box-border">
					{navs.map((item, index) => (
						<li key={index}>
							<a href={item.url} className="cursor-pointer hover:text-white">
								{item.text}
							</a>
						</li>
					))}
				</ul>
				<button
					onClick={() => setTheme((prev) => !prev)}
					className="icon-btn text-white dark:text-[#1C9C7D] bg-[#188168] dark:bg-[#1C222F] p-[.6em] rounded-full aspect-square flex justify-center items-center cursor-pointer shadow-lg"
				>
					{theme ? <DarkModeIcon /> : <WbSunnyIcon />}
				</button>
			</nav>

			<nav className="mobile-nav hidden flex-col">
				<div className="flex items-center justify-between">
					<button className="icon-btn">
						<MenuIcon
							style={{ fontSize: 30 }}
							className="cursor-pointer"
							onClick={() => setOpen(!open)}
						/>
					</button>
					<span className="font-bold text-[1.75rem] logo">
						{"dev.himank."}
						<span className="text-green">Portfolio</span>
					</span>
					<button
						onClick={() => setTheme((prev) => !prev)}
						className="icon-btn text-white dark:text-[#1C9C7D] bg-[#188168] dark:bg-[#1C222F] p-[.6em] rounded-full aspect-square flex justify-center items-center cursor-pointer shadow-lg"
					>
						{theme ? <DarkModeIcon /> : <WbSunnyIcon />}
					</button>
				</div>
				{open ? (
					<div className="flex flex-col">
						<ul className="flex font-semibold flex-col text-xl box-border divide-y-[2px] divide-light">
							{navs.map((item, index) => (
								<li key={index} className="py-[.5rem]" onClick={() => setOpen(false)}>
									<a
										href={item.url}
										className="cursor-pointer hover:text-white hover:dark:text-white hover:font-bold"
									>
										{item.text}
									</a>
								</li>
							))}
						</ul>
					</div>
				) : null}
			</nav>
		</>
	);
}

export default NavBar;
