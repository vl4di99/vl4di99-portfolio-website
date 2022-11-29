import type { ISourceOptions } from "tsparticles-engine";

export const amongUs: ISourceOptions = {
	fullScreen: {
		enable: true,
		zIndex: -9999,
	},
	fpsLimit: 120,
	particles: {
		groups: {
			z1: {
				number: {
					value: 40,
				},
				zIndex: {
					value: 0,
				},
			},
			z2: {
				number: {
					value: 20,
				},
				zIndex: {
					value: 15,
				},
			},
			z3: {
				number: {
					value: 50,
				},
				zIndex: {
					value: 30,
				},
			},
			z4: {
				number: {
					value: 25,
				},
				zIndex: {
					value: 45,
				},
			},
			z5: {
				number: {
					value: 20,
				},
				zIndex: {
					value: 60,
				},
			},
			z6: {
				number: {
					value: 40,
				},
				zIndex: {
					value: 75,
				},
			},
		},
		number: {
			value: 200,
			density: {
				enable: false,
				value_area: 800,
			},
		},
		color: {
			value: "#fff",
			animation: {
				enable: false,
				speed: 20,
				sync: true,
			},
		},
		shape: {
			type: "circle",
		},
		opacity: {
			value: 1,
			random: false,
			animation: {
				enable: false,
				speed: 3,
				minimumValue: 0.4,
				sync: false,
			},
		},
		size: {
			value: 3,
		},
		links: {
			enable: false,
			distance: 100,
			color: "#ffffff",
			opacity: 0.4,
			width: 1,
		},
		move: {
			angle: {
				value: 10,
				offset: 0,
			},
			enable: true,
			speed: 5,
			direction: "right",
			random: false,
			straight: true,
			outModes: {
				default: "out",
			},
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
		zIndex: {
			value: 5,
			opacityRate: 0.5,
		},
	},
	interactivity: {
		detectsOn: "canvas",
		events: {
			onHover: {
				enable: false,
				mode: "repulse",
			},
			onClick: {
				enable: true,
				mode: "push",
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				links: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 0.8,
			},
			repulse: {
				distance: 200,
			},
			push: {
				quantity: 4,
				groups: ["z1", "z2", "z3", "z4", "z5", "z6"],
			},
			remove: {
				quantity: 2,
			},
		},
	},
	detectRetina: true,
	background: {
		color: "#000000",
		position: "50% 50%",
		repeat: "no-repeat",
		size: "cover",
	},
	emitters: {
		position: {
			y: 55,
			x: -5,
		},

		rate: {
			delay: 3,
			quantity: 1,
		},
		size: {
			width: 0,
			height: 0,
		},
		particles: {
			shape: {
				type: "images",
				options: {
					images: [
						{
							src: "/images/avatars/cyan_amongus.png",
							width: 200,
							height: 200,
						},
						{
							src: "/images/avatars/green_amongus.png",
							width: 700,
							height: 700,
						},
						{
							src: "/images/avatars/purple_amongus.png",
							width: 700,
							height: 700,
						},
						{
							src: "/images/avatars/batman_amongus.png",
							width: 700,
							height: 700,
						},
						{
							src: "/images/avatars/brown_amongus.png",
							width: 700,
							height: 700,
						},
						{
							src: "/images/avatars/white_amongus.png",
							width: 700,
							height: 700,
						},
						{
							src: "/images/avatars/white2_amongus.png",
							width: 700,
							height: 700,
						},
					],
				},
			},
			size: {
				value: 40,
			},
			move: {
				speed: 10,
				outModes: {
					default: "none",
					right: "destroy",
				},
				straight: true,
			},
			zIndex: {
				value: 0,
			},
			rotate: {
				value: {
					min: 0,
					max: 360,
				},
				animation: {
					enable: true,
					speed: 10,
					sync: true,
				},
			},
		},
	},
};

export const coloredParticles = {
	particles: {
		number: {
			value: 100,
		},
		color: {
			value: "random",
			animation: {
				enable: true,
				speed: 50,
				sync: false,
			},
		},
		shape: {
			type: "circle",
		},
		size: {
			value: 5,
			random: true,
			animation: {
				enable: true,
				speed: 16,
				minimumValue: 0.1,
				sync: false,
			},
		},
		links: {
			enable: true,
			distance: 100,
			color: "random",
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
		},
	},
	interactivity: {
		detectsOn: "canvas",
		events: {
			onHover: {
				enable: true,
				mode: "repulse",
			},
			onClick: {
				enable: true,
				mode: "bubble",
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				links: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 0.8,
			},
			repulse: {
				distance: 200,
			},
			push: {
				quantity: 4,
			},
			remove: {
				quantity: 2,
			},
		},
	},
	detectRetina: true,
};
