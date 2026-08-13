interface Props {
	title: string;
	description?: string;
}

export default function SectionHeader(props: Props) {
  return (
		<div className="flex flex-col gap-2 mb-2 items-center relative z-50">
			<h1 className="text-5xl font-bold">{props.title}</h1>
			{props.description && (
				<div className="rounded-full bg-[#919191] text-sm p-2 w-fit">
					{props.description}
				</div>
			)}
		</div>
	)
}