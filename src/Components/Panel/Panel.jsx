import React from 'react'
import { useState } from 'react'
const panel = () => {
    const [id,setId]=useState(null);
    const handleButtonClick = (event) => {
        setId(event.target.id);
    };
    const determineStyle = (btnid) => {
        return id===btnid ? 'underline text-underblue' : '';
    };
  return (
    <>
    <div className='flex justify-between text-base text-panelcolor
    font-medium font-sans button-6 p-4'>
        <button id='1' onClick={handleButtonClick} className={determineStyle('1')}>Overview</button>
        <button id='2' onClick={handleButtonClick} className={determineStyle('2')}>Fundamentals</button>
        <button id='3' onClick={handleButtonClick} className={determineStyle('3')}>News Insights</button>
        <button id='4' onClick={handleButtonClick} className={determineStyle('4')}>Sentiments</button>
        <button id='5' onClick={handleButtonClick} className={determineStyle('5')}>Team</button>
        <button id='6' onClick={handleButtonClick} className={determineStyle('6')}>Technicals</button>
        <button id='7' onClick={handleButtonClick} className={determineStyle('7')}>Tokenomics</button>
    </div>
    </>
  )
}

export default panel