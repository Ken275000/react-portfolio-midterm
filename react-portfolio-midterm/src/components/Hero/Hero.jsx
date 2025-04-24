import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, We Are From BSIT-3D</h1>
        <p className={styles.description}>
          We’re a bunch of curious minds and creative hearts who came together over a shared love for building things, whether it’s websites, apps, or random side projects that keep us up way too late. Each of us brings something different to the mix: developers, designers, thinkers, doers. Together, we make ideas happen, and have a good time doing it.
        </p>
        <p className={styles.missionVision}>
            <strong>Our Mission</strong> <br/>
            To create meaningful, user-friendly digital experiences that solve real problems and bring ideas to life, one project at a time.<br /><br />
            <strong>Our Vision</strong><br />
            To grow as a creative team that inspires, innovates, and makes a positive impact through thoughtful design and technology.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Us
        </a>
      </div>
      <img
        src={getImageUrl("hero/Logo2.png")}
        alt="Logo"
        className={styles.Logo}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
