import styles from './CommunityMain.module.scss';
import Question from './Question';
import Aside from '../Aside';
import WriteBtnImg from '../../../assets/images/writeBtn.svg';
import Header from '../../common/Header';
import Navbar from '../../common/Navbar';

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
