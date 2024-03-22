import React from 'react';
import styles from './Navbar.module.scss';
import ProfileImg from '../../assets/images/profile.svg';

function Navbar() {
  return (
    <nav>
      <div className={styles.logo}>MyPlate</div>
      <img src={ProfileImg} alt='profile' className={styles.profile} />
    </nav>
  );
}
export default Navbar;
