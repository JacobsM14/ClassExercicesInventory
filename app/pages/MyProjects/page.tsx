"use client";
import Image from "next/image";
import styles from "../../styles/myProjects.module.css";
import React, { useEffect } from "react";
import { Fragment, useRef, useState } from "react";
import Header from "@/components/header_component/header";
import Dropsdown from "@/components/dropsdown_component/dropsdown";
import { dropdown } from "@nextui-org/react";

export default function MyProjects() {
  const dropdownRef1 = useRef<HTMLButtonElement>(null);

  const [selectedKeys, setSelectedKeys] = React.useState(new Set(['All']));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const [selectedKeys2, setSelectedKeys2] = React.useState(new Set(['All']));

  const selectedValue2 = React.useMemo(
    () => Array.from(selectedKeys2).join(", ").replaceAll("_", " "),
    [selectedKeys2]
  );

  useEffect(() => {
    if (dropdownRef1.current) {
      dropdownRef1.current.addEventListener("click", function() {
        console.log("-------")
        console.log(selectedValue)
        console.log(selectedValue2);
      })
    }
  })


  return (
    <Fragment>
      <Header title={"MyProjects"} />
      <div id={styles.page_myProjects}>
        <div className={styles.pageIntroduction}>
          <h3>Wellcome to My Projects storage!</h3>
          <p>Here you can see how these projects work!</p>
        </div>
        <div className={styles.contWidth}>
          <div className={styles.dropDownSelectionSection}>
            <Dropsdown
              id={"dropdown1"}
              startValue={"All"}
              selectedKeys={JSON.stringify(selectedKeys)}
              setSelectedKeys={setSelectedKeys}
              selectedValue={selectedValue}
              dropdownItems={["All", "None", "React", "HTML", "JavaScript"]}
            />
            <Dropsdown
              id={"dropdown2"}
              startValue={"All"}
              selectedKeys={JSON.stringify(selectedKeys2)}
              setSelectedKeys={setSelectedKeys2}
              selectedValue={selectedValue2}
              dropdownItems={["All", "Yes", "React", "HTML", "JavaScript"]}
            />
            <button id={styles.buttonRefFilter} ref={dropdownRef1} className={styles.buttonStyle}>FILTER</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
