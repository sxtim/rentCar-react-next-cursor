"use client"

import Link from "next/link"
import { useState } from "react"

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="sticky top-0 z-50 bg-white shadow-md">
			<div className="container mx-auto px-4 py-3">
				<div className="flex items-center justify-between">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link href="/" className="flex items-center">
							<h1 className="text-2xl font-bold text-red-600">
								Элитная Аренда
							</h1>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-6">
						<Link
							href="/"
							className="text-gray-800 hover:text-red-600 font-medium"
						>
							Главная
						</Link>
						<Link
							href="/cars"
							className="text-gray-800 hover:text-red-600 font-medium"
						>
							Автопарк
						</Link>
						<Link
							href="/services"
							className="text-gray-800 hover:text-red-600 font-medium"
						>
							Услуги
						</Link>
						<Link
							href="/pricing"
							className="text-gray-800 hover:text-red-600 font-medium"
						>
							Цены
						</Link>
						<Link
							href="/about"
							className="text-gray-800 hover:text-red-600 font-medium"
						>
							О нас
						</Link>
						<Link
							href="/contacts"
							className="text-gray-800 hover:text-red-600 font-medium"
						>
							Контакты
						</Link>
					</div>

					{/* Contact Info */}
					<div className="hidden md:flex flex-col items-end">
						<a
							href="tel:+74951234567"
							className="text-red-600 font-bold text-xl"
						>
							+7 (495) 123-45-67
						</a>
						<span className="text-sm text-gray-600">Круглосуточно</span>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							type="button"
							className="text-gray-800"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? (
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-white border-t">
					<div className="container mx-auto px-4 py-3">
						<div className="flex flex-col space-y-3">
							<Link
								href="/"
								className="text-gray-800 hover:text-red-600 font-medium"
							>
								Главная
							</Link>
							<Link
								href="/cars"
								className="text-gray-800 hover:text-red-600 font-medium"
							>
								Автопарк
							</Link>
							<Link
								href="/services"
								className="text-gray-800 hover:text-red-600 font-medium"
							>
								Услуги
							</Link>
							<Link
								href="/pricing"
								className="text-gray-800 hover:text-red-600 font-medium"
							>
								Цены
							</Link>
							<Link
								href="/about"
								className="text-gray-800 hover:text-red-600 font-medium"
							>
								О нас
							</Link>
							<Link
								href="/contacts"
								className="text-gray-800 hover:text-red-600 font-medium"
							>
								Контакты
							</Link>
							<div className="py-2">
								<a
									href="tel:+74951234567"
									className="text-red-600 font-bold text-xl"
								>
									+7 (495) 123-45-67
								</a>
								<div className="text-sm text-gray-600">Круглосуточно</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</header>
	)
}

export default Header
