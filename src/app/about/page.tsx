import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
	const teamMembers = [
		{
			name: "Александр Петров",
			position: "Генеральный директор",
			image:
				"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687",
			description:
				"Более 15 лет опыта в автомобильном бизнесе. Отвечает за стратегическое развитие компании и расширение автопарка.",
		},
		{
			name: "Елена Соколова",
			position: "Руководитель отдела продаж",
			image:
				"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688",
			description:
				"Эксперт в области премиального сервиса. Контролирует качество обслуживания клиентов и координирует работу менеджеров.",
		},
		{
			name: "Михаил Иванов",
			position: "Технический директор",
			image:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470",
			description:
				"Отвечает за техническое состояние всех автомобилей. Имеет сертификаты от ведущих производителей элитных автомобилей.",
		},
		{
			name: "Наталья Кузнецова",
			position: "Маркетолог",
			image:
				"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761",
			description:
				"Разрабатывает маркетинговые стратегии и программы лояльности. Более 10 лет опыта в маркетинге премиальных брендов.",
		},
	]

	const milestones = [
		{
			year: "2010",
			title: "Основание компании",
			description:
				"Наша компания была основана с флотом из 5 автомобилей премиум-класса.",
		},
		{
			year: "2013",
			title: "Расширение автопарка",
			description:
				"Добавление спортивных автомобилей и внедорожников, расширение до 20 автомобилей.",
		},
		{
			year: "2016",
			title: "Открытие VIP-направления",
			description:
				"Запуск специализированного направления по обслуживанию VIP-клиентов и бизнес-мероприятий.",
		},
		{
			year: "2019",
			title: "Признание лидером рынка",
			description:
				"Получение престижной премии «Лучший сервис аренды премиальных автомобилей».",
		},
		{
			year: "2022",
			title: "Международное партнерство",
			description:
				"Заключение партнерских соглашений с европейскими компаниями по аренде элитных автомобилей.",
		},
	]

	return (
		<>
			<Header />

			<main>
				{/* Hero Section */}
				<section className="relative h-[50vh] flex items-center">
					<div className="absolute inset-0">
						<Image
							src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1740"
							alt="Luxury Cars"
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-black/60"></div>
					</div>
					<div className="container mx-auto px-4 relative z-10 text-white text-center">
						<h1 className="text-4xl md:text-5xl font-bold mb-4">
							О нашей компании
						</h1>
						<p className="text-xl max-w-3xl mx-auto">
							15 лет безупречной репутации на рынке аренды элитных автомобилей
						</p>
					</div>
				</section>

				{/* Company Story */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="flex flex-col md:flex-row gap-12 items-center">
							<div className="md:w-1/2">
								<h2 className="text-3xl font-bold mb-6">Наша история</h2>
								<p className="text-gray-600 mb-4">
									Компания <strong>Elite Car Rentals</strong> была основана в
									2010 году группой энтузиастов и любителей премиальных
									автомобилей. Начав с небольшого автопарка из 5 машин
									бизнес-класса, мы постепенно расширяли предложение, добавляя в
									коллекцию новые модели спортивных автомобилей, внедорожников и
									представительских седанов.
								</p>
								<p className="text-gray-600 mb-4">
									Сегодня мы - признанный лидер на рынке аренды элитных
									автомобилей в Москве. Наш автопарк насчитывает более 50
									автомобилей от ведущих мировых производителей: Ferrari,
									Lamborghini, Bentley, Rolls-Royce, Mercedes-Benz, BMW, Audi и
									других.
								</p>
								<p className="text-gray-600 mb-4">
									Мы гордимся тем, что предоставляем нашим клиентам не просто
									автомобили, а эмоции и впечатления. Каждый автомобиль в нашем
									парке тщательно подбирается, регулярно обслуживается и
									поддерживается в идеальном техническом и эстетическом
									состоянии.
								</p>
							</div>
							<div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
								<Image
									src="https://images.unsplash.com/photo-1549194898-58665b2e4c74?q=80&w=1740"
									alt="Elite Car Rentals Office"
									fill
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Company Values */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold mb-12 text-center">
							Наши ценности
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-white p-8 rounded-lg shadow-md text-center">
								<div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-8 w-8 text-red-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-bold mb-3">Безопасность</h3>
								<p className="text-gray-600">
									Все наши автомобили регулярно проходят техническое
									обслуживание у официальных дилеров. Мы уделяем особое внимание
									вопросам безопасности наших клиентов.
								</p>
							</div>
							<div className="bg-white p-8 rounded-lg shadow-md text-center">
								<div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-8 w-8 text-red-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13 10V3L4 14h7v7l9-11h-7z"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-bold mb-3">Качество</h3>
								<p className="text-gray-600">
									Мы стремимся предоставлять исключительный сервис во всех
									аспектах нашей работы, от состояния автомобилей до
									индивидуального подхода к каждому клиенту.
								</p>
							</div>
							<div className="bg-white p-8 rounded-lg shadow-md text-center">
								<div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-8 w-8 text-red-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-bold mb-3">
									Клиентоориентированность
								</h3>
								<p className="text-gray-600">
									Мы всегда прислушиваемся к пожеланиям наших клиентов и готовы
									пойти навстречу, чтобы сделать ваш опыт аренды максимально
									комфортным и приятным.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Company Milestones */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold mb-12 text-center">
							Ключевые этапы
						</h2>
						<div className="relative">
							{/* Timeline Line */}
							<div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 -translate-x-1/2 hidden md:block"></div>

							{/* Timeline Items */}
							<div className="space-y-12">
								{milestones.map((milestone, index) => (
									<div
										key={index}
										className={`flex flex-col md:flex-row md:items-center ${
											index % 2 === 0 ? "md:flex-row-reverse" : ""
										}`}
									>
										<div className="md:w-1/2 mb-4 md:mb-0">
											<div
												className={`p-6 bg-white rounded-lg shadow-md ${
													index % 2 === 0 ? "md:ml-12" : "md:mr-12"
												}`}
											>
												<span className="text-sm text-red-600 font-semibold block mb-2">
													{milestone.year}
												</span>
												<h3 className="text-xl font-bold mb-2">
													{milestone.title}
												</h3>
												<p className="text-gray-600">{milestone.description}</p>
											</div>
										</div>
										<div className="md:w-12 relative hidden md:block">
											<div className="absolute top-1/2 left-1/2 w-8 h-8 bg-red-600 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
										</div>
										<div className="md:w-1/2"></div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Team Section */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold mb-12 text-center">
							Наша команда
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{teamMembers.map((member, index) => (
								<div
									key={index}
									className="bg-white rounded-lg shadow-lg overflow-hidden"
								>
									<div className="relative h-80">
										<Image
											src={member.image}
											alt={member.name}
											fill
											className="object-cover"
										/>
									</div>
									<div className="p-6">
										<h3 className="text-xl font-bold mb-1">{member.name}</h3>
										<p className="text-red-600 mb-4">{member.position}</p>
										<p className="text-gray-600">{member.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Call to Action */}
				<section className="py-16 bg-red-600 text-white">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl font-bold mb-6">
							Готовы испытать премиальный опыт?
						</h2>
						<p className="text-xl mb-8 max-w-3xl mx-auto">
							Присоединяйтесь к сотням довольных клиентов, которые уже оценили
							наш сервис. Арендуйте автомобиль своей мечты прямо сейчас!
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link
								href="/cars"
								className="px-8 py-4 bg-white text-red-600 font-medium text-lg rounded-md hover:bg-gray-100 transition duration-300"
							>
								Смотреть автомобили
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
