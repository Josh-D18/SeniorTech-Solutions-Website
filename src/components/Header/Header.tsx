"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import hamburgerIcon from "/public/assets/images/hamburger.png";
import closeIcon from "/public/assets/images/x-symbol.png";
import { useState } from "react";

const Header: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };

  const imageUrl = mobileMenu ? closeIcon : hamburgerIcon;

  return (
    <section className={styles.mainContainer}>
      <div className={styles.container}>
        <h1 className={styles.companyTitle}>True Flow Electronics</h1>
        <nav className={`${mobileMenu && styles.navContainer}`}>
          <ul
            className={`${styles.linkContainer} ${
              mobileMenu ? "flex flex-col" : "hidden lg:flex"
            }`}
          >
            <Link href={"/"} className={styles.link}>
              <li>Home</li>
            </Link>
            <Link href={"/about"} className={styles.link}>
              <li>About</li>
            </Link>
            <Link href={"/product"} className={styles.link}>
              <li>Product</li>
            </Link>
            <Link href={"/terms"} className={styles.link}>
              <li>Terms Of Service</li>
            </Link>
          </ul>
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
    </section>
  );
};

export default Header;
