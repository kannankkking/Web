import React from 'react'
import styles from '../Css/Signin.module.css'


const Signin = () => {
  return (
  
    <div className={styles.container}>
      <h1>MOVIEFLIX</h1>
     <div className={styles.section}>
     <div className={styles.header}>
        <h3>Signin</h3>
      </div>
      <div className={styles.mail}>
        <input type='text' placeholder='Email or mobile number'/>
      </div>
<div className={styles.pass}>
<input type='password' placeholder=' Password' />
</div>
<div className={styles.btn}>
 <a href='/home'> <button type='submit'>Signin</button></a>
 <div className={styles.o}>
 <span>OR</span>
 </div>
 <div className={styles.forget}>
 <a href='OTP'> <p>Forget Password?</p></a>
</div>
</div>
<div className={styles.reme}>
  <input type='checkbox' /><span>Rememeber me</span>
</div>




     </div>
    </div>
  )
}

export default Signin
