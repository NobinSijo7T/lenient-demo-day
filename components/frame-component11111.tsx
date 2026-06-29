import type { NextPage } from "next";
import Image from "next/image";
import SharedTooltipAvatars from "./ui/shared-tooltip-avatars";
import styles from "./frame-component11111.module.css";

export type FrameComponent11111Type = {
  className?: string;
};

const FrameComponent11111: NextPage<FrameComponent11111Type> = ({
  className = "",
}) => {
  const avatarItems = [
    {
      id: "mentor-1",
      name: "Aaradhya",
      image: "/Ellipse-41@2x.png",
    },
    {
      id: "mentor-2",
      name: "Rohan",
      image: "/Ellipse-40@2x.png",
    },
    {
      id: "mentor-3",
      name: "Meera",
      image: "/Ellipse-41@2x.png",
    },
  ];
  const logoItems = [
    {
      src: "/image-13@2x.png",
      width: 322,
      height: 93,
      className: styles.image13Icon,
    },
    {
      src: "/image-14@2x.png",
      width: 295,
      height: 93,
      className: styles.image14Icon,
    },
    {
      src: "/image-15@2x.png",
      width: 262,
      height: 93,
      className: styles.image15Icon,
    },
    {
      src: "/image-12@2x.png",
      width: 232,
      height: 93,
      className: styles.image12Icon,
    },
  ];

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
            <SharedTooltipAvatars
              items={avatarItems}
              className={styles.avatarStack}
            />
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
          <div className={styles.logoMarquee} aria-label="Partner logos">
            <div className={styles.logoTrack}>
              {[...logoItems, ...logoItems].map((logo, index) => (
                <Image
                  className={logo.className}
                  loading="lazy"
                  width={logo.width}
                  height={logo.height}
                  sizes="100vw"
                  alt=""
                  src={logo.src}
                  key={`${logo.src}-${index}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default FrameComponent11111;
