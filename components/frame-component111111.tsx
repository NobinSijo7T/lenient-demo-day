"use client";

import { useState } from "react";
import type { NextPage } from "next";
import styles from "./frame-component111111.module.css";
import { AnimatedHeading } from "./ui/animated-heading";

export type FrameComponent111111Type = {
  className?: string;
};

const FrameComponent111111: NextPage<FrameComponent111111Type> = ({
  className = "",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Size of a team allowed?",
      answer:
        "Traditional certificates often fail to demonstrate real-world competency. Employers increasingly value practical skills and project experience over theoretical qualifications.",
    },
    {
      question: "Who can participate?",
      answer:
        "Students, early builders, and teams interested in solving practical innovation challenges can participate.",
    },
    {
      question: "Is this an online event?",
      answer:
        "Event format and venue details will be shared with registered participants before the challenge begins.",
    },
    {
      question: "Do we need a finished product?",
      answer:
        "No. A working prototype, strong problem understanding, and clear execution plan are enough for demo day.",
    },
    {
      question: "Can beginners join?",
      answer:
        "Yes. The problem statements include beginner, intermediate, and advanced tracks so teams can choose their comfort level.",
    },
  ];

  return (
    <section className={[styles.faqsParent, className].join(" ")} id="faqs">
      <AnimatedHeading as="h2" className={styles.faqs}>FAQs</AnimatedHeading>
      <div className={styles.component6Parent}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <section
              className={`${styles.component6} ${isOpen ? styles.open : ""}`}
              key={faq.question}
            >
              <div className={styles.answerPanel}>
                <p>{faq.answer}</p>
              </div>
              <button
                className={styles.sizeOfATeamAllowedParent}
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className={styles.sizeOfA}>{faq.question}</span>
                <span className={styles.unionIcon} aria-hidden="true" />
              </button>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default FrameComponent111111;
