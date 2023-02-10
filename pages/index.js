import Head from "next/head";
import styles from "../styles/FrontPage.module.css";
import Image from 'next/image';
import Livro from '../public/livro.png';
import EstrelaCheia from "../public/estrela_cheia.svg";
import EstrelaVazia from "../public/estrela_vazia.svg";
import { useState } from "react";


export default function frontPage() {
    const [rating, setRating] = useState(-1)

    const renderStars = (size) => {
        let arr = []
        for (let index = 0; index < size; index++) {
            arr.push(
            <div style={{position:'relative'}}>
                <Image className={styles.starCheio} style={{opacity: index <= rating ? 1 : 0}} key={`star${index}`} src={EstrelaCheia} alt="estrela-vazia"  onClick={() => setRating(index)}/>
                <Image className={styles.star} style={{opacity: index <= rating ? 0 : 1}} key={`star${index}`} src={EstrelaVazia} alt="estrela-vazia"  onClick={() => setRating(index)}/>
            </div>);
        }
        return arr;
    }

    const stars = new Array(5);
    stars.fill(0)
   return(
       <div className={styles.main} onClick={()=> setRating(-1)}>
           <Head>
                <title>Solar21</title>
            </Head>
           <div className={styles.frontContent}>
               <div className={styles.img}>
                   <Image src={Livro} alt="livro"></Image>
               </div>

               <div className={styles.title}>
                   <p>Como foi a ajuda do tutor?</p>
               </div>

               <div className={styles.stars} onClick={(e) => e.stopPropagation()}>
                    {renderStars(5)}
               </div>
           </div>

           <div className={styles.buttons}>
               <div className={styles.pular}>
                  <p>PULAR</p>
               </div>
                   
               <div className={rating >= 0 ? styles.confirmarActive : styles.confirmar}>
                  <p>CONFIRMAR</p>
               </div>
           </div>
       </div>
   )
}
