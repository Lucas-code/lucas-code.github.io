import { techToImg } from "@/helpers/constants";

interface Props {
	technology: string;
}

export default function TechnologyImage( props : Props) {
	return (
		<img
			src={techToImg[props.technology.toLowerCase()]} alt={props.technology}
			className="animate-float size-30"
		/>
	)
}