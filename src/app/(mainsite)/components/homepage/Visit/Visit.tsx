"use client"

import Link from 'next/link';
import styles from './visit.module.css';

export default function Visit(){
return (
 <div className={styles.believe}>

    <h2>Come Visit<span className="highlight">!</span></h2>

    <p>Come visit our ministry in Halsted, Chicago, IL!</p>

    <Link className='main-link' href={"/visit"}>Visit Us</Link>
 
    <img src='/img/visit.png' alt='Image of map' className='bg-img' />
    <div className='shader' style={{backgroundColor: "rgba(0,0,0,0.71)"}}></div>
 </div>
)};