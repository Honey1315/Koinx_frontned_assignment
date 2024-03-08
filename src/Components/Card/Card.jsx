import React, { useState, useEffect } from 'react';
import greenarrow from '../../assets/svgs/greenarrow.svg'
import redarrow from '../../assets/svgs/redarrow.svg'
const Card = ({ name, imgurl, change }) => {
  const [color, setColor] = useState("text-red-600");
  const [path,setPath]=useState();
  useEffect(() => {
    if (parseFloat(change) >= 0) {
      setColor("text-green-500");
      setPath(greenarrow);
    } else {
      setColor("text-red-600");
      setPath(redarrow);
    }
  }, [change]);

  return (
    <div className='flex justify-between p-2 mt-4 max-lg:justify-normal'>
      <div className='flex'>
        <img className='border rounded-2xl' src={imgurl} height={24} width={24} alt={name} />
        <div className='pl-2'>{name}</div>
      </div>
      <div className='flex justify-center items-center px-2 bg-bggreen'>
        <div className='p-2'>
          <img src={path}/>
        </div>
      <div className={color}>{Math.abs(change)}%</div>
      </div>
    </div>
  );
};

export default Card;
