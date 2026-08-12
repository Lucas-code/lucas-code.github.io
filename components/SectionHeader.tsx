interface Props {
	title: string;
	description?: string;
}

export default function SectionHeader(props: Props) {
  return (
		<div className="flex flex-col gap-3 mb-7 items-center">
			<h1 className="text-8xl font-bold">{props.title}</h1>
			{props.description && (
				<div className="rounded-full bg-[#919191] p-3 text-2xl mt-3 w-fit">
					{props.description}
				</div>
			)}
		</div>
	)
}