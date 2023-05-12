import React from 'react'

export default function UserCard() {
  return (
    <div
      className='card'
      style={{
        width: '25rem',
        alignItems: 'center',
        textAlign: 'center',
        padding: '1rem'
      }}
    >
      <img
        className='card-img-top'
        src='https://yt3.googleusercontent.com/E424mRX4iziWCVVamYbAUt4z70Jz-BtQyprcgcFMOeks8CHtyRh7-U9QnGYqHBw8ZTeZtvF5=s900-c-k-c0x00ffffff-no-rj'
        alt='Card image cap'
        style={{
          width: '10rem',
          height: '10rem',
          borderRadius: '50%',
          margin: 'o auto'
        }}
      />
      <div className='card-body'>
        <h5 className='card-title'>Игорь Жигалов</h5>
        <h4 className='card-title'>24 года</h4>
        <h4 className='card-title'>О себе</h4>
        <p className='card-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem
          cum itaque, cumque quos at maiores, a quis distinctio architecto
          reiciendis est tempore quae optio libero voluptatum, explicabo ipsa
          ipsum?
        </p>
        <p>В разработке занимаюсь ...</p>
        <div className='aContainer' style={{ margin: '0 auto' }}>
          <a
            href='#'
            className='btn btn-primary'
            style={{ marginLeft: '1rem' }}
          >
            vk
          </a>
          <a
            href='#'
            className='btn btn-primary'
            style={{ marginLeft: '1rem' }}
          >
            telegram
          </a>
          <a
            href='#'
            className='btn btn-primary'
            style={{ marginLeft: '1rem' }}
          >
            gitHub
          </a>
        </div>
      </div>
    </div>
  )
}
