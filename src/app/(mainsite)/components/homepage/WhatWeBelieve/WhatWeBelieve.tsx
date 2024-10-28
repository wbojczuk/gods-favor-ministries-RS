import styles from './whatwebelieve.module.css';

export default function WhatWeBelieve(){
return (
 <div className={styles.whatWeBelieve}>

    <h2>What<br />We<br /><span className="highlight-gradient">Believe</span></h2>

    <p>"WE ARE BETTER TOGETHER" reflects the heart of God's Favor Ministries, reminding us that true strength comes from unity in the body of Christ. Together, we share our gifts, build each other up, and foster a loving, supportive community. By building lives for Kingdom living, we commit to serving God, growing in faith, and making a lasting impact in the world.
</p>
 
    <img src='/img/believe.png' alt='Image of cross' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.62)"}} className='shader'></div>
 </div>
)};