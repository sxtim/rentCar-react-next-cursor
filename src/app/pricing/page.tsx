import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"
import Link from "next/link"

export default function PricingPage() {
	const pricingPlans = [
		{
			id: "standard",
			name: "Стандарт",
			description: "Идеально для краткосрочной аренды на 1-3 дня",
			price: "от 15 000 ₽",
			unit: "сутки",
			features: [
				"Страхование ОСАГО",
				"Подача в пределах МКАД",
				"Лимит пробега 200 км/сутки",
				"Техническая поддержка",
				"Базовая комплектация",
			],
			availableCars: ["Бизнес-класс", "Стандартные внедорожники"],
			image:
				"https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1600",
		},
		{
			id: "premium",
			name: "Премиум",
			description: "Оптимальный вариант для аренды на 3-7 дней",
			price: "от 25 000 ₽",
			unit: "сутки",
			features: [
				"Страхование КАСКО и ОСАГО",
				"Бесплатная подача в пределах МКАД",
				"Лимит пробега 250 км/сутки",
				"Круглосуточная поддержка",
				"Расширенная комплектация",
				"Скидка 10% от 3-х дней аренды",
			],
			availableCars: [
				"Премиум-класс",
				"Спортивные автомобили",
				"Премиум внедорожники",
			],
			image:
				"https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600",
		},
		{
			id: "vip",
			name: "VIP",
			description: "Эксклюзивные условия для длительной аренды",
			price: "от 45 000 ₽",
			unit: "сутки",
			features: [
				"Полное страхование без франшизы",
				"Подача по Москве и области",
				"Без ограничения пробега",
				"Персональный менеджер",
				"Максимальная комплектация",
				"Скидка 15% от 7 дней аренды",
				"Возможность смены автомобиля",
			],
			availableCars: [
				"Представительский класс",
				"Эксклюзивные модели",
				"Лимузины",
				"Суперкары",
			],
			image:
				"https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600",
		},
	]

	const additionalServices = [
		{ name: "Услуги водителя", price: "10 000 ₽", unit: "день" },
		{ name: "Детское кресло", price: "1 000 ₽", unit: "день" },
		{ name: "Автомобильный навигатор", price: "500 ₽", unit: "день" },
		{ name: "Дополнительное страхование", price: "5 000 ₽", unit: "аренда" },
		{ name: "Увеличение лимита пробега", price: "25 ₽", unit: "км" },
		{ name: "Подача за пределы МКАД", price: "50 ₽", unit: "км" },
	]

	const specialOffers = [
		{
			name: "Скидка 15% на аренду в будние дни",
			condition: "В понедельник, вторник и среду",
		},
		{
			name: "Скидка 20% на второй автомобиль",
			condition: "При аренде двух и более автомобилей",
		},
		{ name: "Бесплатная подача за МКАД", condition: "При аренде от 5 дней" },
		{
			name: "Бесплатный дополнительный водитель",
			condition: "При аренде от 7 дней",
		},
	]

	return (
		<>
			<Header />

			<div className="py-12 bg-gray-50">
				<div className="container mx-auto px-4">
					{/* Page Title */}
					<div className="text-center mb-12">
						<h1 className="text-3xl md:text-4xl font-bold mb-3">
							Тарифы и цены
						</h1>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Мы предлагаем выгодные условия аренды элитных автомобилей для
							любых целей. Выберите тариф, который подходит именно вам.
						</p>
					</div>

					{/* Pricing Plans */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
						{pricingPlans.map(plan => (
							<div
								key={plan.id}
								className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
							>
								<div className="relative h-40 w-full">
									<Image
										src={plan.image}
										alt={plan.name}
										fill
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
									<div className="absolute bottom-0 left-0 p-6">
										<h2 className="text-2xl font-bold text-white">
											{plan.name}
										</h2>
										<p className="text-white/80">{plan.description}</p>
									</div>
								</div>
								<div className="p-6">
									<div className="mb-6">
										<span className="text-4xl font-bold text-red-600">
											{plan.price}
										</span>
										<span className="text-gray-600"> / {plan.unit}</span>
									</div>

									<div className="mb-8">
										<h3 className="font-semibold mb-3">Включено:</h3>
										<ul className="space-y-2">
											{plan.features.map((feature, index) => (
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

									<div className="mb-8">
										<h3 className="font-semibold mb-3">
											Доступные автомобили:
										</h3>
										<ul className="space-y-1">
											{plan.availableCars.map((car, index) => (
												<li key={index} className="text-gray-600">
													&bull; {car}
												</li>
											))}
										</ul>
									</div>

									<Link
										href="/cars"
										className="block w-full py-3 text-center bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition duration-300"
									>
										Выбрать автомобиль
									</Link>
								</div>
							</div>
						))}
					</div>

					{/* Additional Services */}
					<div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
						<div className="p-8">
							<h2 className="text-2xl font-bold mb-6">Дополнительные услуги</h2>
							<div className="overflow-x-auto">
								<table className="w-full">
									<thead>
										<tr className="border-b">
											<th className="py-3 text-left">Услуга</th>
											<th className="py-3 text-right">Стоимость</th>
										</tr>
									</thead>
									<tbody>
										{additionalServices.map((service, index) => (
											<tr key={index} className="border-b">
												<td className="py-4">{service.name}</td>
												<td className="py-4 text-right font-medium">
													{service.price}{" "}
													<span className="text-gray-600 text-sm">
														/ {service.unit}
													</span>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>

					{/* Special Offers */}
					<div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
						<div className="p-8">
							<h2 className="text-2xl font-bold mb-6">
								Специальные предложения
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{specialOffers.map((offer, index) => (
									<div key={index} className="flex">
										<div className="bg-red-100 rounded-full p-3 mr-4 h-12 w-12 flex items-center justify-center flex-shrink-0">
											<svg
												className="h-6 w-6 text-red-600"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="font-semibold mb-1">{offer.name}</h3>
											<p className="text-gray-600 text-sm">{offer.condition}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* FAQ */}
					<div className="bg-white rounded-lg shadow-lg overflow-hidden">
						<div className="p-8">
							<h2 className="text-2xl font-bold mb-6">
								Часто задаваемые вопросы
							</h2>
							<div className="space-y-6">
								<div>
									<h3 className="text-lg font-semibold mb-2">
										Что включено в стоимость аренды?
									</h3>
									<p className="text-gray-600">
										В базовую стоимость аренды включено: страхование ОСАГО,
										подача автомобиля в пределах МКАД, техническая поддержка на
										время аренды. Дополнительные услуги и опции можно выбрать
										при оформлении заказа.
									</p>
								</div>
								<div>
									<h3 className="text-lg font-semibold mb-2">
										Какой залог требуется при аренде?
									</h3>
									<p className="text-gray-600">
										Размер залога зависит от класса автомобиля и срока аренды.
										Для стандартных автомобилей залог составляет от 50 000 ₽,
										для премиальных – от 100 000 ₽, для эксклюзивных моделей –
										от 200 000 ₽. Постоянным клиентам предоставляем аренду без
										залога.
									</p>
								</div>
								<div>
									<h3 className="text-lg font-semibold mb-2">
										Как происходит подача и возврат автомобиля?
									</h3>
									<p className="text-gray-600">
										Мы доставляем автомобиль в удобное для вас место и время в
										пределах МКАД. Также возможна подача за МКАД за
										дополнительную плату. Возврат автомобиля осуществляется в
										наш офис или в другое согласованное место.
									</p>
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
