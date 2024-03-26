import React from 'react';
import styles from './Navbar.module.scss';
import ProfileImg from '../../assets/images/profile.svg';

function Navbar() {
  return (
    <nav>
      <div className={styles.logo}>MyPlate</div>
      <img src={ProfileImg} alt='profile' className={styles.profile} />
    </nav>
    //   <div className="nav-btn">
    //   <button>
    //     <Link to="/"> HOME </Link>
    //   </button>
    //   <button>
    //     <Link to="/about"> ABOUT </Link>
    //   </button>
    //   <button>
    //     <Link to="/products"> PRODUCTS </Link>
    //   </button>
    // </div>
  );
}
export default Navbar;
