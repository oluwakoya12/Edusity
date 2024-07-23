import React, { useRef } from 'react'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

function Testimonials() {

    const slider = useRef();
    let tx = 0

    function slideForward() {
        if(tx > -50){
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }
    function slideBackward() {

        if(tx < 0){
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)`

        
    }

  return (
    <div className='my-[80px] mx-auto py-0 px-[80px] relative '>
        <img src={next_icon} alt="" className='absolute top-[50%] right-0 -translate-y-1/2 p-[15px] w-[50px] rounded-[50%] bg-[#212ea0] cursor-pointer' onClick={slideForward}/>
        <img src={back_icon} alt="" className='absolute top-[50%] left-0 -translate-y-1/2 p-[15px] w-[50px] rounded-[50%] bg-[#212ea0] cursor-pointer' onClick={slideBackward}/>
        <div className='overflow-hidden '>
            <ul ref={slider} className='flex w-[200%] overflow-x-hidden transition duration-500 items-center'>
                <li className='w-[50%] p-[20px]'>
                    <div className='slide'>
                        <div className='user-info'>
                            <img className='w-[65px] rounded-[50%] mr-[10px] border-[4px] border-[#212ea0]' src={user_1} alt=""  />
                            <div>
                                <h3>William Jacky</h3>
                                <span>Edusity, Nigeria</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was on eof the best decisions I've ever made. The supportive community, state-of-the-art-facilitites, and commitment to academic excellence have truly exceeded my expectations</p>
                        
                    </div>
                </li>

                <li className='w-[50%] p-[20px]'>
                    <div className='slide'>
                        <div className='user-info'>
                            <img className='w-[65px] rounded-[50%] mr-[10px] border-[4px] border-[#212ea0]' src={user_2} alt=""  />
                            <div>
                                <h3>William Jacky</h3>
                                <span>Edusity, Nigeria</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was on eof the best decisions I've ever made. The supportive community, state-of-the-art-facilitites, and commitment to academic excellence have truly exceeded my expectations</p>
                        
                    </div>
                </li>

                <li className='w-[50%] p-[20px]'>
                    <div className='slide'>
                        <div className='user-info'>
                            <img className='w-[65px] rounded-[50%] mr-[10px] border-[4px] border-[#212ea0]' src={user_3} alt=""  />
                            <div>
                                <h3>William Jacky</h3>
                                <span>Edusity, Nigeria</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was on eof the best decisions I've ever made. The supportive community, state-of-the-art-facilitites, and commitment to academic excellence have truly exceeded my expectations</p>
                        
                    </div>
                </li>

                <li className='w-[50%] p-[20px]'>
                    <div className='slide'>
                        <div className='user-info'>
                            <img className='w-[65px] rounded-[50%] mr-[10px] border-[4px] border-[#212ea0]' src={user_4} alt=""  />
                            <div>
                                <h3>William Jacky</h3>
                                <span>Edusity, Nigeria</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was on eof the best decisions I've ever made. The supportive community, state-of-the-art-facilitites, and commitment to academic excellence have truly exceeded my expectations</p>
                        
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
