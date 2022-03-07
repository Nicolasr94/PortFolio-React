import React from 'react'
import Styles from '../Assets/Styles/StylesBoxs.module.css'
import Img from './Img'
import ImgNode from '../Images/Node.js_logo.svg'
import ImgReact from '../Images/Reactlogo.svg'
import ImgSql from '../Images/SqlLogo.svg'

export default function BoxLarge({value}) {
 const images = [ImgNode,ImgReact,ImgSql];

 
  return (
    <React.Fragment>
     <div className = { Styles.boxLarge }>
     <Img image = {images[value]} value={value}></Img></div>
      </React.Fragment>
  )
}
