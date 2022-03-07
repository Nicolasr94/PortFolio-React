import React from 'react'
import Style from '../Assets/Styles/StylesLinks.module.css'
import BoxSmall from './BoxSmall'

export default function Link({text1,text2,text3,changeClick}) {

  return <React.Fragment>
    <div>
      <div className = {Style.container}>
      <p onClick={() => changeClick(0)} className = {Style.link1}>{text1} </p>
      <p onClick={() => changeClick(1)} className = {Style.link2}>{text2} </p>
      <p onClick={() => changeClick(2)} className = {Style.link3}>{text3} </p>
      </div>
      <BoxSmall></BoxSmall>
    </div>
      </React.Fragment>
}
