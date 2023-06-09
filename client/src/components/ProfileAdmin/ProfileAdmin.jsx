import React, { useState } from 'react';

import styles from './ProfileAdmin.module.css';


const ProfileAdmin = () => {

  
    return (
        <>
            <li className={styles.navbar_container_pages_btn_link}>Mi cuenta</li>
            <ul className={styles.navbar_container_menuOptions_dropdown}>
                <li className={styles.navbar_container_pages_btn_link}>Mis pedidos</li>
            </ul>
        </>
    );
  };

export default ProfileAdmin;