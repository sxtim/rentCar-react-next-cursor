import Image from "next/image"
import Link from "next/link"

const categories = [
	{
		id: "sport",
		name: "Спортивные",
		description: "Ощутите адреналин за рулем спортивного автомобиля",
		image:
			"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=800",
	},
	{
		id: "luxury",
		name: "Представительские",
		description: "Путешествуйте с максимальным комфортом и роскошью",
		image:
			"https://images.unsplash.com/photo-1566473965997-3de9c817e938?q=80&w=800",
	},
	{
		id: "suv",
		name: "Внедорожники",
		description: "Идеальный выбор для поездок по любой местности",
		image:
			"https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2070",
	},
]

const CarCategories = () => {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Выберите категорию автомобиля
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Мы предлагаем широкий выбор автомобилей разных категорий для любых
						ваших потребностей
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{categories.map(category => (
						<Link
							href={`/category/${category.id}`}
							key={category.id}
							className="group block transition-transform duration-300 hover:-translate-y-2"
						>
							<div className="overflow-hidden rounded-lg shadow-lg h-full bg-white">
								<div className="relative h-60 w-full">
									<Image
										src={category.image}
										alt={category.name}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-110"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">
										{category.name}
									</h3>
									<p className="text-gray-600">{category.description}</p>
									<div className="mt-6 flex items-center text-red-600 font-semibold">
										<span className="mr-2">Показать все</span>
										<svg
											className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M14 5l7 7m0 0l-7 7m7-7H3"
											></path>
										</svg>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}

export default CarCategories
