"use client";
import Image from "next/image";
import styles from "../../styles/myProjects.module.css";
import React, { useEffect } from "react";
import { Fragment, useRef, useState } from "react";
import Header from "@/components/header_component/header";
import Dropsdown from "@/components/dropsdown_component/dropsdown";

export default function MyProjects() {
  const dropdownRef1 = useRef<HTMLButtonElement>(null);

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["All"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  // useEffect(() => {
  //   if (dropdownRef1.current) {
  //     dropdownRef1.current.addEventListener("click", function () {
  //       console.log("-------");
  //       console.log(selectedValue);
  //     });
  //   }
  // });

  return (
    <Fragment>
      <Header title={"MyProjects"} />
      <div id={styles.page_myProjects}>
        <div className={styles.pageIntroduction}>
          <h3>Welcome to My Projects storage!</h3>
          <p>Here you can see a lot of exercices of a lot of technologies</p>
        </div>
        <div className={styles.contWidth}>
          <div className={styles.dropDownSelectionSection}>
            <Dropsdown
              id={"dropdown1"}
              startValue={"All"}
              selectedKeys={JSON.stringify(selectedKeys)}
              setSelectedKeys={setSelectedKeys}
              selectedValue={selectedValue}
              dropdownItems={[
                "All",
                "CSS",
                "HTML",
                "React",
                "TypeScript",
                "JavaScript",
                "C++",
              ]}
            />
            <button
              id={styles.buttonRefFilter}
              ref={dropdownRef1}
              className={styles.buttonStyle}
            >
              FILTER
            </button>
          </div>
          <div id={styles.showProjectsSection}>
            <div className={styles.contProject}>
              <div className={styles.flexCont}>
                <h3>ProjectExample01</h3>
                <button>Download</button>
              </div>
              <p>A project for make the template to show projects xdxd.</p>
            </div>
            <div className={styles.contProject}>
              <div className={styles.flexCont}>
                <h3>ProjectExample01</h3>
                <button>Download</button>
              </div>
              <p>A project for make the template to show projects xdxd.</p>
            </div>
            <div className={styles.contProject}>
              <div className={styles.flexCont}>
                <h3>ProjectExample01</h3>
                <button>Download</button>
              </div>
              <p>A project for make the template to show projects xdxd.</p>
            </div>
            <div className={styles.contProject}>
              <div className={styles.flexCont}>
                <h3>ProjectExample01</h3>
                <button>Download</button>
              </div>
              <p>A project for make the template to show projects xdxd.</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
