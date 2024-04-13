import InstagramLogo from "@mui/icons-material/Instagram";
import GithubLogo from "@mui/icons-material/GitHub";
import LinkedInLogo from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useState } from "react";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<section
			id="contact"
			className="flex flex-col px-[3.5rem] py-[3.3rem] contact"
		>
			<div className="flex font-bold flex-grow">
				<div className="text-[3rem] flex-col flex gap-[2rem] px-[1rem] pt-[6rem] flex-grow">
					<span>
						Do you have any <br /> questions?
					</span>
					<span className="text-green">Just Ask!</span>
					<div className="flex gap-4 text-green bg-white dark:bg-[#1C222F] shadow-normal w-fit whitespace-nowrap items-center p-[2rem] rounded-2xl">
						<span className="text-xl">follow me</span>
						<a
							className="flex items-center"
							href="https://www.instagram.com/dev.himank/"
							target="_blank"
						>
							<InstagramLogo />
						</a>
						<a
							className="flex items-center"
							href="https://github.com/himank670429"
							target="_blank"
						>
							<GithubLogo />
						</a>
						<a
							className="flex items-center"
							href="https://www.linkedin.com/in/himank-singh-65b411249/"
							target="_blank"
						>
							<LinkedInLogo />
						</a>
					</div>
				</div>
				<form
					onSubmit={handleSubmit}
					className="flex flex-shrink-0 mt-[2rem] dark:bg-[#1C222F] bg-white w-[50%] flex-col text-green text-3xl font-semibold shadow-normal rounded-3xl overflow-hidden p-[2rem] mb-[3rem]"
				>
					<label htmlFor="name">Name</label>
					<input
						onChange={(e) =>
							setFormData((prev) => ({ ...prev, name: e.target.value }))
						}
						required
						autoComplete="off"
						placeholder="Your Name"
						type="text"
						id="name"
						name="username"
					/>
					<label htmlFor="email">Email</label>
					<input
						onChange={(e) =>
							setFormData((prev) => ({ ...prev, email: e.target.value }))
						}
						b
						required
						autoComplete="off"
						placeholder="person@gmail.com"
						type="email"
						id="email"
						name="email_from"
					/>
					<label htmlFor="message">Message</label>
					<textarea
						onChange={(e) =>
							setFormData((prev) => ({ ...prev, message: e.target.value }))
						}
						required
						autoComplete="off"
						placeholder="Your message"
						className="resize-none flex-grow mb-[1rem]"
						type="text"
						id="message"
						name="message"
					/>
					<button
						type="submit"
						className="btn-pill-primary self-center flex gap-3 items-end mt-auto"
					>
						<TelegramIcon />
						send
					</button>
				</form>
			</div>
			<span className="flex font-bold text-green gap-2">
				<img
					src={import.meta.env.BASE_URL + "icons/logo/logo.svg"}
					className="w-[1.3rem] h-auto"
				/>
				{"© dev.Himank 2024, All Rights Reserved"}
			</span>
		</section>
	);
}

export default Contact;
