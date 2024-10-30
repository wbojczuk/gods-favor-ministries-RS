"use client"
import styles from "./aboutus.module.css"
import Link from "next/link"

export default function GiveContent() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={"/img/give.png"} width={360} height={600} alt="Image of the Church" />
        </div>
        

        <div className={styles.content}>
            <h2>Sow Into Good Soil<span className="highlight">!</span></h2>

            <p>Giving helps us continue doing what we do and making sure our future stays strong. You can give at the link below or by using Zelle or Apple Pay to: 3128346987</p>

            <Link className="main-link" href="https://www.givelify.com/donate/NzY5Njg=/selection" target="_blank">Support Us</Link>

        </div>
    </section>
  )
}
