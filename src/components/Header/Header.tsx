"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import hamburgerIcon from "/public/assets/images/hamburger.png";
import closeIcon from "/public/assets/images/x-symbol.png";
import logo from "/public/assets/images/logoNoText.png";
import { useState } from "react";

const Header: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };

  const imageUrl = mobileMenu ? closeIcon : hamburgerIcon;

  return (
    <header className={styles.mainContainer}>
      <div className={styles.container}>
        <Image src={logo} alt={"Company Logo"} className={`${styles.logo}`} />
        <nav className={`${mobileMenu && styles.navContainer}`}>
          <div
            className={`${styles.linkContainer} ${
              mobileMenu ? "flex flex-col" : "hidden lg:flex"
            }`}
          >
            <Link href={"/"} className={styles.link}>
              <span>Home</span>
            </Link>
            <Link href={"/"} className={styles.link}>
              <span>About</span>
            </Link>
            <Link href={"/"} className={styles.link}>
              <span>Product</span>
            </Link>
            <Link href={"/"} className={styles.link}>
              <span>Terms Of Service</span>
            </Link>
          </div>
        </nav>
        <Image
          src={imageUrl}
          alt={"clickable icon to show and hide the mobile menu"}
          height={23}
          width={23}
          className={`${styles.img} ${mobileMenu && styles.closeIcon}`}
          onClick={handleClick}
        />
      </div>
    </header>
  );
};

export default Header;
