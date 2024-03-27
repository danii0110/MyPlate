import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import ProfileImg from '../../assets/images/profile.svg';

function Navbar() {
  return (
    <nav>
      <Link to='/' className={styles.logo}>
        MyPlate
      </Link>
      <Link to='/community' className={styles.navCont}>
        자유소통
      </Link>
      <img src={ProfileImg} alt='profile' className={styles.profile} />
    </nav>
  );
}
export default Navbar;
