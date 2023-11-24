import Image from 'next/image'
import styles from './styles/page.module.css'
// import styleGlobal from './styles/forAll.module.css'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <div id={styles.page_StarPage01}>
        <div className={styles.divContGen}>
          <div className={styles.contWidth}>
            {/* HEADER */}
            <div className={styles.textHeader}>
              <Image src="/images/icons/jacobIcon.png" alt="Logo" width={100} height={100} />
              <h1><span>MY</span> PERSONAL MANUAL</h1>
              <h3>By <span>Marcel Esplugas</span></h3>
              <p>Here you can see my exercices of DAW</p>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="146" height="146" viewBox="0 0 24 24"><path fill="#aa96da" d="M18 6.41L16.59 5L12 9.58L7.41 5L6 6.41l6 6z"/><path fill="#aa96da" d="m18 13l-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"/></svg> */}
            </div>
          </div>
            {/* CHOOSE THE LEARN */}
            <nav className={styles.navShow}>
              <ul>
                <li><a href="" className={styles.selected}>Home</a></li>
                <li><a href="">JavaScript</a></li>
                <li><a href="">PHP</a></li>
                <li><a href="">CSS</a></li>
                <li><a href="">React</a></li>
                <li><a href="">TypeScript</a></li>
                <li><a href="">MyProjects</a></li>
              </ul>
            </nav>
            <div className={styles.lineNav}>

            </div>
          </div>
      </div>
    </Fragment>
  )
}
