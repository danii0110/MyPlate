import styles from './AsideCont.module.scss';
import ProfileImg from '../../assets/images/profile.svg';

function AsidePerson() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        성신여대 입구 맛있는 소금빵 맛집
        <br />
        궁금해요
      </div>
      <div className={styles.person}>
        <img src={ProfileImg} alt='profile' className={styles.profileImg} />
        <div className={styles.nickname}>Person1</div>
      </div>
    </div>
  );
}
export default AsidePerson;
