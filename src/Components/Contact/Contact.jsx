import React from 'react'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


function Contact() {
  return (
    <div className='my-[80px] mx-auto max-w-[90%] flex items-center justify-between'>
        <div className='basis-[48%] text-[#676767]'>
            <h3 className='text-[#000f38] font-medium text-[25px] flex items-center mb-[20px]'>Send us a message <img className='w-[35px] ml-[10px]' src={message_icon} alt="" /></h3>
            <p className='max-w-[450px] leading-[1.3] '>Feel free to reach out through contact form or find our contact infomation below. Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our unoversity community</p>
            <ul>
                <li className='flex items-center my-[20px]'> <img  className="w-[25px] mr-[10px]" src={mail_icon} alt="" /> Contact@oluwakoyaisaaciyin@gmail.com</li>
                <li className='flex items-center my-[20px]'> <img className="w-[25px] mr-[10px]" src={phone_icon} alt="" />+234 808 160 7619</li>
                <li className='flex items-center my-[20px]'> <img  className="w-[25px] mr-[10px]" src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br /> MA 02139, Nigeria</li>
            </ul>
        </div>
        <div className='basis-[48%] text-[#676767]'>
            <form >
                <label>Your Name</label>
                <input className='block w-full bg-[#ebecfe] p-[15px] border-0 outline-0 mb-[15px] mt-[5px] resize-none' type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input className='block w-full bg-[#ebecfe] p-[15px] border-0 outline-0 mb-[15px] mt-[5px] resize-none' type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea className='block w-full bg-[#ebecfe] p-[15px] border-0 outline-0 mb-[15px] mt-[5px] resize-none' name="message" rows="6" placeholder='Enter your message'></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span className='block my-[20px] mx-0'>{}</span>
        </div>
      
    </div>
  )
}

export default Contact
