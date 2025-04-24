import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

// Import everyone’s data
import skillsKen from "../../data/skills_ken.json";
import historyKen from "../../data/history_ken.json";

import skillsMarc from "../../data/skills_marc.json";
import historyMarc from "../../data/history_marc.json";

import skillsDwight from "../../data/skills_dwight.json";
import historyDwight from "../../data/history_dwight.json";

export const Experience = () => {
  const allSkills = [...skillsKen, ...skillsMarc, ...skillsDwight];
  const allHistory = [...historyKen, ...historyMarc, ...historyDwight];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Team Members</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {allSkills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p className={styles.name}>{skill.title}</p>
              <p className={styles.role}>{skill.role}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {allHistory.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
