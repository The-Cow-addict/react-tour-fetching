import React, { useEffect, useState } from 'react'

export const Tour = ({id, name, info, image, price, removeTour}) => {
    const [readMore, setreadMore] = useState(false)

  return (
    <article className='single-tour'>
        <img src={image} alt={name}/>
        <footer>
            <div className='tour-info'>
                <h4>{name}</h4>
                <h4 className='tour-price'>${price}</h4>
            </div>
            <p>{readMore ? info : `${info.substring(0,100)}...`}</p>
            <button onClick={() => setreadMore(!readMore)} className='delete-btn'>
                {readMore ? 'Read Less' : 'Read More'}
            </button>
            <button onClick={() => removeTour(id)} className='delete-btn'>
                Not interested
            </button>
        </footer>
    </article>
  )
}
