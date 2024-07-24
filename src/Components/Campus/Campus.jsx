import React from 'react'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

function Campus() {
  return (
    <div className='my-[80px] w-[90%] mx-auto text-center'  id='campus'>
      <div className='flex items-center justify-between mb-[40px] '>
        <img src={gallery_1} alt="" className='w-[23%] rounded-[10px]' />
        <img src={gallery_2} alt="" className='w-[23%] rounded-[10px]' />
        <img src={gallery_3} alt="" className='w-[23%] rounded-[10px]' />
        <img src={gallery_4} alt="" className='w-[23%] rounded-[10px]' />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus
