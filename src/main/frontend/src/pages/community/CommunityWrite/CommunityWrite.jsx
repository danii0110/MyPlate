import styles from './CommunityWrite.module.scss';

import Aside from '../Aside';

import RegisterBtnImg from '../../../assets/images/registerBtn.svg';
import CancelBtnImg from '../../../assets/images/cancelBtn.svg';

function CommunityWrite() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.subCont}>
          <input className={styles.titleCont} placeholder='제목에 핵심 내용을 요약해보세요.' />
          <input className={styles.tagCont} placeholder='태그를 설정하세요.(최대 4개, 10글자)' />
          <textarea
            className={styles.writeCont}
            placeholder='-궁금한 점들을 질문해보세요!&#10;-서로 예의를 지키며 존중하는 문화를 만들어가요.'
          />
          <div className={styles.btnCont}>
            <img src={CancelBtnImg} alt='unResolved' className={styles.btn} />
            <img src={RegisterBtnImg} alt='unResolved' className={styles.btn} />
          </div>
        </div>
        <Aside />
      </div>
    </div>
  );
}
export default CommunityWrite;
