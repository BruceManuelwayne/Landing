import React from 'react'
import background from '../../assets/Hero.png'

const Render = () => {
  return (
    <div className='flex w-screen   items-center justify-center bg-black mx-auto' >
      <div className=''>
        <img className=''
          src={background}
          alt='background'/>
      </div>

        {/* <div className='bg-hero h-40 md:h-56 bg-contain bg-no-repeat w-screen flex-grow flex items-center justify-center ' >

        </div>
  */}

      

    </div>
  )
}

export default Render