import images from '../../../constants/images'

const Cards = [
    {
        key: 1,
        title: 'Portfolio',
        link: 'https://lucal-portfolio.vercel.app/',
        img: [
            {
                icon: images.html,
                title: 'html'
            },
            {
                icon: images.sass,
                title: 'scss'
            },
            {
                icon: images.react,
                title: 'reactjs'
            },
            {
                icon: images.typescript,
                title: 'typescript'
            },
            {
                icon: images.node,
                title: 'nodejs'
            },
        ],
        background: images.portfolio,
        githubLink: '#'
    },
    {
        key: 2,
        title: 'Keeper App',
        link: '',
        img: [
            {
                icon: images.html,
                title: 'html'
            },
            {
                icon: images.css,
                title: 'css'
            },
            {
                icon: images.react,
                title: 'reactjs'
            },
        ],
        background: images.keeper,
        githubLink: 'https://github.com/Lucal22/Keeper-app'
    },
    {
        key: 3,
        title: 'Widget',
        link: 'https://widget-project-nlw-8.vercel.app/',
        img: [
            {
                icon: images.html,
                title: 'html'
            },
            {
                icon: images.tailwind,
                title: 'tailwindcss'
            },
            {
                icon: images.typescript,
                title: 'typescript'
            },
            {
                icon: images.node,
                title: 'nodejs'
            },
        ],
        background: images.widget,
        githubLink: 'https://github.com/Lucal22/WidgetProject-NLW-8'
    },
    {
        key: 4,
        title: 'Jogo das nações',
        link: 'https://nations-game.vercel.app/',
        img: [
            {
                icon: images.html,
                title: 'html'
            },
            {
                icon: images.sass,
                title: 'scss'
            },
            {
                icon: images.react,
                title: 'reactjs'
            },
        ],
        background: images.nations,
        githubLink: 'https://github.com/Lucal22/nations-game'
    },
    {
        key: 5,
        title: 'Blog-frontend',
        link: 'https://lucal-thoughts.vercel.app/',
        img: [
            {
                icon: images.html,
                title: 'html'
            },
            {
                icon: images.tailwind,
                title: 'tailwindcss'
            },
            {
                icon: images.next,
                title: 'next.js'
            },
            {
                icon: images.typescript,
                title: 'typescript'
            },
            {
                icon: images.graphql,
                title: 'graphql'
            },
        ],
        background: images.blog,
        githubLink: 'https://github.com/Lucal22/lucal-thoughts'
    },
    {
        key: 6,
        title: 'Blog-backend',
        link: '',
        img: [
            {
                icon: images.strapi,
                title: 'strapi'
            },
            {
                icon: images.postgresql,
                title: 'postgresql'
            },

        ],
        background: images.strapipage,
        githubLink: 'https://github.com/Lucal22/blog-strapi-api'
    },
]
export default Cards;