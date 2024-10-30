import styles from "./visitcontent.module.css"

export default function VisitContent() {
  return (
    <section className={styles.visitContent}>
        <div className={styles.content}>
            <h2>Come Give Us A Visit<span className="highlight">!</span></h2>
            <p>Join us in person! our church is located at 5517 S Halsted Chicago, Illinois. 60621.</p>
            <div className={styles.buttonWrapper}>
                <a href="https://maps.app.goo.gl/RrwSz1ft8DcARgHv6" target="_blank" className="main-link">Get Directions</a>
            </div>
        </div>
        <div className={styles.imgWrapper}>
            <div className={styles.imgContainer}>
                <img src="/img/location.png" alt="Image of church's location" />
            </div>
        </div>
    </section>
  )
}
