"use client"

import { experienceInfo, fiverrReviews } from "@/helpers/constants";
import SectionHeader from "../SectionHeader";
import { gsap } from "gsap";    
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useBreakpoints } from "@/hooks/breakpoints";
import GlowCard from "../GlowCard";
import CountUp from "react-countup";
import { Avatar, AvatarFallback } from "../ui/avatar";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
	const { is1280px } = useBreakpoints();

	useGSAP(() => {
		gsap.to(".timeline", {
			transformOrigin: "bottom bottom",
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: ".timeline",
				start: "top center",
				end: "70% center",
				onUpdate: (self) => {
					gsap.to(".timeline", {
						scaleY: 1 - self.progress,
					});
				}
			}
		});

		gsap.utils.toArray(".expText").forEach((elem : any) => {
			gsap.from(elem, {
				opacity: 0,
				xPercent: -100,
				duration: 1,
				ease: "power2.inOut",
				scrollTrigger: {
					trigger: elem,
					start: "top 70%",
					toggleActions: "play none none reverse",
				},
			});
		});
	}, []);

	return (
		<section id="experience" className="section">
			<SectionHeader title="Experience" description="💼 My professional journey" />
            <div className="relative xl:w-8/10 xl:place-self-center">
                {experienceInfo.map((info, index) => (
                    <div key={index} className="flex">
                        <div className="timeline-wrapper">
                            <div className="timeline" />
                            <div className="gradient-line w-1 h-full" />
                        </div>
                        <div className="expText flex gap-10 mb-20 z-50">
                            <div className="flex flex-none rounded-full size-20 lg:size-40 overflow-hidden outline-black dark:outline-white outline-2">
                                <img src={info.icon} alt={info.company}/>
                            </div>

                            <div className="flex flex-col gap-2 lg:w-8/10 mt-5 mb-8">
                                <h1 className="text-6xl font-bold">{info.company}</h1>
                                <h2 className="text-3xl">{info.title}</h2>
                                <p className="text-xl">📅 {info.duration}</p>
                                {info.responsibilities && (
                                    <>
                                        <h3 className="text-3xl text-gray-400 italic">Responsibilities</h3>
                                        <ul className="flex flex-col gap-6 mt-5 list-disc list-inside text-2xl">
                                            {info.responsibilities.map((r, index) => (
                                                <li key={index} dangerouslySetInnerHTML={{ __html: r }} />
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
			<div id="freelance-experience" className="mt-40 mb-20">
				<h1 className="text-7xl mb-8 text-center font-bold">Freelance Experience</h1>
				<div className="grid grid-cols-1 lg:grid-cols-2">
					{/* {!is1024px && ( */}
						<img src="/assets/fiverr.jpg" alt="Fiverr Logo" className="justify-self-center self-center size-100 xl:size-150 rounded-full my-10 lg:my-0" />
					{/* )} */}
					<div>
						<ul className="list-disc text-3xl mb-10 flex flex-col gap-3">
							<li>Developed software solutions for clients from <b>6 different countries</b></li>
							<li>Completed a variety of projects, including:</li>
							<ul className="list-disc list-inside ml-10 font-bold">
								<li>Web Scrapers</li>
								<li>Web Apps</li>
								<li>Discord Bots</li>
								<li>GUIs</li>
								<li>And More</li>
							</ul>
							<li>Received multiple high-rated reviews, highlighting <b>excellent communication</b> and meeting <b>delivery timelines</b></li>
						</ul>
						<div className="grid grid-cols-2 gap-10">
							<GlowCard>
								<>
									<CountUp
										end={35}
										duration={1.5}
										autoAnimate
										autoAnimateOnce={false}
										className="text-6xl font-bold"
									/>
									<p className="text-2xl text-gray-400">Orders Completed</p>
								</>
							</GlowCard>
							<GlowCard>
								<>
									<CountUp
										end={10}
										duration={1.5}
										suffix="+"
										autoAnimate
										autoAnimateOnce={false}
										className="text-6xl font-bold"
									/>
									<p className="text-2xl text-gray-400">Clients</p>
								</>
							</GlowCard>
							<GlowCard className="col-span-2">
								<>
									<CountUp
										end={15}
										duration={1.5}
										suffix="+"
										autoAnimate
										autoAnimateOnce={false}
										className="text-6xl font-bold"
									/>
									<p className="text-2xl text-gray-400">5-Star Reviews</p>
								</>
							</GlowCard>
						</div>
					</div>
				</div>
				<div className="mt-20">
					<h1 className="text-5xl font-bold text-center">Client Reviews</h1>
					<div className="relative mt-10">
						<div className="gradient-edge" />
						<div className="gradient-edge" />

						<div className="marquee h-100">
							<div className="marquee-box gap-12">
								{fiverrReviews.map((review, index) => (
									<div key={index} className="flex flex-col justify-between h-full w-150 bg-zinc-800 rounded-xl p-5">
										<div className="flex gap-3">
											{Array.from({ length: 5 }, (_, i) => {
												const fillPercentage = Math.min(100, Math.max(0, (review.rating - i) * 100));

												return (
													<span key={i} className="relative inline-block size-10 mask-[url('/assets/star.png')] mask-cover">
														<div className="bg-white w-full h-full">
															<div className="h-full bg-yellow-300" style={{ width: `${fillPercentage}%` }} />
														</div>
														{/* <img src="/assets/star.png" alt="star" className="size-10" /> */}
													</span>
											)})}
										</div>
										<p className="text-2xl">{review.review}</p>
										<div className="flex gap-3 items-center mt-3">
											<Avatar size="lg">
												<AvatarFallback>
													{review.client.slice(0,2).toUpperCase()}
												</AvatarFallback>
											</Avatar>
											<p className="text-gray-400 text-2xl">{review.client}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}