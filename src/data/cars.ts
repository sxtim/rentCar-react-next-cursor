export interface Car {
	id: string
	name: string
	model: string
	year: number
	category: "luxury" | "sport" | "suv"
	transmission: string
	enginePower: number
	engineVolume: number
	fuelConsumption: number
	features: string[]
	pricePerDay: number
	images: string[]
	description: string
}

export const cars: Car[] = [
	{
		id: "mercedes-s-class",
		name: "Mercedes-Benz",
		model: "S-Class",
		year: 2023,
		category: "luxury",
		transmission: "Автоматическая",
		enginePower: 435,
		engineVolume: 3.0,
		fuelConsumption: 9.5,
		features: [
			"Панорамная крыша",
			"Массаж сидений",
			"Подогрев руля",
			"Аудиосистема Burmester",
			"Адаптивный круиз-контроль",
		],
		pricePerDay: 25000,
		images: [
			"https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1600",
		],
		description:
			"Mercedes-Benz S-Class - флагманский седан, олицетворяющий роскошь и комфорт. Автомобиль оснащен современными технологиями, такими как система ночного видения и умный ассистент вождения.",
	},
	{
		id: "bmw-7",
		name: "BMW",
		model: "7 Series",
		year: 2023,
		category: "luxury",
		transmission: "Автоматическая",
		enginePower: 400,
		engineVolume: 3.0,
		fuelConsumption: 10.2,
		features: [
			"Лазерные фары",
			"Система автопарковки",
			"Подогрев и вентиляция сидений",
			"Премиальная аудиосистема",
			"Четырехзонный климат-контроль",
		],
		pricePerDay: 23000,
		images: [
			"https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600",
		],
		description:
			"BMW 7 Series сочетает в себе роскошь, комфорт и технологии. Это идеальный выбор для тех, кто ценит престиж и инновации в автомобильной индустрии.",
	},
	{
		id: "porsche-911",
		name: "Porsche",
		model: "911",
		year: 2023,
		category: "sport",
		transmission: "PDK",
		enginePower: 450,
		engineVolume: 3.0,
		fuelConsumption: 11.4,
		features: [
			"Sport Chrono Package",
			"Керамические тормоза",
			"Спортивная выхлопная система",
			"Адаптивные спортивные сиденья",
			"Навигационная система",
		],
		pricePerDay: 35000,
		images: [
			"https://images.unsplash.com/photo-1611859266238-4b98091d9d9b?q=80&w=1600",
		],
		description:
			"Porsche 911 - легендарный спортивный автомобиль с уникальным дизайном и выдающимися характеристиками. Его мощный двигатель и отточенная управляемость обеспечивают непревзойденные впечатления от вождения.",
	},
	{
		id: "ferrari-458",
		name: "Ferrari",
		model: "458 Italia",
		year: 2022,
		category: "sport",
		transmission: "Секвентальная",
		enginePower: 570,
		engineVolume: 4.5,
		fuelConsumption: 13.3,
		features: [
			"Карбоновый кузов",
			"Керамические тормоза",
			"Гоночный режим",
			"Спортивные сиденья",
			"Система Launch Control",
		],
		pricePerDay: 65000,
		images: [
			"https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1600",
		],
		description:
			"Ferrari 458 - это настоящее произведение автомобильного искусства. Этот суперкар сочетает в себе итальянский стиль, невероятную мощность и высочайшие технологии.",
	},
	{
		id: "range-rover",
		name: "Range Rover",
		model: "Vogue",
		year: 2023,
		category: "suv",
		transmission: "Автоматическая",
		enginePower: 400,
		engineVolume: 3.0,
		fuelConsumption: 11.5,
		features: [
			"Пневмоподвеска",
			"Система Terrain Response",
			"Панорамная крыша",
			"Кожаный салон",
			"Система кругового обзора",
		],
		pricePerDay: 28000,
		images: [
			"https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=1600",
		],
		description:
			"Range Rover Vogue - это роскошный внедорожник, сочетающий в себе комфорт, роскошь и непревзойденные внедорожные качества. Идеален для любых дорожных условий и безупречно смотрится как в городе, так и на природе.",
	},
	{
		id: "g-class",
		name: "Mercedes-Benz",
		model: "G-Class",
		year: 2023,
		category: "suv",
		transmission: "Автоматическая",
		enginePower: 416,
		engineVolume: 4.0,
		fuelConsumption: 12.8,
		features: [
			"Постоянный полный привод",
			"Три блокировки дифференциала",
			"Адаптивная подвеска",
			"Панорамная крыша",
			"Премиальная аудиосистема",
		],
		pricePerDay: 32000,
		images: [
			"https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=1600",
		],
		description:
			"Mercedes-Benz G-Class - легендарный внедорожник, сочетающий в себе брутальный дизайн, роскошь и необычайную проходимость. Эта модель стала олицетворением престижа и свободы.",
	},
	{
		id: "urus",
		name: "Lamborghini",
		model: "Urus",
		year: 2023,
		category: "suv",
		transmission: "Автоматическая",
		enginePower: 650,
		engineVolume: 4.0,
		fuelConsumption: 12.7,
		features: [
			"Адаптивная пневмоподвеска",
			"Карбон-керамические тормоза",
			"Спортивные сиденья",
			"Аудиосистема Bang & Olufsen",
			"Система Lamborghini Dynamic Control",
		],
		pricePerDay: 48000,
		images: [
			"https://images.unsplash.com/photo-1632245889029-e406faaa34cd?q=80&w=1600",
		],
		description:
			"Lamborghini Urus - первый суперкроссовер в мире, сочетающий в себе мощь спорткара и практичность внедорожника. Это идеальный автомобиль для тех, кто хочет выделяться из толпы.",
	},
	{
		id: "audi-a8",
		name: "Audi",
		model: "A8",
		year: 2023,
		category: "luxury",
		transmission: "Автоматическая",
		enginePower: 340,
		engineVolume: 3.0,
		fuelConsumption: 8.2,
		features: [
			"Адаптивная пневмоподвеска",
			"Матричные LED-фары",
			"Виртуальная приборная панель",
			"Массажные сиденья",
			"Система ночного видения",
		],
		pricePerDay: 22000,
		images: [
			"https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1600",
		],
		description:
			"Audi A8 - представительский седан, воплощающий инновации и элегантность. Этот автомобиль предлагает исключительный комфорт и передовые технологии для самых взыскательных клиентов.",
	},
	{
		id: "mclaren-720s",
		name: "McLaren",
		model: "720S",
		year: 2023,
		category: "sport",
		transmission: "Секвентальная",
		enginePower: 720,
		engineVolume: 4.0,
		fuelConsumption: 12.2,
		features: [
			"Карбоновый монокок",
			"Активная аэродинамика",
			"Гидравлическая подвеска Proactive Chassis Control II",
			"Карбон-керамические тормоза",
			"Складывающаяся приборная панель",
		],
		pricePerDay: 58000,
		images: [
			"https://images.unsplash.com/photo-1573950940509-d924ee3fd345?q=80&w=1600",
		],
		description:
			"McLaren 720S - настоящий инженерный шедевр с революционным дизайном. Этот суперкар впечатляет не только своей мощностью, но и технологическими инновациями.",
	},
	{
		id: "bentley-continental",
		name: "Bentley",
		model: "Continental GT",
		year: 2023,
		category: "luxury",
		transmission: "Автоматическая",
		enginePower: 550,
		engineVolume: 6.0,
		fuelConsumption: 13.6,
		features: [
			"Кожаная отделка ручной работы",
			"Вращающаяся приборная панель",
			"Аудиосистема Naim",
			"Подогрев, вентиляция и массаж сидений",
			"Адаптивная пневмоподвеска",
		],
		pricePerDay: 40000,
		images: [
			"https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600",
		],
		description:
			"Bentley Continental GT - роскошное купе, сочетающее в себе комфорт, динамику и истинно британскую элегантность. Это автомобиль для тех, кто ценит традиции и престиж.",
	},
	{
		id: "bentley-bentayga",
		name: "Bentley",
		model: "Bentayga",
		year: 2023,
		category: "suv",
		transmission: "Автоматическая",
		enginePower: 550,
		engineVolume: 4.0,
		fuelConsumption: 13.3,
		features: [
			"Пневмоподвеска",
			"Система Bentley Dynamic Ride",
			"Панорамная крыша",
			"Развлекательная система для задних пассажиров",
			"Отделка салона из натуральных материалов",
		],
		pricePerDay: 38000,
		images: [
			"https://images.unsplash.com/photo-1549399542-7e8f2e928464?q=80&w=1600",
		],
		description:
			"Bentley Bentayga - роскошный внедорожник, сочетающий в себе величие Bentley с практичностью SUV. Это идеальный выбор для тех, кто ценит комфорт и статус в любых условиях.",
	},
]

export const getCarsByCategory = (category: string) => {
	return cars.filter(car => car.category === category)
}

export const getCarById = (id: string) => {
	return cars.find(car => car.id === id)
}
