import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor } from '@fortawesome/free-solid-svg-icons'

import styles from "./Anchor.module.css"

export default function Anchor() {

    const scrollToFooter = ()=>{
        const footer = document.getElementById("footer")
        footer.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start",
          });
    }

const anchor = <FontAwesomeIcon icon = {faAnchor}  color='#efeee9'/>
  return (
    <button className={styles.anchor} onClick = {()=>{scrollToFooter()}}>{anchor}</button>
  )
}
