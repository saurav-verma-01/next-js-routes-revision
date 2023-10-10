// import React from 'react'

import Link from "next/link";
import styles from "./projectlist.module.css";

const page = () => {
  return (
    <main className={styles.container}>
      <h1>This is My Projects List</h1>

      <ul className={styles.projectlist}>
        <li>
          <Link href="/projects/jobit">Jobit</Link>
        </li>
        <li>
          <Link href="/projects/hipnode">HipNode</Link>
        </li>
        <li>
          <Link href="/projects/carrent">CarRent</Link>
        </li>
      </ul>
    </main>
  );
};

export default page;
