import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'resources.finalsite.net',
				port: '',
				pathname: '/images/**',
				search: '',
			},
		],
	},
};

export default nextConfig;
