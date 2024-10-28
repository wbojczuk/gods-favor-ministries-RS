import styles from './place.module.css';

export default function Place(){
return (
 <div className={styles.believe} id="place">

    <div className="center">
      <h2>There’s always a place for you<span className="highlight">!</span></h2>
    </div>

    <p>Volunteering at God's Favor Ministries allows you to stay actively connected to the church and community. Whether you're a Minister, Greeter, part of the Culinary or Music teams, a Nurse, Trustee, or Deacon, each role plays a vital part in fostering a welcoming and supportive environment. Through service, we grow in faith, build relationships, and contribute to the overall mission of the ministry, making a lasting impact on those around us.</p>
 
    <img src='/img/place.png' alt='Image of man praising god' className='bg-img' />
    <div className='shader' style={{backgroundColor: "rgba(0,0,0,0.8)"}}></div>
 </div>
)};