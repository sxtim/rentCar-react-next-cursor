"use client"

import Link from "next/link"
import { useCallback } from "react"
import Particles from "react-tsparticles"
import type { Engine } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"

const HeroBanner = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine)
	}, [])

	return (
		<div className="relative bg-gradient-to-b from-black to-red-900 h-[600px] flex items-center">
			{/* Particles animation background */}
			<div className="absolute inset-0 z-0 pointer-events-none">
				<Particles
					id="tsparticles"
					init={particlesInit}
					options={{
						background: {
							color: {
								value: "transparent",
							},
						},
						fpsLimit: 120,
						particles: {
							color: {
								value: "#ffffff",
							},
							links: {
								color: "#ffffff",
								distance: 150,
								enable: true,
								opacity: 0.2,
								width: 1,
							},
							move: {
								enable: true,
								outModes: {
									default: "bounce",
								},
								random: false,
								speed: 1,
								straight: false,
								attract: {
									enable: true,
									rotateX: 600,
									rotateY: 1200,
								},
							},
							number: {
								density: {
									enable: true,
									area: 800,
								},
								value: 80,
							},
							opacity: {
								value: 0.3,
							},
							shape: {
								type: "circle",
							},
							size: {
								value: { min: 1, max: 5 },
							},
						},
						detectRetina: true,
						interactivity: {
							events: {
								onHover: {
									enable: false,
									mode: "grab",
								},
								onClick: {
									enable: false,
									mode: "push",
								},
							},
							modes: {
								grab: {
									distance: 140,
									links: {
										opacity: 0.5,
									},
								},
								push: {
									quantity: 4,
								},
							},
						},
					}}
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/30 to-red-900/30"></div>
			</div>

			{/* Content */}
			<div className="container mx-auto px-4 relative z-20">
				<div className="max-w-3xl">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
						Аренда элитных автомобилей в Москве
					</h1>
					<p className="text-xl md:text-2xl text-white opacity-90 mb-8">
						Широкий выбор премиальных автомобилей для любых целей. Быстрое
						оформление и доставка в любую точку города.
					</p>
					<div className="flex flex-wrap gap-4">
						<Link
							href="/cars"
							className="px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition duration-300"
						>
							Выбрать автомобиль
						</Link>
						<Link
							href="/contacts"
							className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-gray-900 transition duration-300"
						>
							Связаться с нами
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroBanner
