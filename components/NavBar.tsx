import Link from "next/link";
import styles from "./navbar.module.css";
const NavBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <p>Next.JS v13.5</p>

        <ul className={styles.links}>
          <li>
            <Link href="/">Home 🏠</Link>
          </li>
          <li>
            <Link href="/about">About ✏️</Link>
          </li>
          <li>
            <Link href="/contact">Contact 📞</Link>
          </li>
          <li>
            <Link href="/sign-in">Sign In 📩</Link>
          </li>
          <li className={styles.signup}>
            <Link href="/sign-up">Sign Up 📒</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
