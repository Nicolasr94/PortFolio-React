import React from 'react'
import Styles from '../Assets/Styles/Styles.module.css'


export default function Img({image,value}) {
  const bkcStyle = {
    0:{backgroundColor:"#3F873F"},
    1:{backgroundColor:"#366071"},
    2:{backgroundColor:"#F7F7F7"}
  }


  return <React.Fragment>
    <img className={Styles.classImage} style={bkcStyle[value]}src={image} alt="Imagen Nodejs/React/SQL"/>
    </React.Fragment>
}
