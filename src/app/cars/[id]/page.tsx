"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { getCarById } from "@/data/cars"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function CarDetailPage() {
	const params = useParams()
	const carId = params.id as string
	const car = getCarById(carId)

	const [selectedImageIndex, setSelectedImageIndex] = useState(0)
	const [rentDays, setRentDays] = useState(1)

	if (!car) {
		return (
			<>
				<Header />
				<div className="min-h-[60vh] flex items-center justify-center">
					<div className="text-center p-8">
						<h1 className="text-3xl font-bold mb-4">Автомобиль не найден</h1>
						<p className="text-gray-600 mb-8">
							К сожалению, запрашиваемый автомобиль не найден или был удален.
						</p>
						<Link
							href="/cars"
							className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
						>
							Вернуться к списку автомобилей
						</Link>
					</div>
				</div>
				<Footer />
			</>
		)
	}

	const handleRentDaysChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value)
		if (value >= 1 && value <= 30) {
			setRentDays(value)
		}
	}

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
										src={car.images[selectedImageIndex]}
										alt={car.name}
										fill
										className="object-cover"
									/>
								</div>

								{/* Thumbnails */}
								<div className="flex gap-2 overflow-x-auto">
									{car.images.map((image, index) => (
										<button
											key={index}
											onClick={() => setSelectedImageIndex(index)}
											className={`relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden ${
												selectedImageIndex === index
													? "ring-2 ring-red-600"
													: ""
											}`}
										>
											<Image
												src={image}
												alt={`${car.name} изображение ${index + 1}`}
												fill
												className="object-cover"
											/>
										</button>
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

								{/* Rent Calculator */}
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

									<div className="mb-4">
										<label
											htmlFor="rent-days"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Срок аренды (дней)
										</label>
										<div className="flex items-center">
											<button
												onClick={() =>
													rentDays > 1 && setRentDays(rentDays - 1)
												}
												className="bg-gray-200 text-gray-700 h-10 w-10 flex items-center justify-center rounded-l-md"
											>
												-
											</button>
											<input
												type="number"
												id="rent-days"
												min="1"
												max="30"
												value={rentDays}
												onChange={handleRentDaysChange}
												className="h-10 px-3 py-2 text-center border-y w-16"
											/>
											<button
												onClick={() =>
													rentDays < 30 && setRentDays(rentDays + 1)
												}
												className="bg-gray-200 text-gray-700 h-10 w-10 flex items-center justify-center rounded-r-md"
											>
												+
											</button>
										</div>
									</div>

									<div className="text-lg font-bold flex justify-between mb-4">
										<span>Итого:</span>
										<span>{car.pricePerDay * rentDays} ₽</span>
									</div>

									<button className="w-full py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors">
										Забронировать автомобиль
									</button>
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
