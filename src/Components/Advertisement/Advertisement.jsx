import React from 'react'
import Arrow from '../../assets/svgs/Arrrow-right.svg'
import logo from '../../assets/svgs/Frame.svg'
const Advertisement = () => {
  return (
    <>
    <div className=" bg-primaryBlue w-80 h-fit text-center border rounded-lg mt-5
      ">
        <div className="flex flex-col items-center h-100% p-8 gap-4">
      <div className="text-2xl p-5 font-bold text-white
        w-250
       text-center">Get Started with KoinX for FREE</div>
      <div className='w-327 h-68 font-inter font-medium text-sm
      text-white text-14 flex-1'>With our range of features that you
        can equip for free, KoinX allows you
        to be more educated and aware of your
        tax reports.</div>
        <img src={logo} className=''/>
        <button className=' flex pl-8 pr-7 pt-2 pb-2 bg-white
        border rounded-lg
       items-center font-semibold'>
        Get Started for FREE
        <img src={Arrow} className='pl-2'/>
        </button>
        </div>
      </div>
    </>
  )
}

export default Advertisement