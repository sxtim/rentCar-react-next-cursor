import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Link from "next/link"
import Script from "next/script"

export default function NotFound() {
	return (
		<>
			<Header />
			<Script id="redirect-script" strategy="afterInteractive">
				{`
				(function() {
					var basePath = '/rentCar-react-next-cursor';
					var fullPath = window.location.pathname;
					var pathToRedirect = fullPath.replace(basePath, '');
					
					if (!pathToRedirect.includes('.') && !pathToRedirect.includes('/_next')) {
						sessionStorage.setItem('redirect', pathToRedirect);
						window.location.replace(basePath + '/');
					}
				})();
				`}
			</Script>
			<div className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center text-center">
				<h1 className="text-4xl md:text-6xl font-bold mb-6">404</h1>
				<h2 className="text-2xl md:text-3xl font-semibold mb-4">
					Страница не найдена
				</h2>
				<p className="text-lg text-gray-600 mb-8 max-w-xl">
					Извините, запрашиваемая вами страница не существует или была
					перемещена.
				</p>
				<Link
					href="/"
					className="px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition duration-300"
				>
					Вернуться на главную
				</Link>
			</div>
			<Footer />
		</>
	)
}
