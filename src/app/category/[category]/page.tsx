import CarCard from "@/components/CarCard"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { cars } from "@/data/cars"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

type CategoryParams = {
	params: {
		category: string
	}
}

// Функция для генерации всех возможных маршрутов для статического экспорта
export function generateStaticParams() {
	// Получаем уникальные категории из данных автомобилей
	const categories = [...new Set(cars.map(car => car.category))]

	return categories.map(category => ({
		category: category,
	}))
}

// Генерация метаданных для страницы категории
export function generateMetadata({ params }: CategoryParams): Metadata {
	const category = params.category

	// Названия категорий для метаданных
	const categoryNames: Record<string, string> = {
		sport: "Спортивные автомобили",
		luxury: "Представительские автомобили",
		suv: "Внедорожники",
	}

	const title = categoryNames[category] || "Автомобили"

	return {
		title: `${title} - Элитная аренда автомобилей`,
		description: `Аренда ${title.toLowerCase()} в Москве. Широкий выбор моделей и выгодные цены.`,
	}
}

export default function CategoryPage({ params }: CategoryParams) {
	const { category } = params

	// Проверка валидности категории
	const validCategories = ["sport", "luxury", "suv"]
	if (!validCategories.includes(category)) {
		notFound()
	}

	// Фильтрация автомобилей по категории
	const categoryItems = cars.filter(car => car.category === category)

	// Названия категорий для отображения
	const categoryNames: Record<string, string> = {
		sport: "Спортивные автомобили",
		luxury: "Представительские автомобили",
		suv: "Внедорожники",
	}

	// Описания категорий
	const categoryDescriptions: Record<string, string> = {
		sport:
			"Почувствуйте скорость и адреналин за рулем спортивного автомобиля. Наша коллекция спортивных автомобилей включает лучшие модели от ведущих производителей.",
		luxury:
			"Путешествуйте с максимальным комфортом и роскошью. Наши представительские автомобили сочетают в себе элегантность, престиж и высокие технологии.",
		suv: "Идеальный выбор для поездок по любой местности. Наши внедорожники сочетают в себе комфорт, безопасность и проходимость в любых условиях.",
	}

	return (
		<>
			<Header />

			<div className="py-10 bg-gray-50">
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
							<span className="text-gray-900 font-medium">
								{categoryNames[category]}
							</span>
						</nav>
					</div>

					{/* Page Title */}
					<div className="mb-10 text-center">
						<h1 className="text-3xl md:text-4xl font-bold mb-3">
							{categoryNames[category]}
						</h1>
						<p className="text-gray-600 max-w-3xl mx-auto">
							{categoryDescriptions[category]}
						</p>
					</div>

					{/* Car Grid */}
					{categoryItems.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{categoryItems.map(car => (
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
							<h3 className="text-xl font-bold mb-2">Автомобили не найдены</h3>
							<p className="text-gray-600">
								К сожалению, в данной категории сейчас нет доступных
								автомобилей.
							</p>
							<Link
								href="/cars"
								className="mt-4 inline-block px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
							>
								Смотреть все автомобили
							</Link>
						</div>
					)}
				</div>
			</div>

			<Footer />
		</>
	)
}
