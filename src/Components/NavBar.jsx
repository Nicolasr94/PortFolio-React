import React from "react";
import Styles from '../Assets/Styles/Styles.module.css'
import Logo from './Logo.jsx'

export default function NavBar ({value}) {
 let styles = {
   0:{backgroundColor:"#233056"},
   1:{backgroundColor:"#282C34"},
   2:{backgroundColor:"#3E6E93"} 
 }
  return  <React.Fragment> 
    <div className={Styles.divNav} style={styles[value]}>
      <Logo/>
  </div>
  </React.Fragment>
}