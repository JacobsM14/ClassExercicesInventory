"use client";
import Image from "next/image";
import styles from "../../styles/myProjects.module.css";
import { Fragment, useEffect, useRef } from "react";
import Header from "@/components/header_component/header";
import * as Ariakit from "@ariakit/react";

// import { AnimatePresence, motion } from "framer-motion";

const MyProjects: React.FC = () => {
  //   //? BUTTON REFS
  //   //*TECH
  //   const refButtonTech = useRef<HTMLDivElement>(null);
  //   const dropDownTech = useRef<HTMLDivElement>(null);
  //   //*NoTECH

  //   useEffect(() => {
  //     if (refButtonTech.current) {
  //       refButtonTech.current.addEventListener("click", () => {
  //         if (dropDownTech.current) {
  //           console.log(dropDownTech.current.style.display);

  //           if (dropDownTech.current.style.display == "flex") {
  //             dropDownTech.current.style.display = "none";
  //           } else {
  //             dropDownTech.current.style.display = "flex";
  //           }
  //         }
  //       });
  //     }
  //   }, []);

  return (
    <Fragment>
      <Header title={"MyProjects"} />
      <div id={styles.page_myProjects}>
        <h3>Wellcome to My Projects storage!</h3>
        <p>Here you can look how these projects works!</p>
        <div className={styles.contWidth}>
          <Ariakit.MenuProvider>
            <Ariakit.MenuButton className="button">
              Actions
              <Ariakit.MenuButtonArrow />
            </Ariakit.MenuButton>
            <Ariakit.Menu gutter={8} className="menu">
              <Ariakit.MenuItem
                className="menu-item"
                onClick={() => alert("Edit")}
              >
                Edit
              </Ariakit.MenuItem>
              <Ariakit.MenuItem className="menu-item">Share</Ariakit.MenuItem>
              <Ariakit.MenuItem className="menu-item" disabled>
                Delete
              </Ariakit.MenuItem>
              <Ariakit.MenuSeparator className="separator" />
              <Ariakit.MenuItem className="menu-item">Report</Ariakit.MenuItem>
            </Ariakit.Menu>
          </Ariakit.MenuProvider>
        </div>
      </div>
    </Fragment>
  );
};

export default MyProjects;
