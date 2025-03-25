"use client"

import Image from "next/image"
import { useState } from "react"

const testimonials = [
	{
		id: 1,
		name: "Алексей Смирнов",
		position: "Бизнесмен",
		image:
			"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300",
		content:
			"Пользуюсь услугами компании уже более 2 лет. Всегда отличный сервис, машины в идеальном состоянии. Особенно нравится оперативность и гибкость в оформлении.",
	},
	{
		id: 2,
		name: "Екатерина Иванова",
		position: "Фотограф",
		image:
			"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300",
		content:
			"Арендовала Mercedes для фотосессии. Машина пришла чистая, в отличном состоянии. Персонал очень вежливый и профессиональный. Рекомендую!",
	},
	{
		id: 3,
		name: "Дмитрий Козлов",
		position: "IT-специалист",
		image:
			"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300",
		content:
			"Отличный сервис! Брал BMW на выходные. Оформление быстрое, без лишних документов. Цена соответствует качеству предоставляемых услуг.",
	},
	{
		id: 4,
		name: "Ольга Петрова",
		position: "Маркетолог",
		image:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300",
		content:
			"Просто потрясающий сервис! Арендовала автомобиль для деловой поездки. Всё прошло идеально, машина в превосходном состоянии.",
	},
]

const Testimonials = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	const handlePrev = () => {
		setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))
	}

	const handleNext = () => {
		setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))
	}

	return (
		<section className="py-16 bg-gray-900 text-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Что говорят наши клиенты
					</h2>
					<p className="text-gray-300 max-w-2xl mx-auto">
						Мы ценим отзывы наших клиентов и постоянно работаем над улучшением
						сервиса
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="relative">
						{/* Testimonial */}
						<div className="p-8 bg-gray-800 rounded-lg shadow-xl">
							<div className="flex flex-col md:flex-row md:items-center mb-6">
								<div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-4">
									<Image
										src={testimonials[activeIndex].image}
										alt={testimonials[activeIndex].name}
										fill
										className="object-cover"
									/>
								</div>
								<div>
									<h3 className="text-xl font-bold">
										{testimonials[activeIndex].name}
									</h3>
									<p className="text-red-400">
										{testimonials[activeIndex].position}
									</p>
								</div>
							</div>
							<div className="mb-6">
								<svg
									className="h-8 w-8 text-red-500 mb-4"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
								</svg>
								<p className="text-lg text-gray-300">
									{testimonials[activeIndex].content}
								</p>
							</div>
						</div>

						{/* Navigation buttons */}
						<button
							className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 bg-red-600 rounded-full p-2 shadow-lg hidden md:block hover:bg-red-700"
							onClick={handlePrev}
						>
							<svg
								className="h-6 w-6 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M15 19l-7-7 7-7"
								/>
							</svg>
						</button>
						<button
							className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 bg-red-600 rounded-full p-2 shadow-lg hidden md:block hover:bg-red-700"
							onClick={handleNext}
						>
							<svg
								className="h-6 w-6 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</button>
					</div>

					{/* Dots for mobile */}
					<div className="flex justify-center gap-2 mt-6 md:hidden">
						{testimonials.map((_, index) => (
							<button
								key={index}
								className={`h-3 w-3 rounded-full ${
									index === activeIndex ? "bg-red-600" : "bg-gray-600"
								}`}
								onClick={() => setActiveIndex(index)}
								aria-label={`View testimonial ${index + 1}`}
							/>
						))}
					</div>

					{/* Desktop Indicators */}
					<div className="hidden md:flex justify-center gap-3 mt-8">
						{testimonials.map((_, index) => (
							<button
								key={index}
								className={`h-4 w-4 rounded-full transition-colors duration-300 ${
									index === activeIndex
										? "bg-red-600"
										: "bg-gray-600 hover:bg-gray-500"
								}`}
								onClick={() => setActiveIndex(index)}
								aria-label={`View testimonial ${index + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Testimonials
