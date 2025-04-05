"use client";
import React from "react";
import styles from "./register.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FcGoogle } from "react-icons/fc";

const RegisterPage: React.FC = () => {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerBox}>
      <div className={styles.logo}>
          <h1 className={styles.logoText}>Expenzo</h1>
        </div>
        <form className={styles.registerForm}>
          <h2>Create your account</h2>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="First name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Last name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email address" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Phone number" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" placeholder="Confirm Password" required />
          </div>
          <button type="submit" className={styles.registerButton}>Register</button>
          <div className={styles.formFooter}>
            <a href="#">Already have an account? Log in</a>
          </div>
          <button type="button" className={styles.googleAuth}>
          <FcGoogle size={20} />
            Register with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
