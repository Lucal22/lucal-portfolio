import images from '../../../constants/images'

const Cards = [
    {
        key: 1,
        title: 'Portfolio',
        link: 'portfolio.com.br',
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
        link: 'KeeperApp.com.br',
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
]
export default Cards;