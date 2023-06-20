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

    document.title = "Starmovies - Login"

  return (
   <>

    <div className={styles.parentContainer}>
        <div className={styles.firstPage}>
        </div>
        <div className={styles.leftSide}>
        <div className={styles.circlesPattern}></div>

                <form>
                <h1>Login</h1>
                <span>Please, put your account information.</span>
                <p>Don’t have an account ?  <Link to='/register'>Register</Link></p>
                <div className={styles.emailBox}>
                <input type='text' placeholder='Enter Email'/>
                <GoMail style={{position:"absolute",left:"1.5rem",width:"1rem",height:"1rem"}}/></div>
                <div className={styles.passwordBox}><input type='password' placeholder='Enter Password'/>
                <GoLock style={{position:"absolute",left:"1.5rem",width:"1rem",height:"1rem"}}/></div>
                <section className={styles.heplBox}>
                    <div style={{display:"flex" , justifyContent:"center", alignItems:"center"}}>
                        <input type='checkbox' style={{border:"3px solid #759AFF",marginRight:"16px"}}/> <label>Keep Me Logged in</label>
                    </div>
                    <div>
                        <Link>Forget Password ?</Link>
                    </div>
                </section>
                <button type='submit'>Login</button>

                <div className={styles.orBox}>
                    <div className={styles.seperator}></div>
                    <label>or Login with</label>
                    <div className={styles.seperator}></div>
                </div>
                <div className={styles.altLogins}>
                    <button name='facebook' style={{backgroundColor:"#1778F2"}}><FontAwesomeIcon icon={faFacebook} style={{width:"1rem",height:"1rem"}} />Facebook</button>
                    <button name='google' style={{backgroundColor:"#ffffff",color:"#08122A"}}><FontAwesomeIcon icon={faGoogle} style={{width:"1rem",height:"1rem"}}/>Google</button>
                    <button name='apple' style={{backgroundColor:"#23252B"}}><FontAwesomeIcon icon={faApple} style={{width:"1rem",height:"1rem"}}/>Apple</button>
                </div> 

                </form>
            </div>

            <div className={styles.rightSide} style={{display:"flex", justifyContent:"flex-end" , alignItems:"center",height:"100%",position:"absolute" ,right:"0"}}>
            <img src={require('./iMacMockup.svg')?.default} style={{width:"500px" , height:"500px" , position:"absolute",right:"0"}}/>
            </div>

    </div>
   </>
  )
}

export default Login;
