import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component11.module.css";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: NextPage<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.image17Parent, className].join(" ")}>
      <Image
        className={styles.image17Icon}
        width={1442}
        height={1076}
        sizes="100vw"
        alt=""
        src="/image-17@2x.png"
      />
      <div className={styles.wrapperScrollToSeeMoreParent}>
        <div className={styles.wrapperScrollToSeeMore}>
          <Image
            className={styles.scrollToSeeMore}
            width={246}
            height={246}
            sizes="100vw"
            alt=""
            src="/Scroll-to-see-more.svg"
          />
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.wrapperUnion}>
            <Image
              className={styles.unionIcon}
              loading="lazy"
              width={44.2}
              height={44.2}
              sizes="100vw"
              alt=""
              src="/Union1@2x.png"
            />
          </div>
          <div className={styles.ellipseGroup}>
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent11;
