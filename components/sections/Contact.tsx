"use client"

import { useState, useRef } from "react";
import SectionHeader from "../SectionHeader";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { RiFiverrFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import * as z from "zod"; 
import HeroModel from "../HeroModel";


export default function Contact() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<any>();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const FormSchema = z.object({
		name: z.string().min(1, "Name is required" ),
		email: z.string().email("Invalid email address"),
		message: z.string().min(1, "Message is required"),
	});

	const formRef = useRef<HTMLFormElement>(null);

	function handleFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setError(undefined);
		setLoading(true);

		try {
			const result = FormSchema.safeParse(formData);
			if (result.error) {
				setError(z.flattenError(result.error).fieldErrors as any);
				return;
			}

			await emailjs.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				formRef.current!,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
			);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div id="contact" className="flex flex-col min-h-screen">
			<SectionHeader title="Contact" description="📬 Get in touch with me" />
			<div className="grid grid-cols-1 lg:grid-cols-2 flex-1 p-10 items-center">
				<Card className="">
					<CardHeader>
						<CardTitle className="text-7xl">Contact Form</CardTitle>
						<CardDescription className="text-3xl">Send any questions or messages my way</CardDescription>
					</CardHeader>
					<CardContent>
						<form id="contact-form" onSubmit={handleFormSubmit} className="" ref={formRef}>
							<FieldGroup>
								<Field>
									<FieldLabel className="text-3xl">Name</FieldLabel>
									<Input
										placeholder="Enter your name"
										name="name"
										value={formData.name}
										onChange={handleFormChange}
										style={{ fontSize: "large" }}
									/>
									{error?.name && <FieldError className="text-red-500 text-sm">{error.name[0]}</FieldError>}
								</Field>
								<Field>
									<FieldLabel className="text-3xl">Email</FieldLabel>
									<Input
										placeholder="Enter your email"
										name="email"
										value={formData.email}
										onChange={handleFormChange}
										style={{ fontSize: "large" }}
									/>
									{error?.email && <FieldError className="text-red-500 text-sm">{error.email[0]}</FieldError>}
								</Field>
								<Field>
									<FieldLabel className="text-3xl">Message</FieldLabel>
									<Textarea
										placeholder="Enter your message"
										name="message"
										value={formData.message}
										onChange={handleFormChange}
										style={{ fontSize: "large" }}
										className="overflow-y-auto max-h-60"
									/>
									{error?.message && <FieldError className="text-red-500 text-sm">{error.message[0]}</FieldError>}
								</Field>
							</FieldGroup>
						</form>
					</CardContent>
					<CardFooter>
						<Button
							type="submit"
							form="contact-form"
							className="w-1/5 h-15 text-3xl"
							disabled={loading}
						>
							Submit
						</Button>
					</CardFooter>
				</Card>
				<div className="h-full w-full">
					<HeroModel />
				</div>
			</div>
			<div className="flex flex-col items-center gap-10">
				<div className="flex col-start-2 gap-20">
					<a
						href="https://github.com/Lucas-code"
						target="_blank"
						rel="noreferrer noopener"
						className="p-3 border border-gray-800 rounded-lg hover:bg-input/50"
					>
						<FaGithubSquare className="size-15" />
					</a>
					<a
						href="https://www.linkedin.com/in/lucas-pango/"
						target="_blank"
						rel="noreferrer noopener"
						className="p-3 border border-gray-800 rounded-lg hover:bg-input/50"
					>
						<FaLinkedin className="size-15" />
					</a>
					<a
						href="https://www.fiverr.com/s/VYa0G2z"
						target="_blank"
						rel="noreferrer noopener"
						className="p-3 border border-gray-800 rounded-lg hover:bg-input/50"
					>
						<RiFiverrFill className="size-15" />
					</a>
				</div>
				<div className="">
					<p className="">© {new Date().getFullYear()} Lucas Pango | All rights reserved.</p>
				</div>
			</div>
		</div>
	)
}