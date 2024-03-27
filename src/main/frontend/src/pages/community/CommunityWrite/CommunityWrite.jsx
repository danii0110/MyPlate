// import { useCallback, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styles from './CommunityWrite.module.scss';

import Aside from '../Aside';
import CommunityHeader from '../CommunityHeader';

function CommunityWrite() {
  // const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <CommunityHeader />
      <div className={styles.main}>
        <form className={styles.subCont}>
          <input type='text' className={styles.titleCont} placeholder='제목에 핵심 내용을 요약해보세요.' />
          <input type='text' className={styles.tagCont} placeholder='태그를 설정해보세요.(최대 4개, 10글자)' />
          <textarea
            className={styles.writeCont}
            placeholder='-궁금한 점들을 질문해보세요!&#10;-서로 예의를 지키며 존중하는 문화를 만들어가요.'
          />
          <div className={styles.btnCont}>
            <button type='button' className={styles.CancelBtn}>
              취소
            </button>
            <button type='submit' className={styles.SubmitBtn}>
              등록
            </button>
          </div>
        </form>
        <Aside />
      </div>
    </div>
  );
}
export default CommunityWrite;
