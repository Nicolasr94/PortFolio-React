import React from 'react'
import Styles from '../Assets/Styles/StylesBoxs.module.css'
import BtnSimple from './BtnSimple'

export default function BoxSmall() {
  return (
    <React.Fragment>
      <div className={Styles.boxSmall}>
      <div className={Styles.navbar}>
        Windows PowerShell
        </div>
      <BtnSimple text={"Apreta!"}></BtnSimple>
        </div>
     </React.Fragment>
  )
}
