import React from 'react'
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className = {styles.header}>
      <img className = {styles.IMG}src="https://t3.ftcdn.net/jpg/01/05/69/02/360_F_105690295_weFR0LI9W0d4gCyjQAReMUrAe1z07tgt.webp" alt="pyvnagavan" />
      <a href="">+380639356317</a>
      <div>

       <img className = {styles.pyvnagavan} src={require('../../db/img/pyvnagavan.png')} alt="pyvnagavan" />
      </div>

      <input className = {styles.themeSelector} type="checkbox" />
      <input className = {styles.languageSelector} type="checkbox" />
      <button type='button'>Вход</button>
      <button type='button'>ЛК</button>
    
    

    </div>
   
  )
}
