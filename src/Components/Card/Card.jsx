import React, { useState } from 'react'

const Card = ({name,imgurl,change}) => {
  const [color,setColor]=useState("text-red-600");
  if(change>=0) setColor("text-green-500");
  console.log(change);
  return (
    <div className='flex justify-between
      p-2 mt-4'>
      <div className='flex'>
      <img className='border rounded-2xl' src={imgurl} height={24} width={24}></img>
      <div className='pl-2'>
        {name}
      </div>
      </div>
      <div className={color}>{change}%</div>
    </div>
  )
}

export default Card