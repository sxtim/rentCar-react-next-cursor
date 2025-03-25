import Link from "next/link"

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white pt-12 pb-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Contact Information */}
					<div>
						<h3 className="text-xl font-bold mb-4">Контакты</h3>
						<ul className="space-y-2">
							<li className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 mr-2 text-red-500"
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
								<a href="tel:+74951234567" className="hover:text-red-400">
									+7 (495) 123-45-67
								</a>
							</li>
							<li className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 mr-2 text-red-500"
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
								<a
									href="mailto:info@example.com"
									className="hover:text-red-400"
								>
									info@example.com
								</a>
							</li>
							<li className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 mr-2 text-red-500"
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
								<address className="not-italic">
									г. Москва, ул. Примерная, д. 123
								</address>
							</li>
						</ul>
					</div>

					{/* Navigation */}
					<div>
						<h3 className="text-xl font-bold mb-4">Навигация</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/" className="hover:text-red-400">
									Главная
								</Link>
							</li>
							<li>
								<Link href="/cars" className="hover:text-red-400">
									Автопарк
								</Link>
							</li>
							<li>
								<Link href="/services" className="hover:text-red-400">
									Услуги
								</Link>
							</li>
							<li>
								<Link href="/pricing" className="hover:text-red-400">
									Цены
								</Link>
							</li>
							<li>
								<Link href="/contacts" className="hover:text-red-400">
									Контакты
								</Link>
							</li>
						</ul>
					</div>

					{/* Working Hours */}
					<div>
						<h3 className="text-xl font-bold mb-4">Режим работы</h3>
						<p className="mb-2">Работаем круглосуточно</p>
						<p className="mb-4">Без выходных</p>
						<div className="flex space-x-4">
							<a href="#" className="text-white hover:text-red-400">
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
								</svg>
							</a>
							<a href="#" className="text-white hover:text-red-400">
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
								</svg>
							</a>
							<a href="#" className="text-white hover:text-red-400">
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M15.684 0H8.316C3.726 0 0 3.726 0 8.316v7.368C0 20.274 3.726 24 8.316 24h7.368C20.274 24 24 20.274 24 15.684V8.316C24 3.726 20.274 0 15.684 0zm3.692 4.152c.51 0 .924.414.924.924s-.414.924-.924.924-.924-.414-.924-.924.414-.924.924-.924zM12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm9 9.48v5.712A2.808 2.808 0 0118.192 24H5.808A2.808 2.808 0 013 21.192V9.48A2.79 2.79 0 013.6 8.16 2.79 2.79 0 013 6.84V5.808A2.808 2.808 0 015.808 3h12.384A2.808 2.808 0 0121 5.808v5.712c0 .576-.336 1.08-.828 1.32a2.79 2.79 0 010 2.64c.492.24.828.744.828 1.32z" />
								</svg>
							</a>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
					<p>
						&copy; {new Date().getFullYear()} Элитная Аренда. Все права
						защищены.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
