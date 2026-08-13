import { FaGithubSquare } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";

interface Props {
	onClick?: () => void;
	link?: string;
	className?: string;
	text?: string;
	icon?: string
	animate?: boolean;
}

export function ButtonCTA( props: Props) {
	return (
		<a href={props.link ?? undefined} onClick={props.onClick ?? undefined} target="_blank" className={`${props.className ?? ""} cta-wrapper w-60 `}>
			<div className="cta-button group">
				<div className="bg-circle" />
				<p className="text">{props.text ?? "Check it out!"}</p>
				<div className={`icon-wrapper ${props.animate && "animate-bounce"}`}>
					{props.icon === "arrow" ? <FaArrowDown /> :  props.icon === "github" ? <FaGithubSquare /> : <FaArrowDown />}
					{/* <FaGithubSquare /> */}
				</div>
			</div>
		</a>
	);
}