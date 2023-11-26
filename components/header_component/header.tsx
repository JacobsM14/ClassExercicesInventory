"use client";
import Image from "next/image";
import styles from "./header.module.css";
import { Fragment, useEffect, useRef } from "react";

interface headerProps {
  title: string;
}

const header: React.FC<headerProps> = ({ title }) => {
  // REFS FOR NAV
  const homeRef = useRef<HTMLAnchorElement>(null);
  const myProjectsRef = useRef<HTMLAnchorElement>(null);
  const personalBlogRef = useRef<HTMLAnchorElement>(null);
  const typescriptRef = useRef<HTMLAnchorElement>(null);
  const htmlRef = useRef<HTMLAnchorElement>(null);
  const cssRef = useRef<HTMLAnchorElement>(null);
  const javascriptRef = useRef<HTMLAnchorElement>(null);
  const phpRef = useRef<HTMLAnchorElement>(null);
  const reactRef = useRef<HTMLAnchorElement>(null);
  const wordpressRef = useRef<HTMLAnchorElement>(null);
  const mysqlRef = useRef<HTMLAnchorElement>(null);
  const cppRef = useRef<HTMLAnchorElement>(null);
  const javaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Based on the title, we will change the style of the nav
    switch (title) {
      case "home":
        if (homeRef.current) {
          homeRef.current.style.fontWeight = "700";
          homeRef.current.style.color = "#645caa";
        }
        break;
      case "MyProjects":
        if (myProjectsRef.current) {
          myProjectsRef.current.style.fontWeight = "700";
          myProjectsRef.current.style.color = "#645caa";
        }
        break;
      case "PersonalBlog":
        if (personalBlogRef.current) {
          personalBlogRef.current.style.fontWeight = "700";
          personalBlogRef.current.style.color = "#645caa";
        }
        break;
      case "TypeScript":
        if (typescriptRef.current) {
          typescriptRef.current.style.fontWeight = "700";
          typescriptRef.current.style.color = "#645caa";
        }
        break;
      case "HTML":
        if (htmlRef.current) {
          htmlRef.current.style.fontWeight = "700";
          htmlRef.current.style.color = "#645caa";
        }
        break;
      case "CSS":
        if (cssRef.current) {
          cssRef.current.style.fontWeight = "700";
          cssRef.current.style.color = "#645caa";
        }
        break;
      case "JavaScript":
        if (javascriptRef.current) {
          javascriptRef.current.style.fontWeight = "700";
          javascriptRef.current.style.color = "#645caa";
        }
        break;
      case "PHP":
        if (phpRef.current) {
          phpRef.current.style.fontWeight = "700";
          phpRef.current.style.color = "#645caa";
        }
        break;
      case "React":
        if (reactRef.current) {
          reactRef.current.style.fontWeight = "700";
          reactRef.current.style.color = "#645caa";
        }
        break;
      case "Wordpress":
        if (wordpressRef.current) {
          wordpressRef.current.style.fontWeight = "700";
          wordpressRef.current.style.color = "#645caa";
        }
        break;
      case "MySql":
        if (mysqlRef.current) {
          mysqlRef.current.style.fontWeight = "700";
          mysqlRef.current.style.color = "#645caa";
        }
        break;
      case "Cpp":
        if (cppRef.current) {
          cppRef.current.style.fontWeight = "700";
          cppRef.current.style.color = "#645caa";
        }
        break;
      case "Java":
        if (javaRef.current) {
          javaRef.current.style.fontWeight = "700";
          javaRef.current.style.color = "#645caa";
        }
        break;
      default:
        if (homeRef.current) {
          homeRef.current.style.fontWeight = "700";
          homeRef.current.style.color = "#645caa";
        }
        break;
    }
  }, []);

  return (
    <Fragment>
      <div className={styles.divContGen}>
        <div className={styles.backgroundHeader}>
          <div className={styles.contWidth}>
            {/* HEADER */}
            <div className={styles.textHeader}>
              <Image
                src="/images/icons/jacobIcon.png"
                alt="Logo"
                width={1000}
                height={1000}
              />
              <h1>
                <span>MY</span> PERSONAL MANUAL
              </h1>
              <h3>
                By <span>Marcel Esplugas</span>
              </h3>
              {/* <p>Here you can see my exercices of DAW</p> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="146" height="146" viewBox="0 0 24 24"><path fill="#aa96da" d="M18 6.41L16.59 5L12 9.58L7.41 5L6 6.41l6 6z"/><path fill="#aa96da" d="m18 13l-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"/></svg> */}
            </div>
          </div>
          {/* CHOOSE THE LEARN */}
          <div className={styles.allNav}>
            <nav className={styles.navShow}>
              <ul>
                <li>
                  <a href="/" ref={homeRef}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/pages/MyProjects" ref={myProjectsRef}>
                    MyProjects
                  </a>
                </li>
                <li>
                  <a href="" ref={personalBlogRef}>
                    PersonalBlog
                  </a>
                </li>
                <li>
                  <a href="" ref={typescriptRef}>
                    TypeScript
                  </a>
                </li>
                <li>
                  <a href="" ref={htmlRef}>
                    HTML
                  </a>
                </li>
                <li>
                  <a href="" ref={cssRef}>
                    CSS
                  </a>
                </li>
                <li>
                  <a href="" ref={javascriptRef}>
                    JavaScript
                  </a>
                </li>
                <li>
                  <a href="" ref={phpRef}>
                    PHP
                  </a>
                </li>
                <li>
                  <a href="" ref={reactRef}>
                    React
                  </a>
                </li>
                <li>
                  <a href="" ref={wordpressRef}>
                    Wordpress
                  </a>
                </li>
                <li>
                  <a href="" ref={mysqlRef}>
                    MySql
                  </a>
                </li>
                <li>
                  <a href="" ref={cppRef}>
                    Cpp
                  </a>
                </li>
                <li>
                  <a href="" ref={javaRef}>
                    Java
                  </a>
                </li>
              </ul>
            </nav>
            <div className={styles.lineNav}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default header;
