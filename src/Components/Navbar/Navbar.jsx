import React from 'react'
import styles from "./Navbar.module.css"
import Koinx from '../../assets/svgs/KoinX-logo.svg'
const Navbar = () => {
  return (
    <div className={styles.div}>
    <div>
    <img src={Koinx}/>
    </div>
    <div className={styles.div}>Crypto Taxes</div>
    <div className={styles.div}>Free Tools</div>
    <div className={styles.div}>Resorce Center</div>
    <div className={styles.div}>
    <button className=" bg-primaryBlue pl-8 pr-8 pb-2 pt-2
     text-white w-136 border rounded-md
      text-base font-semibold" onClick={()=>{
        window.alert("Aur bsdk")
    }}>Get Started</button>
    </div>
    </div>
  )
}

export default Navbar