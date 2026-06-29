import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component1111.module.css";

export type FrameComponent1111Type = {
  className?: string;
};

const FrameComponent1111: NextPage<FrameComponent1111Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.demoDayShowcaseInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <section className={styles.introducingParent}>
          <h2 className={styles.introducing}>Introducing</h2>
          <div className={styles.demoDayParent}>
            <h1 className={styles.demoDay}>DEMO DAY</h1>
            <h3 className={styles.loremIpsumEvent}>
              Lorem Ipsum Event new for student grow and learn. Lorem Ipsum
              Event new for student grow and learn.
            </h3>
          </div>
        </section>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.parent}>
                <h2 className={styles.h2}>50+</h2>
                <h3 className={styles.eventsConducted}>Events conducted</h3>
              </div>
              <div className={styles.group}>
                <h2 className={styles.h2}>5000+</h2>
                <h3 className={styles.registrationsAcrossEvents}>
                  Registrations across events
                </h3>
              </div>
            </div>
          </div>
          <Image
            className={styles.chatgptImageJun24202604Icon}
            loading="lazy"
            width={400}
            height={470}
            sizes="100vw"
            alt=""
            src="/ChatGPT-Image-Jun-24-2026-04-07-58-AM-removebg-preview-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1111;
