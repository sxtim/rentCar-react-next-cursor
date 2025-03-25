"use client"

import CarCard from "@/components/CarCard"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { cars } from "@/data/cars"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function CarsPage() {
	const searchParams = useSearchParams()
	const categoryFilter = searchParams.get("category")

	const [filteredCars, setFilteredCars] = useState(cars)
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000])
	const [selectedCategories, setSelectedCategories] = useState<string[]>(
		categoryFilter ? [categoryFilter] : []
	)

	useEffect(() => {
		let result = [...cars]

		// Фильтрация по категориям
		if (selectedCategories.length > 0) {
			result = result.filter(car => selectedCategories.includes(car.category))
		}

		// Фильтрация по цене
		result = result.filter(
			car =>
				car.pricePerDay >= priceRange[0] && car.pricePerDay <= priceRange[1]
		)

		setFilteredCars(result)
	}, [selectedCategories, priceRange])

	const handleCategoryChange = (category: string) => {
		setSelectedCategories(prev =>
			prev.includes(category)
				? prev.filter(cat => cat !== category)
				: [...prev, category]
		)
	}

	const handlePriceChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number
	) => {
		const value = parseInt(e.target.value)
		setPriceRange(prev => {
			const newRange = [...prev] as [number, number]
			newRange[index] = value
			return newRange
		})
	}

	return (
		<>
			<Header />

			<div className="py-10 bg-gray-50">
				<div className="container mx-auto px-4">
					{/* Page Title */}
					<div className="mb-10 text-center">
						<h1 className="text-3xl md:text-4xl font-bold mb-3">
							Наш автопарк
						</h1>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Выберите автомобиль, который подходит именно вам. Мы предлагаем
							широкий выбор спортивных, представительских автомобилей и
							внедорожников от лучших мировых производителей.
						</p>
					</div>

					<div className="flex flex-col lg:flex-row gap-8">
						{/* Filters */}
						<div className="lg:w-1/4 bg-white p-6 rounded-lg shadow-md h-fit">
							<h2 className="text-xl font-bold mb-4">Фильтры</h2>

							{/* Category Filter */}
							<div className="mb-6">
								<h3 className="text-lg font-medium mb-3">Категория</h3>
								<div className="space-y-2">
									<div className="flex items-center">
										<input
											type="checkbox"
											id="category-sport"
											className="mr-2 h-4 w-4 accent-red-600"
											checked={selectedCategories.includes("sport")}
											onChange={() => handleCategoryChange("sport")}
										/>
										<label htmlFor="category-sport">Спортивные</label>
									</div>
									<div className="flex items-center">
										<input
											type="checkbox"
											id="category-luxury"
											className="mr-2 h-4 w-4 accent-red-600"
											checked={selectedCategories.includes("luxury")}
											onChange={() => handleCategoryChange("luxury")}
										/>
										<label htmlFor="category-luxury">Представительские</label>
									</div>
									<div className="flex items-center">
										<input
											type="checkbox"
											id="category-suv"
											className="mr-2 h-4 w-4 accent-red-600"
											checked={selectedCategories.includes("suv")}
											onChange={() => handleCategoryChange("suv")}
										/>
										<label htmlFor="category-suv">Внедорожники</label>
									</div>
								</div>
							</div>

							{/* Price Filter */}
							<div>
								<h3 className="text-lg font-medium mb-3">Цена за сутки</h3>
								<div className="space-y-3">
									<div>
										<label
											htmlFor="min-price"
											className="block text-sm text-gray-600 mb-1"
										>
											Минимальная цена: {priceRange[0]} ₽
										</label>
										<input
											type="range"
											id="min-price"
											min="0"
											max="100000"
											step="1000"
											value={priceRange[0]}
											onChange={e => handlePriceChange(e, 0)}
											className="w-full accent-red-600"
										/>
									</div>
									<div>
										<label
											htmlFor="max-price"
											className="block text-sm text-gray-600 mb-1"
										>
											Максимальная цена: {priceRange[1]} ₽
										</label>
										<input
											type="range"
											id="max-price"
											min="0"
											max="100000"
											step="1000"
											value={priceRange[1]}
											onChange={e => handlePriceChange(e, 1)}
											className="w-full accent-red-600"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* Car List */}
						<div className="lg:w-3/4">
							{filteredCars.length > 0 ? (
								<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
									{filteredCars.map(car => (
										<CarCard
											key={car.id}
											id={car.id}
											name={car.name}
											image={car.images[0]}
											pricePerDay={car.pricePerDay}
											year={car.year}
											transmission={car.transmission}
											enginePower={car.enginePower}
											category={
												car.category === "sport"
													? "Спортивный"
													: car.category === "luxury"
													? "Представительский"
													: "Внедорожник"
											}
										/>
									))}
								</div>
							) : (
								<div className="bg-white p-10 rounded-lg shadow-md text-center">
									<h3 className="text-xl font-bold mb-2">
										Автомобили не найдены
									</h3>
									<p className="text-gray-600">
										К сожалению, автомобили, соответствующие выбранным фильтрам,
										отсутствуют. Попробуйте изменить параметры фильтрации.
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}
