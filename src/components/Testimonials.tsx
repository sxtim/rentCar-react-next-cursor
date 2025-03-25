"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
// Импортируем Swiper и необходимые модули
import {
	Autoplay,
	EffectCoverflow,
	Navigation,
	Pagination,
} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

// Стили Swiper теперь импортируются в layout.tsx

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
	const [domLoaded, setDomLoaded] = useState(false)

	// Swiper требует, чтобы мы отрендерили его только на клиенте
	useEffect(() => {
		setDomLoaded(true)
	}, [])

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
					{domLoaded && (
						<Swiper
							modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
							effect="coverflow"
							grabCursor={true}
							centeredSlides={true}
							coverflowEffect={{
								rotate: 0,
								stretch: 0,
								depth: 100,
								modifier: 2.5,
								slideShadows: false,
							}}
							initialSlide={1}
							slidesPerView={"auto"}
							spaceBetween={30}
							navigation={{
								nextEl: ".swiper-button-next",
								prevEl: ".swiper-button-prev",
							}}
							pagination={{
								clickable: true,
								el: ".swiper-pagination",
							}}
							autoplay={{
								delay: 5000,
								disableOnInteraction: false,
								pauseOnMouseEnter: true,
							}}
							loop={true}
							className="testimonials-swiper cursor-pointer"
						>
							{testimonials.map(testimonial => (
								<SwiperSlide
									key={testimonial.id}
									className="!w-full max-w-3xl mx-auto"
								>
									<div className="p-8 bg-gray-800 rounded-lg shadow-xl transition-all duration-300 hover:bg-gray-700">
										<div className="flex flex-col md:flex-row md:items-center mb-6">
											<div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-4">
												<Image
													src={testimonial.image}
													alt={testimonial.name}
													fill
													className="object-cover"
												/>
											</div>
											<div>
												<h3 className="text-xl font-bold">
													{testimonial.name}
												</h3>
												<p className="text-red-400">{testimonial.position}</p>
											</div>
										</div>
										<div className="mb-2">
											<svg
												className="h-8 w-8 text-red-500 mb-4"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
											</svg>
											<p className="text-lg text-gray-300">
												{testimonial.content}
											</p>
										</div>
									</div>
								</SwiperSlide>
							))}

							{/* Кастомные кнопки навигации */}
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>

							{/* Кастомная пагинация */}
							<div className="swiper-pagination !static mt-8"></div>
						</Swiper>
					)}
				</div>
			</div>
		</section>
	)
}

export default Testimonials
