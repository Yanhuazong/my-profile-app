import styles from "../styles/navbar.module.css";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#cards">Cards</a></li>
      </ul>
      <button className={styles.themeToggle} onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
      </button>
    </nav>
  );
};

export default Navbar;