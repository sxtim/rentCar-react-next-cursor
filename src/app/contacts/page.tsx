import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"

export default function ContactsPage() {
	return (
		<>
			<Header />

			<div className="py-12 bg-gray-50">
				<div className="container mx-auto px-4">
					{/* Page Title */}
					<div className="text-center mb-12">
						<h1 className="text-3xl md:text-4xl font-bold mb-3">Контакты</h1>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Свяжитесь с нами любым удобным способом. Наши специалисты всегда
							готовы ответить на ваши вопросы и помочь с выбором автомобиля.
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
						{/* Contact Info */}
						<div>
							<div className="bg-white rounded-lg shadow-xl p-8 h-full">
								<h2 className="text-2xl font-bold mb-6">Наши контакты</h2>

								<div className="space-y-6">
									<div className="flex items-start">
										<div className="bg-red-100 rounded-full p-3 mr-4">
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
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="text-lg font-semibold mb-1">Телефон</h3>
											<p className="text-gray-600 mb-1">
												Круглосуточно, без выходных
											</p>
											<a
												href="tel:+74951234567"
												className="text-red-600 font-medium text-lg hover:underline"
											>
												+7 (495) 123-45-67
											</a>
										</div>
									</div>

									<div className="flex items-start">
										<div className="bg-red-100 rounded-full p-3 mr-4">
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
													d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="text-lg font-semibold mb-1">Email</h3>
											<p className="text-gray-600 mb-1">
												Ответим в течение 24 часов
											</p>
											<a
												href="mailto:info@example.com"
												className="text-red-600 font-medium hover:underline"
											>
												info@example.com
											</a>
										</div>
									</div>

									<div className="flex items-start">
										<div className="bg-red-100 rounded-full p-3 mr-4">
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
													d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
												/>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="text-lg font-semibold mb-1">Адрес</h3>
											<p className="text-gray-600 mb-1">
												Ежедневно с 9:00 до 21:00
											</p>
											<address className="not-italic">
												г. Москва, ул. Примерная, д. 123
											</address>
										</div>
									</div>

									<div className="flex items-start">
										<div className="bg-red-100 rounded-full p-3 mr-4">
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
													d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
												/>
											</svg>
										</div>
										<div>
											<h3 className="text-lg font-semibold mb-1">
												Режим работы
											</h3>
											<p className="text-gray-600 mb-1">Прием заявок</p>
											<p>Круглосуточно, без выходных</p>
										</div>
									</div>
								</div>

								<div className="mt-10">
									<h3 className="text-lg font-semibold mb-4">
										Мы в социальных сетях
									</h3>
									<div className="flex space-x-4">
										<a
											href="#"
											className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-full transition duration-300"
										>
											<svg
												className="h-5 w-5"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
											</svg>
										</a>
										<a
											href="#"
											className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-full transition duration-300"
										>
											<svg
												className="h-5 w-5"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
											</svg>
										</a>
										<a
											href="#"
											className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-full transition duration-300"
										>
											<svg
												className="h-5 w-5"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
											</svg>
										</a>
										<a
											href="#"
											className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-full transition duration-300"
										>
											<svg
												className="h-5 w-5"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div>
							<ContactForm />
						</div>
					</div>

					{/* Map */}
					<div className="mt-12">
						<div className="bg-white rounded-lg shadow-xl p-2 h-[400px] relative overflow-hidden">
							<Image
								src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?q=80&w=1600"
								alt="Карта расположения офиса"
								fill
								className="object-cover"
							/>
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="bg-red-600 text-white p-4 rounded-full shadow-lg transform -translate-y-10 z-10">
									<svg
										className="h-8 w-8"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
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
