
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import styles from "./menu.module.scss";

const MenuBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className={styles.menuBar}>
      <div className={styles.logo}>
        <h1 className={styles.logoText}>Expenzo</h1>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
      </div>

      <ul className={`${styles.menuLinks} ${isOpen ? styles.showMenu : ""}`}>
        <li>
          <Link href="/home"><span>Dashboard</span></Link>
        </li>
        <li>
          <Link href="/expense-list"><span>Expenses</span></Link>
        </li>
        <li>
          <Link href="/profile"><span>Profile</span></Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
