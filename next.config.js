/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['share-tabi-image-bucket.s3.ca-central-1.amazonaws.com'],
	},
	api: {
		bodyParser: true,
	},
};

module.exports = nextConfig;
