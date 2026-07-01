"use client";

import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import CornerButton from "./ui/corner-button";
import styles from "./navbar.module.css";

export type NavbarType = {
  className?: string;
};

const Navbar: NextPage<NavbarType> = ({ className = "" }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero section (adjust threshold as needed)
      const heroHeight = window.innerHeight * 0.85; // 85% of viewport height
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openRegistration = () => {
    window.open(
      "https://forms.gle/yGqLcHcexxrzBDxD8",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <nav
      className={[
        styles.navbar, 
        isScrolled ? styles.scrolled : "",
        className
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.navContent}>
        <Link href="/" className={styles.logo}>
          <Image
            src={isScrolled ? "/ver2.png" : "/ver1.png"}
            alt="Lenient Tree Logo"
            width={isScrolled ? 40 : 200}
            height={isScrolled ? 40 : 200}
            className={styles.logoIcon}
          />
        </Link>
        <div className={styles.navActions}>
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
      </div>
    </nav>
  );
};

export default Navbar;
