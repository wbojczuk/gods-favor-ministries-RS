"use client"
import styles from "./aboutus.module.css"
import Link from "next/link"

export default function AboutUs() {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={"/img/aboutus.png"} width={360} height={600} alt="Image of the Logo" />
        </div>
        

        <div className={styles.content}>
            <h2>About Us<span className="highlight">.</span></h2>

            <p>God's Favor Ministries in Chicago is a welcoming community where everyone is valued and supported. As a place of refuge, encouragement, and help, we are dedicated to ministering to the whole person—physically, financially, and spiritually. Through worship, seminars, conferences, and fellowship, we teach and uplift God’s people, sharing His inspired Word. Our goal is to strive for excellence so that our lives reflect God’s glory in everything we do.
            </p>
        </div>
    </section>
  )
}
