import type { NextPage } from "next";
import Image from "next/image";
import styles from "./hero.module.css";
import { AnimatedHeading } from "./ui/animated-heading";

const Hero: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <main className={styles.frame}>
        <div className={styles.frameChild} />
        <main className={styles.frame2}>
          <AnimatedHeading as="h1" className={styles.demoDay}>DEMO DAY</AnimatedHeading>
          <section className={styles.statsRow}>
            <div className={styles.statEvents}>
              <h2 className={styles.h2}>50+</h2>
              <h3 className={styles.eventsConducted}>Events conducted</h3>
            </div>
            <div className={styles.statRegistrations}>
              <h2 className={styles.h2}>5000+</h2>
              <h3 className={styles.eventsConducted}>
                Registrations across events
              </h3>
            </div>
          </section>
        </main>
      </main>
      <AnimatedHeading as="h2" className={styles.introducing}>Introducing</AnimatedHeading>
      <div className={styles.loremIpsumEvent}>
        Lorem Ipsum Event new for student grow and learn. Lorem Ipsum Event new
        for student grow and learn.
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
      <Image
        className={styles.mergedAsset1Icon}
        width={246}
        height={265}
        sizes="100vw"
        alt=""
        src="/merged-asset-1@2x.png"
      />
      <div className={styles.frame3}>
        <div className={styles.frameItem} />
      </div>
    </div>
  );
};

export default Hero;
