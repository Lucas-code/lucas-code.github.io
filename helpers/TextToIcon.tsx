import { CgGames, CgWebsite } from "react-icons/cg";
import { CiMobile3, CiServer } from "react-icons/ci";
import { FaBrain } from "react-icons/fa6";

interface Props {
	text: string;
	size?: number;
	classNames?: string;
}

export default function TextToIcon(props: Props) {
	switch (props.text.toLowerCase()) {
		case "games":
			return <CgGames size={props.size ?? 30} className={props.classNames} />;
		case "mobile":
			return <CiMobile3 size={props.size ?? 30} className={props.classNames} />;
		case "machine learning":
			return <FaBrain size={props.size ?? 30} className={props.classNames} />;
		case "frontend":
			return <CgWebsite size={props.size ?? 30} className={props.classNames} />;
		case "backend":
			return <CiServer size={props.size ?? 30} className={props.classNames} />;
		default:
			return <></>;
	}
}