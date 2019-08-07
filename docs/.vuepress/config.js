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
                link: 'https://discord.gg/RcTNjpB',
            },
            {
                text: 'Über',
                link: '/about'
            },
            {
                text: 'Metadaten',
                link: '/metadaten'
            }
        ],
        sidebar: [
            {
                title: 'LSSM',
                collapsable: false,
                children: [
                    '/'
                ]
            },
            {
                title: 'Module',
                collapsable: false,
                children: [
                    '/module/',
                    '/module/layout-01',
                    '/module/aao-klick-zaehler'
                ]
            }
        ]
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
