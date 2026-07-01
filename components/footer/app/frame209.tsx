import type { NextPage } from "next";
import Container from "../components/container";
import FrameComponent from "../components/frame-component";
import styles from "./frame209.module.css";

const Frame209: NextPage = () => {
  return (
    <div className={styles.containerParent}>
      <Container />
      <FrameComponent />
    </div>
  );
};

export default Frame209;
