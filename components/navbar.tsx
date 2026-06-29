"use client";

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import CornerButton from "./ui/corner-button";
import styles from "./navbar.module.css";

export type NavbarType = {
  className?: string;
};

const Navbar: NextPage<NavbarType> = ({ className = "" }) => {
  const openRegistration = () => {
    window.open(
      "https://forms.gle/yGqLcHcexxrzBDxD8",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <nav className={[styles.navbar, className].join(" ")}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/lt-ww-1@2x.png"
            alt="Lenient Tree Logo"
            width={40}
            height={40}
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>LENIENT TREE</span>
        </Link>
        <CornerButton
          accentColor="#5f7cff"
          className={styles.registerCornerButton}
          wrapperClassName={styles.registerCornerWrapper}
          onClick={openRegistration}
          showIcon={false}
          type="button"
        >
          Register
        </CornerButton>
      </div>
    </nav>
  );
};

export default Navbar;
