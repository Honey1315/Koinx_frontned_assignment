import React from 'react'
import grow from '../../assets/svgs/grow.svg'
import letter from '../../assets/svgs/letter.svg'
const Sentiment = () => {
  return (
    <>
        <div className=' bg-white border rounded-3xl'>
            <h3 className=' text-4xl px-7 pt-2 font-semibold'>Sentiment</h3>
            <div className='flex justify-start items-start p-7'>
                <div className='flex gap-5 p-5 bg-custom-bg border rounded-2xl'>
                <img src={letter} className='bg-bgblue p-3 rounded-full h-fit'/>
                <div className='flex flex-col gap-5'>
                <div className=' text-xl font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A saepe temporibus,
                aliquam nam sunt iure veniam rem iusto.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat 
                nemo reiciendis eos quis laudantium dicta rerum deleniti animi iusto. Culpa, 
                odit exercitationem saepe vero distinctio eum voluptate praesentium magnam sequi?</div>
                </div>
                </div>
                <div className='flex gap-5 p-5 bg-custom-bg border rounded-2xl'>
                <img src={grow} className=' bg-bggreen1 p-3 rounded-full h-fit'/>
                <div className='flex flex-col gap-5 bg-5ec08f'>
                <div className='text-xl font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A saepe temporibus,
                aliquam nam sunt iure..</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat 
                nemo reiciendis eos quis laudantium dicta rerum deleniti animi iusto. Culpa, 
                odit exercitationem saepe vero distinctio eum voluptate praesentium magnam sequi?</div>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sentiment