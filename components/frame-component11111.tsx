import type { NextPage } from "next";
import Image from "next/image";
import styles from "./frame-component11111.module.css";

export type FrameComponent11111Type = {
  className?: string;
};

const FrameComponent11111: NextPage<FrameComponent11111Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.demoDayShowcaseInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.readyToDiveIntoRealTimePWrapper}>
          <h1 className={styles.readyToDiveContainer}>
            <span className={styles.readyTo}>Ready to</span>
            <span>{` `}</span>
            <span className={styles.readyTo}>dive</span>
            <span>{` `}</span>
            <span className={styles.intoRealTime}>
              into real time projects?
            </span>
            <span>{` `}</span>
            <span className={styles.itsYourLucky}>It’s your Lucky Day !!!</span>
          </h1>
        </div>
        <section className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.ellipseParent}>
              <Image
                className={styles.frameChild}
                width={100}
                height={100}
                sizes="100vw"
                alt=""
                src="/Ellipse-41@2x.png"
              />
              <Image
                className={styles.frameItem}
                width={100}
                height={100}
                sizes="100vw"
                alt=""
                src="/Ellipse-40@2x.png"
              />
              <Image
                className={styles.frameInner}
                loading="lazy"
                width={100}
                height={100}
                sizes="100vw"
                alt=""
                src="/Ellipse-41@2x.png"
              />
            </div>
            <h3 className={styles.loremIpsumEvent}>
              Lorem Ipsum Event new for student grow and learn. Lorem Ipsum
              Event new for student grow and learn. Lorem Ipsum Event new for
              student grow and learn. Lorem Ipsum Event new for student grow and
              learn. Lorem Ipsum Event new for student grow and learn. Lorem
              Ipsum Event new for student grow and learn.
            </h3>
          </div>
        </section>
        <section className={styles.frameContainer}>
          <div className={styles.image13Parent}>
            <Image
              className={styles.image13Icon}
              loading="lazy"
              width={322}
              height={93}
              sizes="100vw"
              alt=""
              src="/image-13@2x.png"
            />
            <Image
              className={styles.image14Icon}
              loading="lazy"
              width={295}
              height={93}
              sizes="100vw"
              alt=""
              src="/image-14@2x.png"
            />
            <Image
              className={styles.image15Icon}
              loading="lazy"
              width={262}
              height={93}
              sizes="100vw"
              alt=""
              src="/image-15@2x.png"
            />
          </div>
          <Image
            className={styles.image12Icon}
            loading="lazy"
            width={232}
            height={93}
            sizes="100vw"
            alt=""
            src="/image-12@2x.png"
          />
        </section>
      </div>
    </section>
  );
};

export default FrameComponent11111;
