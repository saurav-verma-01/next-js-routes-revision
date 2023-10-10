// import React from 'react'

import Link from "next/link";

const page = () => {
  return (
    <main>
      <h1>This is My Projects List</h1>

      <ul>
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
