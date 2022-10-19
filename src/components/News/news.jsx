import React from 'react'
import styles from "./news.module.css";

export default function News() {
  return (
    <div className = {styles.news}>

      <div>news</div>
      <div>
        

       <img className = {styles.newsIMG} src={require('../../db/img/pyvnagavan.png')} alt="news" />
        

      </div>


    </div>
  )
}
