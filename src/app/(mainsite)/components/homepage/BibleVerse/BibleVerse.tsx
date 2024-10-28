import styles from './bibleverse.module.css';

export default function BibleVerse(){
return (
 <header className={styles.bibleVerse}>
    
    <p>“Jesus gave the apostles, prophets, evangelists, shepherds, and teachers to equip the saints for ministry and to build up the body of Christ.” <strong>- Ephesians 4:11-13</strong></p>

    <img src='/img/bible-verse.png' alt='Image of Bible' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.3)"}} className='shader'></div>
 </header>
)};