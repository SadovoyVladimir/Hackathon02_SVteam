const users = [
    {
        id: '1',
        img: 'https://avatars.githubusercontent.com/u/78723729?v=4',
        name: 'Владимир',
        lastName: 'Садовой',
        age: 0,
        addres: {
            country: 'Российская Федерация',
            city: 'Санкт-Петербург'
        },
        hackathonTeam: 'Разборка Питерская',
        socialNetworks: [
            {id: '1', label: 'vk.com', url: 'URL', img: 'https://formula7r.ru/wp-content/uploads/2018/11/8cfb76c8af04b72de1096c55862ae518.png'},
            {id: '2', label: 'github', url: 'URL', img: 'https://www.pinclipart.com/picdir/big/534-5340847_github-logos-download-github-svg-icon-clipart.png'},
            {id: '3', label: 'telegram', url: 'URL', img: 'https://static.tildacdn.com/tild3966-6339-4636-b535-373534396532/telegram.png'}
        ],
        about: [
            {id: '1', content: 'Информация о участнике', img: 'URL'},
            // {id: 2, content: 'Еще какая-нибудь инфа', img: 'URL'}
        ],
        role: 'Тимлид',
        features: [
            {id: '1', label: 'Button'},
            ],
        skills: [
            {id: '1', label: 'Java Script', color: 'warning'},
            {id: '2', label: 'React.js', color: 'primary'},
            {id: '3', label: 'HTML', color: 'success'},
            {id: '4', label: 'CSS', color: 'secondary'},
            {id: '5', label: 'Bootstrap', color: 'info'}
        ]
    },
    {
        id: '2',
        img: 'https://sun9-9.userapi.com/impg/WMnkXwN8HhR9GO1bFhTWQjMuIRB0wnLADRj2WQ/QtGDCh56zZQ.jpg?size=606x632&quality=96&sign=42f577c3fbc7de2cfb7355f32b6399d1&type=album',
        name: 'Юрий',
        lastName: 'Митрофанов',
        age: 36,
        addres: {
            country: 'Российская Федерация',
            city: 'Санкт-Петербург'
        },
        hackathonTeam: 'Разборка Питерская',
        socialNetworks: [
            {id: '1', label: 'vk.com', url: 'https://vk.com/mitrofanov_yuriy', img: 'https://formula7r.ru/wp-content/uploads/2018/11/8cfb76c8af04b72de1096c55862ae518.png'},
            {id: '2', label: 'github', url: 'https://github.com/YuriyMtrofanov', img: 'https://www.pinclipart.com/picdir/big/534-5340847_github-logos-download-github-svg-icon-clipart.png'},
            {id: '3', label: 'telegram', url: '@Mitrofanov_Yuriy', img: 'https://static.tildacdn.com/tild3966-6339-4636-b535-373534396532/telegram.png'}
        ],
        about: [
            {id: '1', content: 'Работаю в продажах, но мечтаю заняться frontend-разработкой. Помимо этого занимаюсь фотографией, люблю техно и dnb музыку.', img: 'URL'},
            // {id: 2, content: 'Еще какая-нибудь инфа', img: 'URL'}
        ],
        role: 'Разработчик web-интерфейса',
        features: [
            {id: '1', label: 'Button'},
            {id: '2', label: 'Progress bar'},
            {id: '3', label: 'Badge'},
            {id: '4', label: 'User interface'},
            {id: '5', label: 'User Page'},
            {id: '6', label: 'Team Card'}
        ],
        skills: [
            {id: '1', label: 'Java Script', color: 'warning'},
            {id: '2', label: 'React.js', color: 'primary'},
            {id: '3', label: 'HTML', color: 'success'},
            {id: '4', label: 'CSS', color: 'secondary'},
            {id: '5', label: 'Bootstrap', color: 'info'}
        ]
    },
    {
        id: '3',
        img: 'https://klike.net/uploads/posts/2022-07/1657521764_7.jpg',
        name: 'Игорь',
        lastName: 'Жигалов',
        age: 24,
        addres: {
            country: 'Российская Федерация',
            city: 'Санкт-Петербург'
        },
        hackathonTeam: 'Разборка Питерская',
        socialNetworks: [
            {id: '1', label: 'vk.com', url: 'URL', img: 'https://formula7r.ru/wp-content/uploads/2018/11/8cfb76c8af04b72de1096c55862ae518.png'},
            {id: '2', label: 'github', url: 'URL', img: 'https://www.pinclipart.com/picdir/big/534-5340847_github-logos-download-github-svg-icon-clipart.png'},
            {id: '3', label: 'telegram', url: 'URL', img: 'https://static.tildacdn.com/tild3966-6339-4636-b535-373534396532/telegram.png'}
        ],
        about: [
            {id: '1', content: 'Информация о участнике', img: 'URL'},
            // {id: 2, content: 'Еще какая-нибудь инфа', img: 'URL'}
        ],
        role: 'Разработчик web-интерфейса',
        features: [],
        skills: [
            {id: 1, label: 'Java Script', color: 'warning'},
            {id: 2, label: 'React.js', color: 'primary'},
            {id: 3, label: 'HTML', color: 'success'},
            {id: 4, label: 'CSS', color: 'secondary'},
            {id: 5, label: 'Bootstrap', color: 'info'}
        ]
    },
]

export default users
