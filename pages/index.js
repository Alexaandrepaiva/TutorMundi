import styles from "../styles/FrontPage.module.css";
import Image from 'next/image';
import Livro from '../public/livro.png';
import EstrelaCheia from "../public/estrela_cheia.svg";
import EstrelaVazia from "../public/estrela_vazia.svg";


export default function frontPage() {
   return(
       <div className={styles.main}>
           <div className={styles.frontContent}>
               <div className={styles.img}>
                   <Image src={Livro} alt="livro"></Image>
               </div>

               <div className={styles.title}>
                   <p>Como foi a ajuda do tutor?</p>
               </div>

               <div className={styles.stars}>

               </div>
           </div>

           <div className={styles.buttons}>
               <div className={styles.pular}>
                  <p>PULAR</p>
               </div>
                   
               <div className={styles.confirmar}>
                  <p>CONFIRMAR</p>
               </div>
           </div>
       </div>
   )
}
