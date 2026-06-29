import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component111.module.css";

export type FrameComponent111Type = {
  className?: string;
};

const FrameComponent111: NextPage<FrameComponent111Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.demoDayShowcaseInner, className].join(" ")}>
      <header className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.ltWw1Wrapper}>
            <Image
              className={styles.ltWw1}
              loading="lazy"
              width={39}
              height={59}
              sizes="100vw"
              alt=""
              src="/lt-ww-1@2x.png"
            />
          </div>
          <Image
            className={styles.ltWw2}
            loading="lazy"
            width={269}
            height={59}
            sizes="100vw"
            alt=""
            src="/lt-ww-2@2x.png"
          />
        </div>
        <div className={styles.frameWrapper}>
          <button className={styles.registerWrapper}>
            <div className={styles.register}>Register</div>
          </button>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent111;
