import Image from "next/image"

const WhyChooseUs = () => {
	const advantages = [
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			),
			title: "Быстрое оформление",
			description:
				"Минимум документов, быстрое оформление договора и выдача автомобиля в течение 30 минут.",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10"
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
			),
			title: "Безопасность",
			description:
				"Все наши автомобили проходят регулярное техническое обслуживание и полностью застрахованы.",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
					/>
				</svg>
			),
			title: "Выгодные цены",
			description:
				"Гибкая система скидок для постоянных клиентов, специальные тарифы на длительную аренду.",
		},
		{
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					/>
				</svg>
			),
			title: "Поддержка 24/7",
			description:
				"Наша служба поддержки работает круглосуточно и без выходных. Мы всегда на связи.",
		},
	]

	return (
		<section className="py-16 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Почему выбирают нас
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Мы предлагаем лучший сервис аренды элитных автомобилей в Москве,
						гарантируя высокое качество обслуживания и индивидуальный подход к
						каждому клиенту.
					</p>
				</div>

				<div className="flex flex-col md:flex-row items-center mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
					<div className="md:w-1/2 relative h-[300px] md:h-[400px]">
						<Image
							src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1600"
							alt="Наши преимущества"
							fill
							className="object-cover"
						/>
					</div>
					<div className="md:w-1/2 p-8">
						<h3 className="text-2xl font-bold mb-4">
							Элитные автомобили для любых целей
						</h3>
						<p className="text-gray-600 mb-6">
							В нашем автопарке представлены лучшие модели от премиальных
							брендов: Ferrari, Lamborghini, Bentley, Rolls-Royce,
							Mercedes-Benz, BMW, Audi и многих других. Все автомобили в
							идеальном техническом состоянии и готовы к эксплуатации в любых
							условиях.
						</p>
						<ul className="space-y-2">
							<li className="flex items-start">
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
								<span>Более 50 моделей автомобилей на выбор</span>
							</li>
							<li className="flex items-start">
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
								<span>Регулярное обновление автопарка</span>
							</li>
							<li className="flex items-start">
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
								<span>Индивидуальный подбор автомобиля под ваши задачи</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{advantages.map((item, index) => (
						<div
							key={index}
							className="bg-white p-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2"
						>
							<div className="flex justify-center mb-4 text-red-600">
								{item.icon}
							</div>
							<h3 className="text-xl font-bold mb-2">{item.title}</h3>
							<p className="text-gray-600">{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default WhyChooseUs
