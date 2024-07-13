import React, { useState } from 'react'
 import { useNavigate } from 'react-router-dom';
import styles from '../Css/Frontpage.module.css'
import { HiLanguage } from "react-icons/hi2";

import { GrNext } from "react-icons/gr";

const front = new URL('../images/image2.jpeg', import.meta.url)





function FrontPage(){
  const [mail, setmail] = useState('');

  const navigate = useNavigate();
  
  const handleLogin =(event)=>{
   event.preventDefault();
   if(mail === "kannan251@gmail.com" ){
     navigate('/Home');
   }
   else if(mail == '')
     {
       alert("EMail is Empty")
     }
     else{
      alert("Invalid E-mail")
    };
    }

  return (
    <div className={styles.section}>
        <div className={styles.name}>
       
        <h1>MOVIEFLIX</h1> 
       
       <select id={styles.drop} >
       
                < option value='english'> English</option>
                <option value='tamil'>Tamil</option>
                <option value='malayalam'>Malayalam</option>
                <option value='hindi'>Hindi</option>
               
            </select> 
           <a href='/signin'> <button className={styles.bttn}  type='submit'>Sign In</button></a>
        <img src={front}/>
        </div>
        <div className={styles.conten}>
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p>Ready to watch?Enter your email to create or restart your membership</p>
            <input id={styles.input}  onChange={(e)=>setmail(e.target.value)} type='text' placeholder='Email address' required/>
            <button onClick={handleLogin} className={styles.button}>Get Started<GrNext  className={styles.ico}/> </button>
        </div>
        
       
    
     









    </div>
  )
}

export default FrontPage
