"use client";

import React from "react";
import styles from "./login.module.scss";
import { FcGoogle } from "react-icons/fc";

const LoginPage: React.FC = () => {
  const handleGoogleLogin = () => {
    // TODO: Add actual Google login logic here
    console.log("Logging in with Google...");
  };

  return (
    <div className={styles["login-container"]}>
      <div className={styles["login-box"]}>
      <div className={styles.logo}>
          <h1 className={styles.logoText}>Expenzo</h1>
        </div>
        <form className={styles["login-form"]}>
          <h2>Login</h2>

          <div className={styles["form-group"]}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          <div className={styles["form-group"]}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className={styles["login-button"]}>Log In</button>

          <div className={styles["form-footer"]}>
            <a href="#">Forgot your password?</a>
          </div>

          <button type="button" className={styles["google-login"]} onClick={handleGoogleLogin}>
            <FcGoogle size={20} />
            <span>Log in with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
