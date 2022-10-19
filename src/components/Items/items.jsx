import React from 'react'
import styles from "./items.module.css"

export default function Items(  {items} ) {
  // items.map(({name})=>{
  //   console.log(name);
  //  })
  return (
    <div className={styles.items}>
     {
       items.map(({name , id , price})=>{
        return (
         <div className={styles.item} key = {id}>

           <h2  >{name}</h2>
           <img className={styles.itemsIMG}src={require('../../db/img/7cfa27f3-0a3d-469a-b9a5-5451534bccc8.png')} alt="name" />
           <p>Ціна за 1 літрasdasd {price} грн</p>
           <button type='button'>Заказать </button>
         </div>
        
        )
        
       })

     }

    </div>
  )
}
