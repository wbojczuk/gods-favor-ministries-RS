import styles from './minister.module.css';

export default function Minister(){
return (
 <div className={styles.serve}>

    <h2>We Shall Minister</h2>

    <p>-to the needs of the Whole man, Physically, Financially, and Spiritually. To teach God’s people thru Corporate Worship, Seminars, Conferences, and Fellowship thru the inspired Word of God!</p>
 
    <img src='/img/minister.png' alt='Image of church' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0, 0.73)"}} className='shader'></div>
 </div>
)};