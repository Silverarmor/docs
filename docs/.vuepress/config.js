const fs = require('fs');

let modules_de = fs.readdirSync('./docs/modules');
let modules_en = fs.readdirSync('./docs/en/modules');
let modules_nl = fs.readdirSync('./docs/nl/modules');
let modules_es = fs.readdirSync('./docs/es/modules');

const options = {
    title: 'LSS-Manager (V.3) Wiki',
    description: 'The Wiki for the LSS-Manager.de',
    port: 1024,
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/lssm.png'
        }]
    ],
    markdown: {
        sluglify: '',
        lineNumbers: true
    },
    themeConfig: {
        logo: '/img/lssm.png',
        docsRepo: 'lss-manager/docs',
        docsDir: 'docs',
        docsBranch: 'dev',
        editLinks: true,
        nav: [
            {
                text: 'Discord',
                link: 'https://discord.gg/RcTNjpB',
            },
            {
                text: 'GitHub',
                link: 'https://github.com/LSS-Manager/lss-manager-v3'
            }
        ],
        locales: {
            '/': {
                label: '🇩🇪 Leitstellenspiel.de',
                nav: [
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
                    '/suggestions',
                    '/support',
                    '/error_report',
                    '/faq',
                    {
                        title: 'Module 📦',
                        collapsable: true,
                        children: modules_de.map(file => `/modules/${file.replace(/\..*?$/, '').replace(/README/, '')}`)
                    }
                ],
            },
            '/en/': {
                label: '🇺🇸🇬🇧🇦🇺 Missionchief',
                nav: [
                    {
                        text: 'Metadata',
                        link: '/en/metadata'
                    }
                ],
                sidebar: [
                    {
                        title: 'LSSM',
                        collapsable: false,
                        children: [
                            '/en/'
                        ]
                    },
                    '/en/suggestions',
                    '/en/support',
                    '/en/error_report',
                    '/en/faq',
                    {
                        title: 'Modules 📦',
                        collapsable: true,
                        children: modules_en.map(file => `/en/modules/${file.replace(/\..*?$/, '').replace(/README/, '')}`)
                    }
                ],
            },
            '/nl/': {
                label: '🇳🇱 Meldkamerspel.com',
                nav: [
                    {
                        text: 'Metadata',
                        link: '/nl/metadata'
                    }
                ],
                sidebar: [
                    {
                        title: 'LSSM',
                        collapsable: false,
                        children: [
                            '/nl/'
                        ]
                    },
                    '/nl/suggestions',
                    '/nl/support',
                    '/nl/error_report',
                    {
                        title: 'Modules 📦',
                        collapsable: true,
                        children: modules_nl.map(file => `/nl/modules/${file.replace(/\..*?$/, '').replace(/README/, '')}`)
                    }
                ],
            },
            '/es/': {
                label: '🇪🇸 Centro-de-mando.es',
                nav: [
                    {
                        text: 'Metadatos',
                        link: '/es/metadata'
                    }
                ],
                sidebar: [
                    {
                        title: 'LSSM',
                        collapsable: false,
                        children: [
                            '/es/'
                        ]
                    },
                    '/es/suggestions',
                    '/es/support',
                    '/es/error_report',
                    {
                        title: 'Módulos 📦',
                        collapsable: true,
                        children: modules_es.map(file => `/es/modules/${file.replace(/\..*?$/, '').replace(/README/, '')}`)
                    }
                ],
            },
            '/pl/': {
                label: '🇵🇱 Operatorratunkowy.pl',
                nav: [
                    {
                        text: 'Metadane',
                        link: '/pl/metadata'
                    }
                ],
                sidebar: [
                    {
                        title: 'LSSM',
                        collapsable: false,
                        children: [
                            '/pl/'
                        ]
                    },
                    '/pl/suggestions',
                    '/pl/support',
                    '/pl/error_report',
                    {
                        title: 'Moduły 📦',
                        collapsable: true,
                        children: modules_es.map(file => `/pl/modules/${file.replace(/\..*?$/, '').replace(/README/, '')}`)
                    }
                ],
            },
            '/se/': {
                label: '🇸🇪 Larmcentralen-spelet.se',
                nav: [
                    {
                        text: 'Metadata',
                        link: '/se/metadata'
                    }
                ],
                sidebar: [
                    {
                        title: 'LSSM',
                        collapsable: false,
                        children: [
                            '/se/'
                        ]
                    },
                    '/se/suggestions',
                    '/se/support',
                    '/se/error_report',
                    {
                        title: 'Modules 📦',
                        collapsable: true,
                        children: modules_es.map(file => `/se/modules/${file.replace(/\..*?$/, '').replace(/README/, '')}`)
                    }
                ],
            },
            '/it/': {
                label: '🇮🇹 Operatore112.it',
                nav: [
                    {
                        text: 'Metadati',
                        link: '/it/metadata'
                    }
                ],
                sidebar: [
                    {
                        title: 'LSSM',
                        collapsable: false,
                        children: [
                            '/it/'
                        ]
                    },
                    '/it/suggestions',
                    '/it/support',
                    '/it/error_report',
                    {
                        title: 'Moduli 📦',
                        collapsable: true,
                        children: modules_es.map(file => `/it/modules/${file.replace(/\..*?$/, '').replace(/README/, '')}`)
                    }
                ],
            },
            '/fr/': {
                label: '🇫🇷 Operateur112.fr',
                nav: [
                    {
                        text: 'Métadonnées',
                        link: '/fr/metadata'
                    }
                ],
                sidebar: [
                    {
                        title: 'LSSM',
                        collapsable: false,
                        children: [
                            '/fr/'
                        ]
                    },
                    '/fr/suggestions',
                    '/fr/support',
                    '/fr/error_report',
                    {
                        title: 'Modules 📦',
                        collapsable: true,
                        children: modules_es.map(file => `/fr/modules/${file.replace(/\..*?$/, '').replace(/README/, '')}`)
                    }
                ],
            },
            '/ru/': {
                label: '🇷🇺 Dispetcher112.ru',
                nav: [
                    {
                        text: 'Metadata',
                        link: '/ru/metadata'
                    }
                ],
                sidebar: [
                    {
                        title: 'LSSM',
                        collapsable: false,
                        children: [
                            '/ru/'
                        ]
                    },
                    '/ru/suggestions',
                    '/ru/support',
                    '/ru/error_report',
                    {
                        title: 'Modules 📦',
                        collapsable: true,
                        children: modules_es.map(file => `/ru/modules/${file.replace(/\..*?$/, '').replace(/README/, '')}`)
                    }
                ],
            },
        },
    },
    locales: {
        '/': {
            lang: 'de-DE',
            title: 'LSS-Manager (V.3) Wiki 🇩🇪'
        },
        '/en/': {
            lang: 'en-US',
            title: 'LSS-Manager (V.3) Wiki 🇺🇸🇬🇧🇦🇺'
        },
        '/nl/': {
            lang: 'nl',
            title: 'LSS-Manager (V.3) Wiki 🇳🇱'
        },
        '/es/': {
            lang: 'es',
            title: 'LSS-Manager (V.3) Wiki 🇪🇸'
        },
        '/pl/': {
            lang: 'pl',
            title: 'LSS-Manager (V.3) Wiki 🇵🇱'
        },
        '/se/': {
            lang: 'se',
            title: 'LSS-Manager (V.3) Wiki 🇸🇪'
        },
        '/it/': {
            lang: 'it',
            title: 'LSS-Manager (V.3) Wiki 🇮🇹'
        },
        '/fr/': {
            lang: 'fr',
            title: 'LSS-Manager (V.3) Wiki 🇫🇷'
        },
        '/ru/': {
            lang: 'ru',
            title: 'LSS-Manager (V.3) Wiki 🇷🇺'
        },
    },
    plugins: {
        '@vuepress/back-to-top': {},
        '@vuepress/last-updated': {
            transformer(timestamp, lang) {
                const moment = require('moment');
                moment.locale(lang);
                return moment(timestamp).fromNow();
            }
        }
    }
};

for (let locale in options.themeConfig.locales) {
    if (!options.themeConfig.locales.hasOwnProperty(locale)) continue;
    let option = options.themeConfig.locales[locale];
    if (option.nav) option.nav.splice(0, 0, ...options.themeConfig.nav);
}

module.exports = options;
