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
	basePath: "/projects/test", // Базовый путь GitHub Pages
	trailingSlash: true, // Добавляет слэш в конце URL для совместимости с GitHub Pages
}

module.exports = nextConfig
