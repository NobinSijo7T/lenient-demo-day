import type { NextPage } from "next";
import Image from "next/image";
import styles from "./navbar.module.css";

export type NavbarType = {
  className?: string;
};

const Navbar: NextPage<NavbarType> = ({ className = "" }) => {
  return (
    <nav className={[styles.navbar, className].join(" ")}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <Image
            src="/lt-ww-1@2x.png"
            alt="Lenient Tree Logo"
            width={50}
            height={50}
          />
          <span className={styles.logoText}>Lenient Tree</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#problems" className={styles.navLink}>Problem Statements</a>
          <a href="#faq" className={styles.navLink}>FAQs</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
