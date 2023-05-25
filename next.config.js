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
                destination: 'https://duckduckgo.com/?q=%5Clucas+borges+developer+keybotodev+linkedin&t=h_&ia=web',
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
