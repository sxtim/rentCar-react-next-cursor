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
	assetPrefix: "/rentCar-react-next-cursor/", // Префикс для ассетов (JS, CSS)

	// Настройки для оптимизации и кеширования
	experimental: {
		turboDrive: false, // Отключаем для статического экспорта
		optimizeCss: true, // Оптимизация CSS
	},

	// Улучшения производительности
	reactStrictMode: true,
	swcMinify: true, // Использовать SWC для минификации
	compress: true, // Сжимать ответы
}

module.exports = nextConfig
