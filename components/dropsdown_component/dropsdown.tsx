"use client";
import styles from "./dropdown.module.css";
import React from "react";
import { Fragment } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

interface dropdownProps {
  id: string;
  startValue: string;
  dropdownItems: string[];
  selectedValue: string;
  selectedKeys: string;
  setSelectedKeys: any;


}

// import { AnimatePresence, motion } from "framer-motion";

const dropdownButton: React.FC<dropdownProps> = ({
  id,
  dropdownItems,
  selectedValue,
  selectedKeys,
  setSelectedKeys,
}) => {
  

  return (
    <Fragment>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className={styles.buttonStyle}>
            {selectedValue}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="146"
              height="146"
              viewBox="0 0 24 24"
            >
              <path fill="#aa96da" d="m12 15l-5-5h10l-5 5Z" />
            </svg>
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Single selection"
          variant="flat"
          className={styles.dropDownMenu}
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          {dropdownItems.map((element) => {
            return <DropdownItem key={element}>{element}</DropdownItem>;
          })}
        </DropdownMenu>
      </Dropdown>
    </Fragment>
  );
};

export default dropdownButton;
