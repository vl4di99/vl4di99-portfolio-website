/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"images.credly.com",
			"www.auslandsschulwesen.de",
			"img-c.udemycdn.com",
			"upload.wikimedia.org",
		],
	},
};

module.exports = nextConfig;
