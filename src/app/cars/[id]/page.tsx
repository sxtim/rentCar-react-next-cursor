import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { cars, getCarById } from "@/data/cars"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Функция для генерации всех возможных маршрутов для статического экспорта
export function generateStaticParams() {
	return cars.map(car => ({
		id: car.id,
	}))
}

// Функция для генерации метаданных страницы
export function generateMetadata({
	params,
}: {
	params: { id: string }
}): Metadata {
	const car = getCarById(params.id)

	if (!car) {
		return {
			title: "Автомобиль не найден",
		}
	}

	return {
		title: `${car.name} ${car.model} - Аренда автомобилей`,
		description: car.description.substring(0, 160),
	}
}

// Серверный компонент для отображения
export default function CarDetailPage({ params }: { params: { id: string } }) {
	const car = getCarById(params.id)

	// Если автомобиль не найден, вернуть страницу 404
	if (!car) {
		notFound()
	}

	// Первое изображение как основное
	const primaryImage = car.images[0]

	return (
		<>
			<Header />

			<div className="py-12 bg-gray-50">
				<div className="container mx-auto px-4">
					{/* Breadcrumbs */}
					<div className="mb-8">
						<nav className="flex text-sm text-gray-600">
							<Link href="/" className="hover:text-red-600">
								Главная
							</Link>
							<span className="mx-2">/</span>
							<Link href="/cars" className="hover:text-red-600">
								Автопарк
							</Link>
							<span className="mx-2">/</span>
							<span className="text-gray-900 font-medium">{car.name}</span>
						</nav>
					</div>

					{/* Car Details */}
					<div className="bg-white rounded-lg shadow-lg overflow-hidden">
						<div className="grid grid-cols-1 lg:grid-cols-2">
							{/* Car Gallery */}
							<div className="p-6">
								{/* Main Image */}
								<div className="relative w-full h-[350px] mb-4 rounded-lg overflow-hidden">
									<Image
										src={primaryImage}
										alt={car.name}
										fill
										className="object-cover"
									/>
								</div>

								{/* Thumbnails */}
								<div className="flex gap-2 overflow-x-auto">
									{car.images.map((image, index) => (
										<div
											key={index}
											className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden`}
										>
											<Image
												src={image}
												alt={`${car.name} изображение ${index + 1}`}
												fill
												className="object-cover"
											/>
										</div>
									))}
								</div>
							</div>

							{/* Car Info */}
							<div className="p-6 lg:border-l border-gray-200">
								<h1 className="text-3xl font-bold mb-2">{car.name}</h1>
								<p className="text-gray-600 mb-6">{car.model}</p>

								<div className="grid grid-cols-2 gap-4 mb-6">
									<div>
										<p className="text-sm text-gray-600">Год выпуска</p>
										<p className="font-medium">{car.year}</p>
									</div>
									<div>
										<p className="text-sm text-gray-600">Мощность</p>
										<p className="font-medium">{car.enginePower} л.с.</p>
									</div>
									<div>
										<p className="text-sm text-gray-600">Коробка передач</p>
										<p className="font-medium">{car.transmission}</p>
									</div>
									<div>
										<p className="text-sm text-gray-600">Расход топлива</p>
										<p className="font-medium">
											{car.fuelConsumption} л/100 км
										</p>
									</div>
								</div>

								<div className="mb-6">
									<h2 className="text-xl font-bold mb-3">Описание</h2>
									<p className="text-gray-700">{car.description}</p>
								</div>

								<div className="mb-6">
									<h2 className="text-xl font-bold mb-3">Комплектация</h2>
									<ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
										{car.features.map((feature, index) => (
											<li key={index} className="flex items-center">
												<svg
													className="h-5 w-5 text-green-500 mr-2"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M5 13l4 4L19 7"
													/>
												</svg>
												{feature}
											</li>
										))}
									</ul>
								</div>

								{/* Rent Section */}
								<div className="p-4 bg-gray-50 rounded-lg">
									<div className="flex items-center justify-between mb-4">
										<div>
											<p className="text-sm text-gray-600">Стоимость аренды</p>
											<p className="text-2xl font-bold text-red-600">
												{car.pricePerDay} ₽
												<span className="text-sm font-normal"> / сутки</span>
											</p>
										</div>
										<div className="bg-red-100 text-red-800 font-medium py-1 px-3 rounded-full text-sm">
											{car.category === "sport"
												? "Спортивный"
												: car.category === "luxury"
												? "Представительский"
												: "Внедорожник"}
										</div>
									</div>

									<div className="text-lg font-bold flex justify-between mb-4">
										<span>Итого (1 день):</span>
										<span>{car.pricePerDay} ₽</span>
									</div>

									<Link href="/contact">
										<div className="w-full py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors text-center">
											Забронировать автомобиль
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}
