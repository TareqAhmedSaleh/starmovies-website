import React from 'react'
import styles from './GetStarted.module.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-regular-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faApple} from '@fortawesome/free-brands-svg-icons';
import { GoLock } from "react-icons/go";
import {GoMail} from "react-icons/go"




function Login() {
  return (
   <>

    <div className={styles.parentContainer}>
        <div className={styles.firstPage}>
        </div>
        <div className={styles.leftSide}>
                <form>
                <h1>Login</h1>
                <span>Please, put your account information.</span>
                <p>Don’t have an account ?  <Link to='/register'>Register</Link></p>
                <div className={styles.emailBox}>
                <input type='text' placeholder='Enter Email'/>
                <GoMail style={{position:"absolute",left:"0.8rem",width:"0.6rem",height:"0.6rem"}}/></div>
                <div className={styles.passwordBox}><input type='password' placeholder='Enter Password'/>
                <GoLock style={{position:"absolute",left:"0.8rem",width:"0.6rem",height:"0.6rem"}}/></div>
                <section className={styles.heplBox}>
                    <div style={{display:"flex" , justifyContent:"center", alignItems:"center"}}>
                        <input type='checkbox' style={{width:"0.5rem", height:"0.5rem", outline:"none",border:"0.5px solid #759AFF", marginRight:"4px"}}/> <label>Keep Me Logged in</label>
                    </div>
                    <div>
                        <Link>Forget Password ?</Link>
                    </div>
                </section>
                <button type='submit'>Login</button>

                <label style={{fontSize:"0.5rem" , fontFamily:"'Roboto', sans-serif",margin:"8px 0"}}>or Login with</label>
                <div className={styles.altLogins}>
                    <button name='facebook' style={{backgroundColor:"#1778F2"}}><FontAwesomeIcon icon={faFacebook} style={{width:"0.6rem",height:"0.6rem"}} />Facebook</button>
                    <button name='google' style={{backgroundColor:"#ffffff",color:"#08122A"}}><FontAwesomeIcon icon={faGoogle} style={{width:"0.6rem",height:"0.6rem"}}/>Google</button>
                    <button name='apple' style={{backgroundColor:"#23252B"}}><FontAwesomeIcon icon={faApple} style={{width:"0.6rem",height:"0.6rem"}}/>Apple</button>
                </div> 

                </form>
            </div>

            <div className={styles.rightSide} style={{display:"flex", justifyContent:"flex-end" , alignItems:"center",height:"100%",position:"absolute" ,right:"0"}}>
                <img src='iMacMockup.svg' style={{width:"300px" , height:"300px"}}/>
            </div>
    </div>
   </>
  )
}

export default Login;
