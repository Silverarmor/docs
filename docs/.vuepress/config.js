const fs = require('fs');

let modules_de = fs.readdirSync('./docs/modules');
let modules_en = fs.readdirSync('./docs/en/modules');
let modules_nl = fs.readdirSync('./docs/nl/modules');

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
                    {
                        title: 'Module 📦',
                        collapsable: true,
                        children: modules_de.map(file => `/modules/${file.replace(/\..*?$/, '').replace(/README/, '')}`)
                    }
                ],
            },
            '/en/': {
                label: '🇺🇸🇬🇧 Missionchief',
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
                    {
                        title: 'Modules 📦',
                        collapsable: true,
                        children: modules_en.map(file => `/en/modules/${file.replace(/\..*?$/, '').replace(/README/, '')}`)
                    }
                ],
            },
            '/nl/': {
                label: '🇳🇱 Meldkamerspel.com',
                sidebar: [
                    {
                        title: 'LSSM',
                        collapsable: false,
                        children: [
                            '/nl/'
                        ]
                    },
                    {
                        title: 'Modules 📦',
                        collapsable: true,
                        children: modules_nl.map(file => `/nl/modules/${file.replace(/\..*?$/, '').replace(/README/, '')}`)
                    }
                ],
            }
        },
    },
    locales: {
        '/': {
            lang: 'de-DE',
            title: 'LSS-Manager (V.3) Wiki 🇩🇪'
        },
        '/en/': {
            lang: 'en-US',
            title: 'LSS-Manager (V.3) Wiki 🇺🇸🇬🇧'
        },
        '/nl/': {
            lang: 'nl',
            title: 'LSS-Manager (V.3) Wiki 🇳🇱'
        }
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
