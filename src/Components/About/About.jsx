import React from 'react'
import leftfig from '../../assets/pngs/about_left.png'
import rightfig from '../../assets/pngs/about_right.png'
import arrow from '../../assets/svgs/Arrrow-right.svg'
const About = () => {
  return (
    <div className='flex flex-col gap-3 bg-white px-8 py-5
    border rounded-3xl text-gray2'>
        <h1 className=' text-3xl font-semibold text-black'>About Botcoin?</h1>
        <h1  className='text-xl font-semibold mt-4 text-black'>What is Bitcoin</h1>
        <p>
        Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating
        supply of 19.24 M BTC and a max supply of 21 M BTC.
        </p>
        <h1 className=' text-xl font-semibold mt-4 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusantium molestiae, iusto impedit doloribus beatae,
        quos, eos odit unde natus obcaecati dolor id a sit quis cum error sequi illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis minus laborum ipsam? Vitae ex omnis corrupti cumque, quas, perferendis,
        suscipit amet dolorem sint dolores veniam eligendi! Sequi, non ratione?
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis ipsum reprehenderit tenetur vel atque
        totam provident magnam hic sint, recusandae in quisquam nisi quam laborum libero soluta tempore eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo repellat deleniti, id sequi, similique qui molestias
        tempora eveniet recusandae sunt fugiat ullam, libero officiis et. At odio dignissimos quas?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore itaque ea nihil officiis, consectetur blanditiis alias veritatis temporibus eligendi dicta mollitia fugit eos praesentium hic expedita minima suscipit nulla!</p>
        <h1 className=' text-xl font-semibold mt-4 text-black'>Already holding a Bitcoin</h1>
        <div className='flex justify-around my-4 gap-5'>
            <div className='bg-gradient-to-br from-green-400 to-blue-700 flex gap-5 py-10 px-8
            border rounded-xl'>
            <div>
            <img src={leftfig} className=' w-44 h-full'/>
            </div>
            <div className='flex flex-col justify-around'>
            <h1 className='text-white font-semibold text-2xl w-48'>Calculate Your Profits</h1>
            <button className='bg-white py-2 border rounded-lg flex
             justify-center items-center text-lg mt-4 w-40'>
                Check Now
            <img src={arrow} className='px-2'/>
            </button>
            </div>
            </div>
            <div className='bg-gradient-to-r from-orange-400 to-red-500 flex gap-5 py-10 px-8
            border rounded-xl'>
            <div>
            <img src={rightfig} className=' w-44 h-full'/>
            </div>
            <div className='flex flex-col justify-around'>
            <h1 className='text-white font-semibold text-2xl w-52'>Calculate Your Tax Liability</h1>
            <button className='bg-white py-2 border text-lg rounded-lg flex
            justify-center items-center w-40 mt-4'>
                Check Now
            <img src={arrow} className='px-2'/>
            </button>
            </div>
            </div>
        </div>
    <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
    </div>
  )
}

export default About