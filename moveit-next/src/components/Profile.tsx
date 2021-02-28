import { Profiler, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from '../styles/components/Profile.module.css';

export function Profile() {

  const { level} =  useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/lisboaa.png" alt="Douglas Lisboa"/>
      <div>
        <strong>Douglas Lisboa</strong>
        <p>
          <img src="icons/level.svg" alt="Livel"/>
          Level {level}
          </p>
      </div>
    </div>
  );
}