import Image from 'next/image'
import React from 'react'

const CardData = ({img, title}) => {
    console.log('img :>> ', img);
  return (
    <div className='grid    '>
         <div className="relative h-60 w-60 mx-5 my-2">
        <Image
          src={img}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
          priority
        />
        </div>
            <p>{title}</p>
    </div>
  )
}

export default CardData