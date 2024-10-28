"use client"
import styles from './header.module.css';
import Link from 'next/link';

export default function Header(){
return (
 <header className={styles.header}>

    <h1>A place of Refuge, Solace, Help and Encouragement<span className="highlight">.</span></h1>

    <div className={`${styles.linkWrapper} center`}>
      <Link className='main-link' href='#place'>Learn More</Link>
      <Link className='main-link' href='/give'>Give Here</Link>
    </div>
 
    <img src='/img/header-bg.png' alt='Image of ' className='bg-img' />
    <div className='shader'></div>
 </header>
)};