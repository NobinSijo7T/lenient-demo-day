import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FrameComponent11 from "../components/frame-component11";
import FrameComponent111 from "../components/frame-component111";
import FrameComponent1111 from "../components/frame-component1111";
import FrameComponent11111 from "../components/frame-component11111";
import FrameComponent111111 from "../components/frame-component111111";
import styles from "./demo-day-showcase.module.css";

const DemoDayShowcase: NextPage = () => {
  return (
    <div className={styles.demoDayShowcase}>
      <Navbar />
      <FrameComponent11 />
      <div className={styles.demoDayShowcaseChild} />
      <div className={styles.demoDayShowcaseItem} />
      <FrameComponent111 />
      <FrameComponent1111 />
      <FrameComponent11111 />
      <main className={styles.problemStatementsParent}>
        <h2 className={styles.problemStatements}>Problem Statements</h2>
        <section className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.wrapper}>
                <h2 className={styles.h2}>1</h2>
              </div>
              <div className={styles.studentCareerRoadmapPlatforWrapper}>
                <h2 className={styles.studentCareerRoadmap}>
                  Student Career Roadmap Platform
                </h2>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.beginnerWrapper}>
                  <div className={styles.beginner}>Beginner</div>
                </div>
                <div className={styles.intermediateWrapper}>
                  <div className={styles.beginner}>Intermediate</div>
                </div>
                <div className={styles.advancedWrapper}>
                  <div className={styles.beginner}>Advanced</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper2}>
              <div className={styles.studentsOftenHaveACareerGParent}>
                <h3 className={styles.studentsOftenHave}>
                  Students often have a career goal in mind but struggle to
                  understand the path required to achieve it. They face
                  challenges in identifying the right skills to learn, selecting
                  relevant courses, building meaningful projects, preparing for
                  interviews, and discovering opportunities such as internships,
                  hackathons, and certifications.
                  <br />
                  <br />
                  Build a Student Career Roadmap Platform that generates
                  personalized career paths based on a student's interests,
                  skills, and goals. The platform should recommend learning
                  resources, projects, certifications, hackathons, internships,
                  mentors, and track progress to help students confidently
                  achieve their career aspirations.
                </h3>
                <div className={styles.frameChild} />
              </div>
            </div>
            <Image
              className={styles.ced10721c14ab2Ae94De09d1ebIcon}
              loading="lazy"
              width={360}
              height={240}
              sizes="100vw"
              alt=""
              src="/05ced107-21c1-4ab2-ae94-de09d1eb9f3b-1@2x.png"
            />
          </div>
        </section>
        <section className={styles.frameParent}>
          <div className={styles.frameParent3}>
            <div className={styles.frameContainer}>
              <div className={styles.container}>
                <h2 className={styles.h22}>2</h2>
              </div>
              <div className={styles.studentCareerRoadmapPlatforWrapper}>
                <h2 className={styles.hackathonPreparationAssistan}>
                  Hackathon Preparation Assistant
                </h2>
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameDiv}>
                <button className={styles.beginnerContainer}>
                  <div className={styles.beginner2}>Beginner</div>
                </button>
                <button className={styles.intermediateContainer}>
                  <div className={styles.beginner2}>Intermediate</div>
                </button>
                <button className={styles.advancedContainer}>
                  <div className={styles.beginner2}>Advanced</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper2}>
              <div className={styles.manyStudentsParticipateInHParent}>
                <h3 className={styles.manyStudentsParticipate}>
                  Many students participate in hackathons but struggle to
                  generate innovative ideas, validate problem statements,
                  organize teams, develop MVPs, and prepare effective
                  presentations within limited time. Lack of guidance often
                  prevents teams from reaching their full potential.
                  <br />
                  <br />
                  Build an AI-powered Hackathon Preparation Assistant that helps
                  participants throughout their hackathon journey. The platform
                  should assist with idea generation, problem validation, team
                  formation, project planning, task management, MVP guidance,
                  mentor support, pitch deck creation, and presentation
                  preparation.
                </h3>
                <div className={styles.frameChild} />
              </div>
            </div>
            <Image
              className={styles.ced10721c14ab2Ae94De09d1ebIcon}
              loading="lazy"
              width={360}
              height={240}
              sizes="100vw"
              alt=""
              src="/28127d0b-a7d0-49ad-b493-95d7106f8dd1-1@2x.png"
            />
          </div>
        </section>
        <section className={styles.frameParent7}>
          <div className={styles.frameParent3}>
            <div className={styles.frameContainer}>
              <div className={styles.frame}>
                <h2 className={styles.h23}>3</h2>
              </div>
              <div className={styles.aiResumePortfolioOptimiseWrapper}>
                <h2 className={styles.aiResume}>
                  AI Resume + Portfolio Optimiser
                </h2>
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameDiv}>
                <button className={styles.beginnerContainer}>
                  <div className={styles.beginner2}>Beginner</div>
                </button>
                <button className={styles.intermediateContainer}>
                  <div className={styles.beginner2}>Intermediate</div>
                </button>
                <button className={styles.advancedContainer}>
                  <div className={styles.beginner2}>Advanced</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.frameParent11}>
            <div className={styles.frameWrapper2}>
              <div className={styles.studentsOftenHaveACareerGParent}>
                <h3
                  className={styles.studentsOftenHave}
                >{`Students often possess valuable skills and project experience but struggle to present them effectively through resumes, portfolios, and professional profiles. This reduces their chances of securing internships, jobs, and networking opportunities.<br/><br/>Build an AI Resume & Portfolio Optimiser that analyzes resumes, GitHub repositories, LinkedIn profiles, and portfolios to provide personalized recommendations. The platform should identify missing sections, improve formatting, suggest stronger project descriptions, and recommend additional skills based on industry expectations.`}</h3>
                <div className={styles.frameChild} />
              </div>
            </div>
            <Image
              className={styles.ced10721c14ab2Ae94De09d1ebIcon}
              loading="lazy"
              width={360}
              height={240}
              sizes="100vw"
              alt=""
              src="/3e73f6c2-24fd-4cc5-876c-0fb76f87dcf4-1@2x.png"
            />
          </div>
        </section>
        <section className={styles.frameParent}>
          <div className={styles.frameParent13}>
            <div className={styles.frame}>
              <h2 className={styles.h23}>4</h2>
            </div>
            <div className={styles.studentInnovationCommunityPParent}>
              <h2 className={styles.studentInnovationCommunity}>
                Student Innovation Community Platform
              </h2>
              <div className={styles.frameWrapper7}>
                <div className={styles.frameDiv}>
                  <div className={styles.beginnerWrapper}>
                    <div className={styles.beginner}>Beginner</div>
                  </div>
                  <div className={styles.intermediateWrapper}>
                    <div className={styles.beginner}>Intermediate</div>
                  </div>
                  <div className={styles.advancedWrapper}>
                    <div className={styles.beginner}>Advanced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper2}>
              <div className={styles.studentsOftenHaveACareerGParent}>
                <h3 className={styles.studentsFrequentlyStruggle}>
                  Students frequently struggle to find teammates, mentors,
                  collaborators, innovation events, and communities that match
                  their interests. Opportunities remain scattered across
                  multiple platforms, making collaboration difficult.
                  <br />
                  <br />
                  Build a Student Innovation Community Platform where students
                  can create profiles, showcase projects, discover innovation
                  challenges, connect with mentors, join communities, form
                  teams, and participate in hackathons, workshops, and startup
                  programs.
                </h3>
                <div className={styles.frameChild} />
              </div>
            </div>
            <Image
              className={styles.ced10721c14ab2Ae94De09d1ebIcon}
              loading="lazy"
              width={360}
              height={240}
              sizes="100vw"
              alt=""
              src="/0a91496f-b53b-4c4d-84af-a4702a4958b0-1@2x.png"
            />
          </div>
        </section>
        <section className={styles.frameParent}>
          <div className={styles.frameParent3}>
            <div className={styles.frameContainer}>
              <div className={styles.container}>
                <h2 className={styles.h22}>5</h2>
              </div>
              <div className={styles.studentCareerRoadmapPlatforWrapper}>
                <h2 className={styles.skillVerificationPlatform}>
                  Skill Verification Platform
                </h2>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.beginnerWrapper}>
                  <div className={styles.beginner}>Beginner</div>
                </div>
                <div className={styles.intermediateWrapper}>
                  <div className={styles.beginner}>Intermediate</div>
                </div>
                <div className={styles.advancedWrapper}>
                  <div className={styles.beginner}>Advanced</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper2}>
              <div className={styles.studentsOftenHaveACareerGParent}>
                <h3 className={styles.studentsOftenHave}>
                  Traditional certificates often fail to demonstrate real-world
                  competency. Employers increasingly value practical skills and
                  project experience over theoretical qualifications.
                  <br />
                  <br />
                  Build a Skill Verification Platform where students prove their
                  abilities through coding challenges, project submissions,
                  assessments, peer reviews, and mentor evaluations. The
                  platform should generate verifiable skill profiles that better
                  represent practical expertise.
                </h3>
                <div className={styles.frameChild} />
              </div>
            </div>
            <Image
              className={styles.ced10721c14ab2Ae94De09d1ebIcon}
              loading="lazy"
              width={360}
              height={240}
              sizes="100vw"
              alt=""
              src="/d719eda7-b79d-4f09-b708-39e182cd5838-1@2x.png"
            />
          </div>
        </section>
        <section className={styles.frameParent}>
          <div className={styles.frameParent22}>
            <div className={styles.frameParent23}>
              <div className={styles.container}>
                <h2 className={styles.h22}>6</h2>
              </div>
              <div className={styles.studentCareerRoadmapPlatforWrapper}>
                <h2
                  className={styles.web3Learning}
                >{`Web3 Learning & Project Ecosystem`}</h2>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameDiv}>
                <div className={styles.beginnerWrapper}>
                  <div className={styles.beginner}>Beginner</div>
                </div>
                <button className={styles.intermediateContainer}>
                  <div className={styles.beginner2}>Intermediate</div>
                </button>
                <button className={styles.advancedContainer}>
                  <div className={styles.beginner2}>Advanced</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper2}>
              <div className={styles.studentsOftenHaveACareerGParent}>
                <h3
                  className={styles.studentsOftenHave}
                >{`Web3 technologies continue to grow rapidly, but students often find blockchain concepts difficult to understand and lack opportunities for practical experience.<br/><br/>Build a Web3 Learning & Project Ecosystem that provides structured learning paths, interactive tutorials, project collaboration, mentorship, and hackathons. The platform should help beginners gain practical experience by building decentralized applications and contributing to real-world Web3 projects.`}</h3>
                <div className={styles.frameChild} />
              </div>
            </div>
            <Image
              className={styles.ced10721c14ab2Ae94De09d1ebIcon}
              loading="lazy"
              width={360}
              height={240}
              sizes="100vw"
              alt=""
              src="/47cc13cb-ef08-4951-8c12-ccee48d1acb9-1@2x.png"
            />
          </div>
        </section>
        <section className={styles.frameParent}>
          <div className={styles.frameParent3}>
            <div className={styles.frameContainer}>
              <div className={styles.wrapper5}>
                <h2 className={styles.h27}>7</h2>
              </div>
              <div className={styles.studentCareerRoadmapPlatforWrapper}>
                <h2 className={styles.collegeInnovationDashboard}>
                  College Innovation Dashboard
                </h2>
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameDiv}>
                <button className={styles.beginnerContainer}>
                  <div className={styles.beginner2}>Beginner</div>
                </button>
                <button className={styles.intermediateContainer}>
                  <div className={styles.beginner2}>Intermediate</div>
                </button>
                <button className={styles.advancedContainer}>
                  <div className={styles.beginner2}>Advanced</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper2}>
              <div className={styles.studentsOftenHaveACareerGParent}>
                <h3 className={styles.studentsOftenHave}>
                  Colleges often lack a centralized system to monitor student
                  innovation activities, including projects, hackathons,
                  research, entrepreneurship, certifications, and community
                  engagement. This makes it difficult to measure innovation
                  performance and student growth.
                  <br />
                  <br />
                  Build a College Innovation Dashboard that enables institutions
                  to manage innovation programs, monitor student achievements,
                  generate analytics, track participation, and measure the
                  overall innovation ecosystem within the campus.
                </h3>
                <div className={styles.frameChild} />
              </div>
            </div>
            <Image
              className={styles.ced10721c14ab2Ae94De09d1ebIcon}
              loading="lazy"
              width={360}
              height={240}
              sizes="100vw"
              alt=""
              src="/9978ef2f-14ee-40c7-bf96-331ff2dd5e21-1@2x.png"
            />
          </div>
        </section>
        <section className={styles.frameParent}>
          <div className={styles.frameParent3}>
            <div className={styles.frameContainer}>
              <div className={styles.container}>
                <h2 className={styles.h22}>8</h2>
              </div>
              <div className={styles.studentCareerRoadmapPlatforWrapper}>
                <h2 className={styles.aiStudy}>AI Study + Mentor Assistant</h2>
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameDiv}>
                <button className={styles.beginnerContainer}>
                  <div className={styles.beginner2}>Beginner</div>
                </button>
                <button className={styles.intermediateContainer}>
                  <div className={styles.beginner2}>Intermediate</div>
                </button>
                <button className={styles.advancedContainer}>
                  <div className={styles.beginner2}>Advanced</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper2}>
              <div className={styles.studentsOftenHaveACareerGParent}>
                <h3
                  className={styles.studentsOftenHave}
                >{`Students often need academic guidance outside classroom hours but cannot always access teachers or mentors. This leads to learning gaps and reduced confidence during self-study.<br/><br/>Build an AI Study & Mentor Assistant capable of answering doubts, creating personalized study plans, explaining complex concepts, recommending learning resources, tracking progress, and assisting with academic projects while adapting to each student's learning style.`}</h3>
                <div className={styles.frameChild} />
              </div>
            </div>
            <Image
              className={styles.ced10721c14ab2Ae94De09d1ebIcon}
              loading="lazy"
              width={360}
              height={240}
              sizes="100vw"
              alt=""
              src="/752a2565-0f6d-42b0-bde8-46c9c11fc8ed-1@2x.png"
            />
          </div>
        </section>
        <section className={styles.frameParent}>
          <div className={styles.frameParent3}>
            <div className={styles.frameContainer}>
              <div className={styles.container}>
                <h2 className={styles.h22}>9</h2>
              </div>
              <div className={styles.studentCareerRoadmapPlatforWrapper}>
                <h2 className={styles.internshipMatchingPlatform}>
                  Internship Matching Platform
                </h2>
              </div>
            </div>
            <div className={styles.frameWrapper3}>
              <div className={styles.frameDiv}>
                <button className={styles.beginnerContainer}>
                  <div className={styles.beginner2}>Beginner</div>
                </button>
                <button className={styles.intermediateContainer}>
                  <div className={styles.beginner2}>Intermediate</div>
                </button>
                <button className={styles.advancedContainer}>
                  <div className={styles.beginner2}>Advanced</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper2}>
              <div className={styles.studentsOftenHaveACareerGParent}>
                <h3 className={styles.studentsOftenHave}>
                  Students frequently struggle to discover internships that
                  align with their skills, interests, and career goals, while
                  companies find it difficult to identify suitable candidates
                  beyond traditional resumes.
                  <br />
                  <br />
                  Build an AI-powered Internship Matching Platform that
                  intelligently matches students with startups and companies
                  based on skills, projects, interests, certifications, and
                  career aspirations. The platform should streamline
                  applications while helping recruiters identify the most
                  suitable candidates.
                </h3>
                <div className={styles.frameChild} />
              </div>
            </div>
            <Image
              className={styles.ced10721c14ab2Ae94De09d1ebIcon}
              loading="lazy"
              width={360}
              height={240}
              sizes="100vw"
              alt=""
              src="/9e7b1f02-2a8f-4efa-aac5-82ec3d47f63f-1@2x.png"
            />
          </div>
        </section>
        <section className={styles.frameParent}>
          <div className={styles.frameParent13}>
            <div className={styles.wrapper8}>
              <h2 className={styles.h210}>10</h2>
            </div>
            <div className={styles.lenientTreeOpenInnovationCParent}>
              <h2 className={styles.lenientTreeOpen}>
                Lenient Tree Open Innovation Challenge
              </h2>
              <div className={styles.frameWrapper7}>
                <div className={styles.frameDiv}>
                  <div className={styles.beginnerWrapper}>
                    <div className={styles.beginner}>Beginner</div>
                  </div>
                  <button className={styles.intermediateContainer}>
                    <div className={styles.beginner2}>Intermediate</div>
                  </button>
                  <button className={styles.advancedContainer}>
                    <div className={styles.beginner2}>Advanced</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper2}>
              <div className={styles.studentsOftenHaveACareerGParent}>
                <h3 className={styles.studentsOftenHave}>
                  Students continuously face challenges in learning, innovation,
                  entrepreneurship, collaboration, sustainability,
                  accessibility, and career development. Many impactful problems
                  remain unsolved due to limited resources, mentorship, or
                  awareness.
                  <br />
                  <br />
                  This open challenge invites participants to identify a
                  meaningful problem related to student growth, education,
                  innovation, technology, sustainability, or community
                  development and develop an innovative solution with measurable
                  real-world impact. Teams are encouraged to think beyond
                  conventional ideas and create scalable solutions that improve
                  lives.
                </h3>
                <div className={styles.frameChild} />
              </div>
            </div>
            <Image
              className={styles.ced10721c14ab2Ae94De09d1ebIcon}
              loading="lazy"
              width={360}
              height={240}
              sizes="100vw"
              alt=""
              src="/a1322156-e006-4440-9614-23d06da56013-1@2x.png"
            />
          </div>
        </section>
      </main>
      <FrameComponent111111 />
      <Footer />
    </div>
  );
};

export default DemoDayShowcase;
