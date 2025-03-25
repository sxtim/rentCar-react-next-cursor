/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // Экспорт в статические файлы
	images: {
		unoptimized: true, // Для статического экспорта нужно отключить оптимизацию изображений
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
		],
	},
	basePath: "/rentCar-react-next-cursor", // Базовый путь GitHub Pages
	trailingSlash: true, // Добавляет слэш в конце URL для совместимости с GitHub Pages

	// Базовые улучшения производительности
	reactStrictMode: true,
	swcMinify: true, // Использовать SWC для минификации
}

module.exports = nextConfig
