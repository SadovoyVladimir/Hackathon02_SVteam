// import React from 'react'
// // import UserCard from '../ui/UserCard';

// const UserInterface = () => {

//     // Данные для карточки пользователя
//     const imgURL = 'https://sun9-9.userapi.com/impg/WMnkXwN8HhR9GO1bFhTWQjMuIRB0wnLADRj2WQ/QtGDCh56zZQ.jpg?size=606x632&quality=96&sign=42f577c3fbc7de2cfb7355f32b6399d1&type=album'
//     const userName = 'Митрофанов Юрий'
//     const userAge = 36
//     const city = 'Санкт-Петербург'

//     // Данные для карточки с соцсетями
//     const arrSocialMediaLinks = [
//         { id: 1, name: 'vk', url: 'vk.com', img: 'https://deskmed.ru/wp-content/files/photo-2-1536x1536.png' },
//         { id: 2, name: 'tg', url: 'tg.com', img: 'https://pbs.twimg.com/media/FRHs2byX0AY0YgQ.jpg' },
//         { id: 3, name: 'facebook', url: 'facebook.com', img: 'https://fikiwiki.com/uploads/posts/2022-02/1645006107_3-fikiwiki-com-p-kartinki-feisbuk-4.png' },
//         { id: 4, name: 'github', url: 'github.com', img: 'https://www.pinclipart.com/picdir/big/534-5340847_github-logos-download-github-svg-icon-clipart.png'}
//     ]

//     return (
//         <>
// <div
//     className='card mt-2'
//     style={{
//         width: '25rem',
//         alignItems: 'center',
//         textAlign: 'center',
//         padding: '1rem'
//     }}
//     >
//     <img
//         className='card-img-top'
//         src={imgURL}
//         alt='Card cap'
//         style={{
//         width: '10rem',
//         height: '10rem',
//         borderRadius: '50%',
//         margin: 'o auto'
//         }}
//     />
//     <div className='card-body'>
//         <h3 className='card-title text-dark'>{userName}</h3>
//         <h5 className='card-title text-secondary'>{`${userAge} года/лет`}</h5>
//         <h5 className='card-title text-secondary'>{`Город: ${city}`}</h5>
//     </div>
// </div>
//             <div
//                 className='card mt-2'
//                 style={{
//                     width: '25rem',
//                     alignItems: 'center',
//                     textAlign: 'center',
//                     padding: '1rem'
//                 }}
//                 >
//                 <div className='card-body'>
//                     <div className='acontainer' style={{ margin: '0 auto' }}>
//                     {arrSocialMediaLinks.map((obj) => {
//                         return (
//                         <a
//                             href='/'
//                             className='btn btn-primary'
//                             style={{ marginLeft: '1rem' }}
//                             key={obj.name}
//                         >
//                             {obj.name}
//                         </a>
//                         )
//                     })}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default UserInterface;
