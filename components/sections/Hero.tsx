"use client"
import { useState, useEffect } from "react";
import { heroWords } from "@/helpers/constants";
import TextToIcon from "@/helpers/TextToIcon";
import { ButtonCTA } from "../ButtonCTA";
import { useBreakpoints } from "@/hooks/breakpoints";

export default function Hero() {
	const [mounted, setMounted] = useState(false);
	const { is1536px, is1024px, is768px } = useBreakpoints();

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<section id="hero" className="section h-screen relative">

			<div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
				<div className="hero-gradient"/>
				<div className="hero-gradient"/>
				<div className="grid grid-cols-12 md:grid-cols-24 lg:grid-cols-36 2xl:grid-cols-48 grid-rows-1 h-full overflow-hidden">
					{[...Array(is768px ? 12 : is1024px ? 24 : is1536px ? 36 : 48)].map((_, index) => (
						<div key={index} className="binaryCol col-span-1 flex flex-col">
							{[...Array(100)].map((_, rowIndex) => (
								<span key={rowIndex} className="text-6xl text-center text-green-700 opacity-20">{Math.round(mounted ? Math.random() : (index + rowIndex) % 2)}</span>
							))}
						</div>
					))}
				</div>
			</div>
			
			<div className="w-full h-full relative flex items-center justify-center">
				<div className="fadeIn flex flex-col gap-10 items-center rounded-2xl border border-white/10 bg-black/35 p-20 backdrop-blur-sm shadow-2xl">
					<h1 className="text-8xl font-bold text-center">Lucas Pango</h1>
					<div className="flex flex-col gap-2 text-3xl lg:text-4xl">
						<span>A Computer Science graduate that likes to build</span>
						<span className="slider self-center">
							<span className="wrapper items-center">
								{heroWords.map((word, index) => (
									<span key={index} className="flex gap-3">
										<TextToIcon text={word.icon} size={40} classNames="rounded-full"/>
										<span>{word.text}</span>
									</span>
								))}
							</span>
						</span>
					</div>
					<ButtonCTA
						className="w-120 h-22"
						text="Learn More"
						onClick={() => {
							const section = document.getElementById("about");
							if (!section) return;
							section.scrollIntoView({ behavior: "smooth" });
						}}
						animate
					/>
				</div>
			</div>
		</section>
	)
}