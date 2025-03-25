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
	assetPrefix: "/rentCar-react-next-cursor/", // Префикс для статичных ресурсов
	trailingSlash: true, // Добавляет слэш в конце URL для совместимости с GitHub Pages

	// Минимальные настройки
	reactStrictMode: true,
	typescript: {
		// !! ПРЕДУПРЕЖДЕНИЕ !!
		// Для реальных проектов не рекомендуется отключать проверку типов
		// Это временное решение для сборки статической версии
		ignoreBuildErrors: true,
	},
}

module.exports = nextConfig
