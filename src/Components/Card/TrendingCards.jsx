import React, { useState, useEffect } from 'react';
import greenarrow from '../../assets/svgs/greenarrow.svg';
import redarrow from '../../assets/svgs/redarrow.svg';

const TrendingCards = ({ name, imgurl, change, currprice, graphurl }) => {
    const [color, setColor] = useState("text-red-600");
    const [bgcolor, setBgcolor] = useState("bg-bggreen");
    const [path, setPath] = useState();

    useEffect(() => {
        if (parseFloat(change) >= 0) {
            setColor("text-green-500");
            setPath(greenarrow);
        } else {
            setColor("text-red-600");
            setPath(redarrow);
            setBgcolor('bg-bgred');
        }
    }, [change]);
    console.log(graphurl);

    return (
        <div className='flex flex-col m-1 items-center justify-around
         h-40 w-80'>
            <div className='flex flex-row items-center'>
                <img className='border rounded-2xl' src={imgurl} height={25} width={25} alt={name} />
                <div className='pl-2'>{name}</div>
                <div className='p-1'>
                </div>
                <div className={`${color} ${bgcolor} flex gap-1`}>
                <img src={path} alt="Arrow" />
                {Math.abs(change)}%
                </div>
                
            </div>
            {/* <div>
                {currprice}
            </div> */}
            <div className={`flex items-center rounded-md`}>
                <img crossOrigin='anonymous' src={graphurl} className='p-2 h-fit w-full'/>
            </div>
        </div>
    );
};

export default TrendingCards;
