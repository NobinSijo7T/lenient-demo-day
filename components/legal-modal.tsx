"use client";

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import styles from "./legal-modal.module.css";

export type LegalModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string[];
};

const LegalModal: NextPage<LegalModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`${styles.modalOverlay} ${isAnimating ? styles.fadeIn : styles.fadeOut}`}
      onClick={handleBackdropClick}
    >
      <div className={`${styles.modalContainer} ${isAnimating ? styles.slideIn : styles.slideOut}`}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
          <button
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Close modal"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className={styles.modalContent}>
          {content.map((paragraph, index) => {
            // Check if this is a main section title (all caps, short)
            const isSectionTitle = 
              paragraph === paragraph.toUpperCase() && 
              paragraph.length < 100 && 
              paragraph.length > 3 &&
              !paragraph.includes('.') &&
              !/^\d/.test(paragraph);
            
            // Check if this is a numbered section (e.g., "1. DEFINITIONS")
            const isNumberedSection = /^\d+\.\s*[A-Z][A-Z\s]+$/.test(paragraph.trim());
            
            // Check if this is a subsection (e.g., "1.1 Definition Name")
            const isSubsection = /^\d+\.\d+/.test(paragraph.trim());
            
            if (isSectionTitle || isNumberedSection) {
              return (
                <h3 key={index} className={styles.sectionTitle}>
                  {paragraph}
                </h3>
              );
            }
            
            if (isSubsection) {
              return (
                <h4 key={index} className={styles.subsectionTitle}>
                  {paragraph}
                </h4>
              );
            }
            
            return (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
