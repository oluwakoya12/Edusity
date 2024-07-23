import React from 'react'

function Title(props) {
  return (
    <div className='text-center text-[#212ea0] text-[15px] font-semibold uppercase mx-0 mt-[70px] mb-[30px]'>
      <p>{props.title}</p>
      <h2 className='text-[32px] text-[#00f38] mt-[5px] normal-case'>{props.subtitle}</h2>
    </div>
  )
}

export default Title
