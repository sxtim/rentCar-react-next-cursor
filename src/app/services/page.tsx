import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"
import Link from "next/link"

export default function ServicesPage() {
	const services = [
		{
			id: "rental",
			title: "Аренда автомобилей",
			description:
				"Предлагаем широкий выбор автомобилей премиум-класса для аренды на любой срок — от суток до нескольких месяцев.",
			features: [
				"Без залога для постоянных клиентов",
				"Бесплатная подача в пределах МКАД",
				"Круглосуточная техническая поддержка",
				"Страхование КАСКО и ОСАГО включено",
				"Гибкая система скидок при долгосрочной аренде",
			],
			image:
				"https://images.unsplash.com/photo-1621356986575-1e04ebaa9f4c?q=80&w=1600",
		},
		{
			id: "business",
			title: "Бизнес-услуги",
			description:
				"Обслуживание деловых мероприятий, встреч и корпоративных клиентов с высоким уровнем сервиса.",
			features: [
				"Трансфер гостей на деловые мероприятия",
				"Организация VIP-встреч в аэропорту",
				"Сопровождение бизнес-делегаций",
				"Корпоративный автопарк под ключ",
				"Индивидуальные условия для компаний",
			],
			image:
				"https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1600",
		},
		{
			id: "wedding",
			title: "Свадебный кортеж",
			description:
				"Сделайте ваш особенный день незабываемым с помощью элитных автомобилей для свадебного кортежа.",
			features: [
				"Подбор автомобилей под стиль свадьбы",
				"Оформление автомобилей",
				"Опытные водители в формальной одежде",
				"Фотосессия с автомобилями",
				"Специальные свадебные пакеты услуг",
			],
			image:
				"https://images.unsplash.com/photo-1549342902-be005322599a?q=80&w=1600",
		},
		{
			id: "driver",
			title: "Аренда с водителем",
			description:
				"Профессиональные водители с многолетним опытом работы и безупречным знанием города.",
			features: [
				"Водители со знанием иностранных языков",
				"Строгий дресс-код для водителей",
				"Конфиденциальность и пунктуальность",
				"Возможность почасовой или суточной аренды",
				"Индивидуальный подход к каждому клиенту",
			],
			image:
				"https://images.unsplash.com/photo-1560639954-b5c36767918c?q=80&w=1600",
		},
		{
			id: "events",
			title: "Обслуживание мероприятий",
			description:
				"Организация транспортного обслуживания выставок, конференций, фестивалей и частных мероприятий.",
			features: [
				"Координация транспортных потоков",
				"Брендирование автомобилей",
				"Работа на закрытых территориях",
				"Логистическое планирование",
				"Отчетность и документальное сопровождение",
			],
			image:
				"https://images.unsplash.com/photo-1556800572-cbb687fafbea?q=80&w=1600",
		},
		{
			id: "photosession",
			title: "Аренда для фотосессий",
			description:
				"Предоставление автомобилей для фото- и видеосъемок, рекламных кампаний и творческих проектов.",
			features: [
				"Широкий выбор цветов и комплектаций",
				"Возможность съемки в интерьере и экстерьере",
				"Техническая подготовка автомобилей",
				"Гибкий график предоставления",
				"Специальные тарифы для фотографов и продакшн-студий",
			],
			image:
				"https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=1600",
		},
	]

	return (
		<>
			<Header />

			<div className="py-12 bg-gray-50">
				<div className="container mx-auto px-4">
					{/* Page Title */}
					<div className="text-center mb-12">
						<h1 className="text-3xl md:text-4xl font-bold mb-3">Наши услуги</h1>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Мы предлагаем широкий спектр услуг по аренде элитных автомобилей
							для различных целей — от деловых поездок до особых мероприятий.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map(service => (
							<div
								key={service.id}
								className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
							>
								<div className="relative h-48 w-full">
									<Image
										src={service.image}
										alt={service.title}
										fill
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
									<h2 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
										{service.title}
									</h2>
								</div>
								<div className="p-6">
									<p className="text-gray-600 mb-6">{service.description}</p>
									<div className="mb-6">
										<h3 className="font-semibold mb-3">Включает:</h3>
										<ul className="space-y-2">
											{service.features.map((feature, index) => (
												<li key={index} className="flex items-start">
													<svg
														className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</div>
									<Link
										href="/contacts"
										className="inline-block px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition duration-300"
									>
										Заказать услугу
									</Link>
								</div>
							</div>
						))}
					</div>

					{/* Call to Action */}
					<div className="mt-16 bg-gray-900 text-white rounded-xl overflow-hidden">
						<div className="p-8 md:p-12">
							<div className="md:flex items-center justify-between">
								<div className="mb-6 md:mb-0">
									<h2 className="text-2xl md:text-3xl font-bold mb-3">
										Нужна индивидуальная услуга?
									</h2>
									<p className="text-gray-300 max-w-2xl">
										Если вы не нашли подходящий вариант среди предложенных
										услуг, свяжитесь с нами, и мы разработаем индивидуальное
										предложение, соответствующее именно вашим требованиям.
									</p>
								</div>
								<div className="flex-shrink-0">
									<Link
										href="/contacts"
										className="inline-block px-8 py-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition duration-300"
									>
										Обсудить детали
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
