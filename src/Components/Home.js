import React from 'react'
import styles from '../Css/Home.module.css'

import Navbar from '../Components/Navbar'
import TitleCards from '../Components/TitleCards'

const hero_banner = new URL('../images/Wallpaper.jpeg', import.meta.url)

const Home = () => {
  return (
    <div className={styles.header}>
      <Navbar />
    <div className={styles.hero}>
      <img src={hero_banner} className={styles.bannerimg}/>
      <div className={styles.play}>
   <a href='#'><button>Play</button></a> 
    <button>More Info</button>
  </div>

    </div>
    <div className={styles.caption}>
  <p>AVENGERS ENDGAME</p>
 

    </div>
      <TitleCards />
    <div className={styles.more}>
    <TitleCards title={"Blockbuster Movies"}/>
    <TitleCards title={"Only on Movieflix"}/>
    <TitleCards title={"Upcomming"}/>
    <TitleCards title={"Top pics for you"}/>
    </div>



      

  
     
    </div>
    
  )
}

export default Home;

