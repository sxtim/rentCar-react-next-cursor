import Image from "next/image"
import Link from "next/link"

interface CarCardProps {
	id: string
	name: string
	image: string
	pricePerDay: number
	year: number
	transmission: string
	enginePower: number
	category: string
}

const CarCard = ({
	id,
	name,
	image,
	pricePerDay,
	year,
	transmission,
	enginePower,
	category,
}: CarCardProps) => {
	return (
		<div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
			{/* Car Image */}
			<div className="relative h-48 w-full">
				<Image
					src={image}
					alt={name}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
				<div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded text-sm font-medium">
					{category}
				</div>
			</div>

			{/* Car Details */}
			<div className="p-4">
				<h3 className="text-xl font-bold mb-2">{name}</h3>

				<div className="flex justify-between text-sm text-gray-600 mb-4">
					<div className="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 mr-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<span>{year} г.</span>
					</div>
					<div className="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 mr-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"
							/>
						</svg>
						<span>{enginePower} л.с.</span>
					</div>
					<div className="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 mr-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
						<span>{transmission}</span>
					</div>
				</div>

				<div className="flex justify-between items-center">
					<div className="text-xl font-bold text-red-600">
						{pricePerDay} ₽
						<span className="text-sm text-gray-600 font-normal"> / сутки</span>
					</div>
					<Link
						href={`/cars/${id}`}
						className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-red-600 transition duration-300 text-sm"
					>
						Забронировать
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CarCard
