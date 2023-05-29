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
                source: '/en',
                destination: '/en-US',
                permanent: false,
            },
            {
                source: '/pt',
                destination: '/pt-BR',
                permanent: false,
            },
            {
                source: '/es',
                destination: '/es-ES',
                permanent: false,
            },
            {
                source: '/en/resume',
                destination: '/en-US/resume',
                permanent: false,
            },
            {
                source: '/pt/resume',
                destination: '/pt-BR/resume',
                permanent: false,
            },
            {
                source: '/es/resume',
                destination: '/es-ES/resume',
                permanent: false,
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
