 import styles from "../../../styles/FrontPage.module.css";
 import Image from 'next/image';
 import Livro from '../../../public/livro.png';

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
                    <p>Pular</p>
                </div>
                    <p>Confirmar</p>
                <div className={styles.confirmar}>

                </div>
            </div>
        </div>
    )
}