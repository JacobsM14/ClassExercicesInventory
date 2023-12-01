"use client";
import styles from "./dropdown.module.css";
import { Fragment, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  startValue,
  selectedValue,
  selectedKeys,
  setSelectedKeys,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Add state for dropdown open

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <Fragment>
      <div className={styles.contDropdownshow}>
        <div className={styles.triggerDropdown}>
          <button
            className={styles.buttonStyle}
            onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown on click
          >
            {selectedValue || startValue}
          </button>
        </div>
        <AnimatePresence>
          {dropdownOpen && ( // Conditionally render dropdown
            <motion.div
              className={styles.showEachOption}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.contOptions}>
                {dropdownItems.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.eachOption}
                      onClick={() => {
                        setSelectedKeys(new Set([item]));
                        setDropdownOpen(false); // Close dropdown when an item is clicked
                      }}
                    >
                      <div
                        className={
                          selectedKeys.includes(item)
                            ? styles.selectedOption
                            : styles.notSelectedOption
                        }
                      >
                        {item}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Fragment>
  );
};

export default dropdownButton;
