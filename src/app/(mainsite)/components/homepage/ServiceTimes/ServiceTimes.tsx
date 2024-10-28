import styles from "./servicetimes.module.css"

export default function ServiceTimes() {
  return (
    <div className={styles.serviceTimes}>
       <div className={styles.contentWrapper}>
       <h2>
            Service<br />Times
        </h2>
       </div>
       <div className={styles.contentWrapper}>
            <h4>Every Sunday</h4>
            <div className={styles.timesWrapper}>
                <div className={styles.time}>
                    <h5>2PM</h5>
                    <span>Glory<br />Service</span>
                </div>
            </div>
       </div>
       <div className={styles.contentWrapper}>
       <h4>1st/3rd Sundays of Month</h4>
            <div className={styles.timesWrapper}>
            <div className={styles.time}>
                    <h5>6PM</h5>
                    <span>Live<br />Worship</span>
                </div>
            </div>
       </div>
       <div className={styles.contentWrapper}>
       <h4>2nd/4th Thursdays of Month</h4>
            <div className={styles.timesWrapper}>
            <div className={styles.time}>
                    <h5>6PM</h5>
                    <span>Power<br />Thursdays</span>
                </div>
            </div>
       </div>
    </div>
  )
}
