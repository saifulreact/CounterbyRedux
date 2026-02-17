import React, { useState } from 'react'
import Button from '../../components/Button'
import Texts from '../../components/Texts'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../slice/counterSlice'

const Home = () => {

 const data=useSelector((saiful)=>saiful.counter.value)
 const dispatch=useDispatch()

 const handelremove=()=>{
  dispatch(decrement())
 }

  return (
    <>
  
<div className='flex justify-center items-center min-h-screen flex-col gap-8'>
    {/* <Button onclick={()=>dispatch(increment())} buttontext={"Add"} /> */}
    <button onClick={()=>dispatch(increment())}>Add</button>
  <Texts btntext={data}/>
    <button onClick={handelremove} >Remove</button>
  {/* <Button onclick buttontext={"Remove"} /> */}
</div>
      
    </>
  )
}

export default Home
