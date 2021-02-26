import { Profiler } from "react";

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/lisboaa.png" alt="Douglas Lisboa"/>
      <div>
        <strong>Douglas Lisboa</strong>
        <p>
          <img src="icons/level.svg" alt="Livel"/>
          Level 1
          </p>
      </div>
    </div>
  );
}