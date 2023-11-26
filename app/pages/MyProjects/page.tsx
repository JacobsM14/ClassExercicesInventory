"use client";
import Image from "next/image";
import styles from "../../styles/myProjects.module.css";
import React from "react";
import { Fragment, useRef, useState } from "react";
import Header from "@/components/header_component/header";
import Dropsdown from "@/components/dropsdown_component/dropsdown";
import { dropdown } from "@nextui-org/react";

export default function MyProjects() {
  const dropdownRef1 = useRef<HTMLDivElement>(null);
  console.log(dropdownRef1.current?.innerHTML);

  return (
    <Fragment>
      <Header title={"MyProjects"} />
      <div id={styles.page_myProjects}>
        <div className={styles.pageIntroduction}>
          <h3>Wellcome to My Projects storage!</h3>
          <p>Here you can look how these projects works!</p>
        </div>
        <div className={styles.contWidth}>
          <div className={styles.dropDownSelectionSection}>
            <div ref={dropdownRef1}>
              <Dropsdown
                id={"dropdown1"}
                startValue={"All"}
                dropdownItems={["All", "None", "React", "HTML", "JavaScript"]}
              />
            </div>
            <Dropsdown
              id={"dropdown2"}
              startValue={"All"}
              dropdownItems={["All", "Yes", "React", "HTML", "JavaScript"]}
            />
            <button className={styles.buttonStyle}>FILTER</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
