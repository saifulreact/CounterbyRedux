import React from 'react'

const Button = ({buttontext}) => {
  return (
    <>
    <button className='px-40 py-5 bg-[#576A8F] text-black border-2 border-solid border-black hover:bg-[#9CCFFF] hover:text-white text-5xl font-bold duration-300 rounded-2xl '>{buttontext}</button>
      
    </>
  )
}

export default Button
