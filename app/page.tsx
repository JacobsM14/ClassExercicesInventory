import Image from "next/image";
import styles from "./styles/page.module.css";
import { Fragment, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Home: React.FC = () => {
  const backgroundAnimation = {
    initial: {
      backgroundPosition: "0% 0%",
    },
    animate: {
      backgroundPosition: "100% 0%",
    },
  };

  return (
    <Fragment>
      {/* CONTENT */}
      <div id={styles.page_StarPage01}>
        <div className={styles.infoHome}>
          <div className={styles.contWidth}>
            <div className={styles.recommendedToSee}>
              <h2>Guides Recomended</h2>
              <div className={styles.contWidth}>
                <div className={styles.tabShow}>
                  <Image
                    src="/images/icons/techIcons/jsLogo.png"
                    width={300}
                    height={300}
                    alt="logoJS"
                  />
                  <h4>JavaScript</h4>
                  {/* <p>
                    Is a language, really important for build your own websites,
                    this can hel you to manage cookies, make animations... On
                    your WebSite
                  </p> */}
                </div>
                <div className={styles.tabShow}>
                  <Image
                    src="/images/icons/techIcons/reactLogo.png"
                    width={300}
                    height={300}
                    alt="logoJS"
                  />
                  <h4>JavaScript</h4>
                  {/* <p>
                    Is a language, really important for build your own websites,
                    this can hel you to manage cookies, make animations... On
                    your WebSite
                  </p> */}
                </div>
                <div className={styles.tabShow}>
                  <Image
                    src="/images/icons/techIcons/tsLogo.png"
                    width={300}
                    height={300}
                    alt="logoJS"
                  />
                  <h4>TypeScript</h4>
                  {/* <p>
                    Is a language, really important for build your own websites,
                    this can hel you to manage cookies, make animations... On
                    your WebSite
                  </p> */}
                </div>
              </div>
            </div>
            <div className={styles.aboutMeContent}>
              <div
                className={
                  styles.contWidth +
                  " " +
                  styles.divContGen +
                  " " +
                  styles.flexCont
                }
              >
                <div id={styles.aboutMe}>
                  <h3>Hi, I'm Marcel!</h3>
                  <p>
                    I'm a web developer, I like to learn new things and I'm
                    always looking for new challenges.
                  </p>

                  <p>
                    I made this Website to store all the thigs I learn about my
                    profession, <strong>PROGRAMMING</strong>
                  </p>
                </div>
                <div id={styles.infoLinks}>
                  <h3>Find me here!</h3>
                  <div id={styles.iconsInfo}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="146"
                      height="146"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.38 8.53c.16-.4.68-1.99-.17-4.14c0 0-1.31-.39-4.3 1.61c-1.25-.33-2.58-.38-3.91-.38c-1.32 0-2.66.05-3.91.38c-2.99-2.03-4.3-1.61-4.3-1.61c-.85 2.15-.33 3.74-.16 4.14C2.61 9.62 2 11 2 12.72c0 6.44 4.16 7.89 10 7.89c5.79 0 10-1.45 10-7.89c0-1.72-.61-3.1-1.62-4.19M12 19.38c-4.12 0-7.47-.19-7.47-4.19c0-.95.47-1.85 1.27-2.58c1.34-1.23 3.63-.58 6.2-.58c2.59 0 4.85-.65 6.2.58c.8.73 1.3 1.62 1.3 2.58c0 3.99-3.37 4.19-7.5 4.19m-3.14-6.26c-.82 0-1.5 1-1.5 2.22c0 1.23.68 2.24 1.5 2.24c.83 0 1.5-1 1.5-2.24c0-1.23-.67-2.22-1.5-2.22m6.28 0c-.83 0-1.5.99-1.5 2.22c0 1.24.67 2.24 1.5 2.24c.82 0 1.5-1 1.5-2.24c0-1.23-.64-2.22-1.5-2.22z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="146"
                      height="146"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="146"
                      height="146"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.001 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm13.3 12.94c-.1-.05-.15-.2-.15-.301V8.006c0-.1.05-.25.15-.351l.955-1.105V6.5h-3.415l-2.56 6.478L9.367 6.5H5.852v.05l.904 1.256c.201.2.251.502.251.753v5.523c.05.302 0 .653-.15.954L5.5 16.894v.05h3.616v-.05L7.76 15.087c-.15-.302-.201-.603-.15-.954V9.11c.05.1.1.1.15.301l3.414 7.633h.05L14.54 8.76c-.05.3-.05.652-.05.904v5.925c0 .15-.05.25-.15.351l-1.005.954v.05h4.921v-.05l-.954-.954Z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="146"
                      height="146"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
