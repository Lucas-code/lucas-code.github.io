"use client"

import { useState } from "react";
import SectionHeader from "../SectionHeader";
import { uniModules } from "@/helpers/constants";
import { BsQuestionSquareFill } from "react-icons/bs";
import { FaHourglassStart } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

export default function About() {
	const [selectedYear, setSelectedYear] = useState<number>(0);

	return (
		<section id="about" className="section flex flex-col">
			<SectionHeader title="About" description="👋 A little bit about me" />
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1 px-5">
				<div className="grid grid-cols-1 gap-2 flex-1 text-2xl">
					<div className="flex flex-col gap-1">
						<div className="flex gap-2 items-center">
							<div className="w-fit p-3 border-2 border-[#3795cf] rounded-xl">
							<BsQuestionSquareFill className="fill-[#3795cf]" />
							</div>
							<h1 className="font-bold">Who am I?</h1>
						</div>
						<p className="text-sm">
							I am a passionate computer science graduate with years of experience working with a variety of technologies and
							computing domains through a combination of academic, professional, and personal projects.
						</p>
					</div>
					<div className="flex flex-col gap-1">
						<div className="flex gap-2 items-center">
							<div className="w-fit p-3 border-2 border-[#3795cf] rounded-xl">
								<FaHourglassStart className="fill-[#3795cf]" />
							</div>
							<h1 className="font-bold">How did I get into Software Engineering?</h1>
						</div>
						<p className="text-sm">
							My passion for software development started at the age of 10, attending an after-school club
							where I was introduced to the programming language Scratch. As I got older, I started to explore other
							languages and computer science concepts in school. I also participated in the Imperial Codelab Creative Computing Programme
							and won the Creative Coding Group Project in 2018.

						</p>
					</div>
					<div className="flex flex-col gap-4">
						<div className="flex gap-2 items-center">
							<div className="w-fit p-3 border-2 border-[#3795cf] rounded-xl">
								<FaTools className="fill-[#3795cf]" />
							</div>
							<h1 className="font-bold">What do you specialise in?</h1>
						</div>
						<p className="text-sm">
							At this stage of my career I am open to exploring various aspects of software engineering.
							As of recently, I have been developing my skills in full-stack web development (this website was created with React, Next.js and Typescript).
							I plan on expanding my skillset towards DevOps and cloud computing, as well as exploring the field of AI and machine learning.
						</p>
					</div>
				</div>
				<div>
					<div className="flex gap-10 w-fit justify-self-center mb-5">
						<img src="/assets/uon.jpg" alt="University of Nottingham" className="self-center rounded-lg size-20" />
						<div className="flex flex-col justify-center">
							<h1 className="text-2xl font-bold">University of Nottingham</h1>
							<h2 className="">🎓 BSc Computer Science w/ Year In Industry</h2>
							<h3 className="">📅 September 2022 - July 2026</h3>
							<h2 className="">👨‍🏫Final Grade: Second Class, Division One (2:1)</h2>
						</div>
					</div>
					<div>
						<div className="">
							<div className="flex justify-evenly gap-4 transition-all">
								{uniModules.map((modules, index) => (
									<div
										key={index}
										className={`cursor-pointer transition-all delay-150 duration-300 hover:text-lg hover:font-bold hover:-translate-y-2 ${selectedYear === index && "text-lg font-bold underline underline-offset-4"}`}
										onClick={() => setSelectedYear(index)}>
										Year {index + 1}
									</div>
								))}
							</div>
							<hr/>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
							{uniModules[selectedYear].map((module, index) => (
								<div key={index} className="bg-input h-15 flex items-center px-2 rounded-lg">
									{module}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}