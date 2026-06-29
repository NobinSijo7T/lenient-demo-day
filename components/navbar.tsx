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
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Problems", href: "#problems" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

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
        <div className={styles.navActions}>
          <div className={styles.navLinks} aria-label="Page sections">
            {navItems.map((item) => (
              <a className={styles.navLink} href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
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
