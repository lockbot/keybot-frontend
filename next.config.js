/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
            {
                source: '/github',
                destination: 'https://github.com/lockbot',
                permanent: true,
            },
            {
                source: '/gitlab',
                destination: 'https://gitlab.com/keybot',
                permanent: true,
            },
            {
                source: '/linkedin',
                destination: 'https://www.linkedin.com/in/lucas-borges-vieira/',
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
