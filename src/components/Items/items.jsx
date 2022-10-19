import React from 'react'
import styles from "./items.module.css"

export default function Items(  {items} ) {
  // items.map(({name})=>{
  //   console.log(name);
  //  })
  return (
    <div className={styles.items}>
     {
       items.map(({name , id})=>{
        return (
         <div>

           <p key = {id} >{name}</p>

         </div>
        
        )
        
       })

     }

    </div>
  )
}
