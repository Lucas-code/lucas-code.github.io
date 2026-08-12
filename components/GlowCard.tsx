import { useRef } from "react"

interface Props {
	className?: string;
	children: React.ReactNode;
}

export default function GlowCard(props : Props) {
	const ref = useRef<HTMLDivElement | null>(null);

	const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();
		const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // calculate the angle from the center of the card to the mouse
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    // adjust the angle so that it's between 0 and 360
    angle = (angle + 360) % 360;

    // set the angle as a CSS variable
    ref.current.style.setProperty("--start", `${angle + 60}`);
	};

	return (
			<div
				className={`card card-border rounded-xl p-10 ${props.className}`}
				ref={ref}
				onMouseMove={onMouseMove}
			>
					<div className="glow" />
					{props.children}
			</div>
	)
}