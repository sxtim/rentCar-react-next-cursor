"use client"

import { useState } from "react"

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		message: "",
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitted, setSubmitted] = useState(false)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		// Здесь будет логика отправки формы на сервер
		// Эмулируем задержку для демонстрации индикатора загрузки
		setTimeout(() => {
			setIsSubmitting(false)
			setSubmitted(true)
			setFormData({
				name: "",
				phone: "",
				email: "",
				message: "",
			})
		}, 1500)
	}

	return (
		<div className="bg-white rounded-lg shadow-xl p-8">
			<h3 className="text-2xl font-bold mb-6">Связаться с нами</h3>

			{submitted ? (
				<div className="bg-green-50 p-4 rounded-lg border border-green-200 text-green-800 mb-6">
					<div className="flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 mr-2 text-green-600"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clipRule="evenodd"
							/>
						</svg>
						<h4 className="font-semibold">Спасибо за сообщение!</h4>
					</div>
					<p className="mt-2">Мы свяжемся с вами в ближайшее время.</p>
					<button
						className="mt-4 text-green-700 font-medium hover:text-green-800"
						onClick={() => setSubmitted(false)}
					>
						Отправить новое сообщение
					</button>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
						<div>
							<label
								htmlFor="name"
								className="block text-gray-700 font-medium mb-2"
							>
								Ваше имя <span className="text-red-600">*</span>
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								value={formData.name}
								onChange={handleChange}
								className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
								placeholder="Иван Иванов"
							/>
						</div>
						<div>
							<label
								htmlFor="phone"
								className="block text-gray-700 font-medium mb-2"
							>
								Телефон <span className="text-red-600">*</span>
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								required
								value={formData.phone}
								onChange={handleChange}
								className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
								placeholder="+7 (___) ___-__-__"
							/>
						</div>
					</div>

					<div className="mb-6">
						<label
							htmlFor="email"
							className="block text-gray-700 font-medium mb-2"
						>
							Электронная почта
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
							placeholder="example@mail.com"
						/>
					</div>

					<div className="mb-6">
						<label
							htmlFor="message"
							className="block text-gray-700 font-medium mb-2"
						>
							Сообщение <span className="text-red-600">*</span>
						</label>
						<textarea
							id="message"
							name="message"
							required
							rows={4}
							value={formData.message}
							onChange={handleChange}
							className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
							placeholder="Ваше сообщение..."
						/>
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						className={`w-full px-6 py-3 bg-red-600 text-white font-medium rounded-md transition duration-300 ${
							isSubmitting
								? "bg-red-400 cursor-not-allowed"
								: "hover:bg-red-700"
						}`}
					>
						{isSubmitting ? (
							<span className="flex items-center justify-center">
								<svg
									className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Отправка...
							</span>
						) : (
							"Отправить сообщение"
						)}
					</button>
				</form>
			)}
		</div>
	)
}

export default ContactForm
