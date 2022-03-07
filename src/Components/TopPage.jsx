import React from 'react'
import Style from '../Assets/Styles/StylesGrid.module.css'
import NavBar from './NavBar'
import BoxLarge from './BoxLarge'
import Link from './Link'
import Img from './Img'
import { useState } from 'react'

export default function TopPage() {
  const [link,setLink] = useState(0)

  return (
    <React.Fragment>
      <NavBar 
      value={link}>
      </NavBar>
      <div className={Style.gridTwo}>
      <BoxLarge value={link}><Img value={link}></Img></BoxLarge>
        <div>
        <Link text1={"Node.js"} text2={"React.js"} text3={"SQL"} changeClick={(num) => setLink(num)}></Link>
        </div>
      </div>
      </React.Fragment>
  )
}