import CarCard from "@/components/CarCard"
import CarCategories from "@/components/CarCategories"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import HeroBanner from "@/components/HeroBanner"
import Testimonials from "@/components/Testimonials"
import WhyChooseUs from "@/components/WhyChooseUs"
import { cars } from "@/data/cars"
import Link from "next/link"

export default function Home() {
	// Выбираем 4 случайных автомобиля для показа на главной странице
	const featuredCars = cars.slice(0, 4)

	return (
		<>
			<Header />

			<main>
				{/* Hero Banner */}
				<HeroBanner />

				{/* Car Categories */}
				<CarCategories />

				{/* Featured Cars */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Популярные автомобили
							</h2>
							<p className="text-gray-600 max-w-2xl mx-auto">
								Познакомьтесь с нашими самыми популярными моделями для аренды
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{featuredCars.map(car => (
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

						<div className="text-center mt-12">
							<Link
								href="/cars"
								className="px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition duration-300 inline-block"
							>
								Смотреть все автомобили
							</Link>
						</div>
					</div>
				</section>

				{/* Why Choose Us */}
				<WhyChooseUs />

				{/* Testimonials */}
				<Testimonials />

				{/* Call to Action */}
				<section className="py-20 bg-red-600 text-white">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Готовы арендовать автомобиль мечты?
						</h2>
						<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
							Забронируйте автомобиль прямо сейчас и получите скидку 10% на
							первую аренду!
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link
								href="/cars"
								className="px-8 py-4 bg-white text-red-600 font-medium text-lg rounded-md hover:bg-gray-100 transition duration-300"
							>
								Выбрать автомобиль
							</Link>
							<Link
								href="/contacts"
								className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium text-lg rounded-md hover:bg-white/10 transition duration-300"
							>
								Связаться с нами
							</Link>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	)
}
