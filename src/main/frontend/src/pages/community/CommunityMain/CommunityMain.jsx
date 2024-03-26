import styles from './CommunityMain.module.scss';
import Header from '../Header';
import Navbar from '../Navbar';
import Question from './Question';
import Aside from '../Aside';
import WriteBtnImg from '../../../assets/images/writeBtn.png';

function CommunityMain() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Header />
      <div className={styles.subCont}>
        <div className={styles.main}>
          <img src={WriteBtnImg} alt='unResolved' className={styles.writeBtn} />
          <Question />
          <Question />
          <Question />
          <Question />
        </div>
        <Aside />
      </div>
    </div>
  );
}
export default CommunityMain;
