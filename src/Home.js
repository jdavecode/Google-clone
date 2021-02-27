import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Search from "./Search";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.homeHeader}>
        <div className={styles.homeHeaderLeft}>
          <Link className={styles.homeHeaderLink}>About</Link>
          <Link className={styles.homeHeaderLink}>Store</Link>
        </div>
        <div className={styles.homeHeaderRight}>
          <Link className={styles.homeHeaderLink}>Gmail</Link>
          <Link className={styles.homeHeaderLink}>Images</Link>
          <MenuIcon className={styles.homeHeaderIcon} />
          <AccountCircleIcon
            className={styles.homeHeaderIcon}
            className={styles.AccountCircleIcon}
          />
        </div>
      </div>
      <div className={styles.homeBody}>
        <div className={styles.homeBodyImgBox}>
          <img
            className={styles.homeBodyImg}
            src="img/1920px-Google_2015_logo.svg.png"
            alt="googl-image-logo"
          />
        </div>
        <div className={styles.homeInputContainer}>
          <Search HideButton />
        </div>
      </div>
    </div>
  );
}

export default Home;
