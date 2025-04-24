import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Us</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/light bulb_icon.png")} alt="lightBulb" className={styles.icons}/>
            <div className={styles.aboutItemText}>
              <h3>Team Background and Purpose</h3>
              <p>
                We’re a group of passionate creators who love turning ideas into real, working things. 
                With different skills in design, development, and problem-solving, we work together 
                to build meaningful digital experiences. Our purpose is to create, learn, and grow 
                while having fun along the way.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/webdev_icon.png")} alt="webdev" className={styles.icons}/>
            <div className={styles.aboutItemText}>
              <h3>Web Development</h3>
              <p>
                We build clean, responsive, and user-friendly websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiUx_icon.png")} alt="UiUx" className={styles.icons}/>
            <div className={styles.aboutItemText}>
              <h3>UI / UX Design</h3>
              <p>
                We craft simple, intuitive designs that put users first.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
                <img src={getImageUrl("about/problemsolve_icon.png")} alt="problemsolve" className={styles.icons} />
                <div className={styles.aboutItemText}>
                    <h3>Creative Problem Solving</h3>
                    <p>We love finding smart, simple solutions to complex ideas.</p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  );
};
