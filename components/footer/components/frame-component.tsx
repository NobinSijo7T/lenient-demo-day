"use client";

import { useState } from "react";
import type { NextPage } from "next";
import styles from "./frame-component.module.css";
import LegalModal from "../../legal-modal";

// Import JSON data
import privacyPolicyData from "../../../Privacy_Policy_Lenient_Tree.json";
import termsData from "../../../Terms_and_Conditions_Lenient_Tree.json";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <>
      <footer className={[styles.frameParent, className].join(" ")}>
        <div className={styles.lenientTree2025AllRightsParent}>
          <div className={styles.copyrightText}>
            Lenient Tree © 2026 - All rights reserved.
          </div>
          <div className={styles.privacyPolicyParent}>
            <button
              className={styles.legalLink}
              onClick={() => setShowPrivacyModal(true)}
            >
              Privacy Policy
            </button>
            <div className={styles.frameChild} />
            <button
              className={styles.legalLink}
              onClick={() => setShowTermsModal(true)}
            >
              Terms & Conditions
            </button>
          </div>
        </div>
        <div className={styles.madeWith}>Made with ♥️ from Lenient Tree</div>
      </footer>

      {/* Legal Modals */}
      <LegalModal
        isOpen={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
        title={privacyPolicyData.title}
        content={privacyPolicyData.content}
      />
      <LegalModal
        isOpen={showTermsModal}
        onClose={() => setShowTermsModal(false)}
        title={termsData.title}
        content={termsData.content}
      />
    </>
  );
};

export default FrameComponent;
