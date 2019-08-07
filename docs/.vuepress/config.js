module.exports = {
    title: 'LSS-Manager (V.3) Wiki',
    description: 'The Wiki for the LSS-Manager.de',
    port: 1024,
    head: [
        ['link', { rel: 'icon', href: '/img/lssm.png' }]
    ],
    markdown: {
        sluglify: '',
        lineNumbers: true
    },
    themeConfig: {
        logo: '/img/lssm.png',
        nav: [
            {
                text: 'Discord',
                link: 'https://discord.gg/huMNSA4'
            }
        ],
        locales: {
            '/': {
                label: '🇩🇪 Leitstellenspiel.de'
            },
            '/en/': {
                label: '🇺🇸 Missionchief.com'
            },
            '/nl/': {
                label: '🇳🇱 Meldkamerspel.com'
            }
        },
        sidebar: 'auto'
    },
    locales: {
        '/': {
            lang: 'de-DE',
            title: 'LSS-Manager (V.3) Wiki 🇩🇪'
        },
        '/en/': {
            lang: 'en-US',
            title: 'LSS-Manager (V.3) Wiki 🇺🇸'
        },
        '/nl/': {
            lang: 'nl',
            title: 'LSS-Manager (V.3) Wiki 🇳🇱'
        }
    }
};
