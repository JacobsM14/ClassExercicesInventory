import Image from "next/image";
import styles from "./footer.module.css";
import { Fragment } from "react";

const footer = () => {
  return (
    <Fragment>
      {/* <div className={styles.divContGen}> */}
      <div className={styles.footerCont}>
        <h3>
          Powered by <span>Marcel</span>
        </h3>
        <p>WebSite build in TypeScript</p>
      </div>
      {/* </div> */}
    </Fragment>
  );
};

export default footer;
