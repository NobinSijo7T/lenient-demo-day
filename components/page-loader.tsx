"use client";

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import styles from "./page-loader.module.css";

const PageLoader: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time for smooth experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds minimum

    // Also wait for page to fully load
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div className={`${styles.loaderContainer} ${!isLoading ? styles.hidden : ""}`}>
      {/* Animated Background Grid */}
      <div className={styles.gridBackground}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className={`${styles.gridLine} ${styles.horizontal}`}
            style={{
              top: `${(i + 1) * 20}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className={`${styles.gridLine} ${styles.vertical}`}
            style={{
              left: `${(i + 1) * 20}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Brand/Logo */}
      <div className={styles.loaderBrand}>
        <h1 className={styles.brandText}>LENIENT TREE</h1>
      </div>

      {/* Spinner */}
      <div className={styles.spinnerContainer}>
        <div className={styles.spinner} />
        <div className={styles.spinner} />
        <div className={styles.spinner} />
      </div>

      {/* Loading Text with Dots */}
      <div className={styles.loadingText}>
        <span>Loading</span>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div className={styles.progressFill} />
      </div>
    </div>
  );
};

export default PageLoader;
