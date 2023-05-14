const users = [
  {
    id: 1,
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
      {
        id: 1,
        label: 'vk.com',
        url: 'https://vk.com/mitrofanov_yuriy',
        img: 'https://stasmatveev.ru/wp-content/uploads/2015/10/VK.jpg'
      },
      {
        id: 2,
        label: 'github',
        url: 'https://github.com/YuriyMtrofanov',
        img: 'https://www.pinclipart.com/picdir/big/534-5340847_github-logos-download-github-svg-icon-clipart.png'
      },
      {
        id: 3,
        label: 'telegram',
        url: '@Mitrofanov_Yuriy',
        img: 'https://w7.pngwing.com/pngs/21/510/png-transparent-video-application-logo-telegram-logo-computer-icons-telegram-miscellaneous-blue-angle.png'
      }
    ],
    about: [
      {
        id: 1,
        content:
          'Работаю в продажах, но мечтаю заняться frontend-разработкой. Помимо этого занимаюсь фотографией, люблю техно и dnb музыку.',
        img: 'URL'
      }
      // {id: 2, content: 'Еще какая-нибудь инфа', img: 'URL'}
    ],
    role: 'Разработчик web-интерфейса',
    features: [
      { id: 1, label: 'Button' },
      { id: 2, label: 'Progress bar' },
      { id: 3, label: 'Badge' },
      { id: 4, label: 'User interface' },
      { id: 5, label: 'User Page' },
      { id: 6, label: 'Team Card' }
    ],
    skills: [
      { id: 1, label: 'Java Script' },
      { id: 2, label: 'React.js' },
      { id: 3, label: 'HTML' },
      { id: 4, label: 'CSS' },
      { id: 5, label: 'Bootstrap' }
    ]
  },
  {
    id: 2,
    img: 'https://sun9-9.userapi.com/impg/WMnkXwN8HhR9GO1bFhTWQjMuIRB0wnLADRj2WQ/QtGDCh56zZQ.jpg?size=606x632&quality=96&sign=42f577c3fbc7de2cfb7355f32b6399d1&type=album',
    name: 'Юрий',
    lastName: 'Митрофанов',
    age: 36,
    addres: {
      country: 'Российская Федерация',
      city: 'Санкт-Петербург'
    },
    hackathonTeam: 'Разборка Питерская',
    sotialNetworcs: [
      {
        id: 1,
        label: 'vk.com',
        url: 'https://vk.com/mitrofanov_yuriy',
        img: 'URL'
      },
      {
        id: 2,
        label: 'github',
        url: 'https://github.com/YuriyMtrofanov',
        img: 'URL'
      },
      { id: 3, label: 'telegram', url: '@Mitrofanov_Yuriy', img: 'URL' }
    ],
    about: {
      id: 1,
      content: 'Работаю в продажах, но мечтаю заняться frontend разработкой',
      img: 'URL'
    },
    role: 'Разработчик web-интерфейса',
    features: [
      { id: 1, label: 'Button' },
      { id: 2, label: 'Progress bar' },
      { id: 3, label: 'Badge' }
    ],
    skills: [
      { id: 1, label: 'Java Script' },
      { id: 2, label: 'React.js' },
      { id: 3, label: 'HTML' },
      { id: 4, label: 'CSS' },
      { id: 5, label: 'Bootstrap' }
    ]
  }
]

export default users
