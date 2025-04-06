"use client";
import React from "react";
import styles from "./view-profile.module.scss";
import Menu from "@/app/components/menu/menu";
import Footer from "@/app/components/footer/footer";
import { useRouter } from "next/navigation";

const ProfileView: React.FC = () => {
    const router = useRouter();
  // Dummy user profile data
  const user = {
    firstName: "John",
    lastName: "Doe",
    phone: "+1 234 567 890",
    email: "john.doe@example.com",
  };
  const handleLogout = () => {

    router.push("/login"); // Redirect to login or landing page
  };
  return (
    <div className={styles.pageWrapper}>
      <Menu />
      <div className={styles.breadcrumb}>
          <span>Home</span>
          <span className={styles.separator}>/</span>
          <span>Profile</span>
        </div>
      <div className={styles.profileWrapper}>
        

        <h2 className={styles.heading}>My Profile</h2>

        <div className={styles.profileCard}>
          <div className={styles.profileRow}>
            <label>First Name:</label>
            <span>{user.firstName}</span>
          </div>
          <div className={styles.profileRow}>
            <label>Last Name:</label>
            <span>{user.lastName}</span>
          </div>
          <div className={styles.profileRow}>
            <label>Phone:</label>
            <span>{user.phone}</span>
          </div>
          <div className={styles.profileRow}>
            <label>Email:</label>
            <span>{user.email}</span>
          </div>
        </div>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ProfileView;
