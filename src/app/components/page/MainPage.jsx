import React, { useEffect } from 'react'
import UserCard from '../ui/UserCard'
import TextField from '../common/form/TextField'

export default function MainPage() {
  // useEffect(() => {

  //   localStorage.getItem('favourites')
  // }, [])

  return (
    <>
      <h1>Main page</h1>
      <UserCard
        favourites={true}
        name={'Игорь Жигалов'}
        age={24}
        birthday={'26.02.1999'}
        additionalInfo={'Какая-либо дополнительная информация'}
        devTask={'Созданием карточки'}
        arrSocialMediaLinks={[
          { name: 'vk', link: 'vk.com' },
          { name: 'tg', link: 'tg.com' },
          { name: 'facebook', link: 'facebook.com' }
        ]}
        img={
          'https://yt3.googleusercontent.com/E424mRX4iziWCVVamYbAUt4z70Jz-BtQyprcgcFMOeks8CHtyRh7-U9QnGYqHBw8ZTeZtvF5=s900-c-k-c0x00ffffff-no-rj'
        }
      />
      <TextField label={'текстовое поле'} htmlFor={''} name={'name'} />
    </>
  )
}
