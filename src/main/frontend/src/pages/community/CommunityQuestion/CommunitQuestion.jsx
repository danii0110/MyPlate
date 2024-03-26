import React from 'react';
import styles from './CommunityQuestion.module.scss';

import Navbar from '../../common/Navbar';
import Header from '../../common/Header';
import Aside from '../Aside';

import LineLong from '../LineLong';
import LineShort from '../LineShort';
import QuestTag from '../QuestTag';

import Answer from './Answer';

import UnResolvedImg from '../../../assets/images/unResolved.svg';
import ThumbsUpGrayImg from '../../../assets/images/thumbsUpGray.svg';
import ThumbsDownGrayImg from '../../../assets/images/thumbsDownGray.svg';
import CheckGrayImg from '../../../assets/images/checkGray.svg';

function CommunityQuestion() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Header />
      <div className={styles.main}>
        <main>
          <div className={styles.quesCont}>
            <div className={styles.quesTitleArea}>
              <div className={styles.quesTitle}>성신여대 입구 맛있는 소금빵 맛집 궁금해요</div>
              <img src={UnResolvedImg} alt='unResolved' className={styles.whetherResolved} />
            </div>
            <div className={styles.questSub}>
              <span>24.03.18 10:30 작성 조회수 2</span>
            </div>
            <LineLong />
            <div className={styles.questArea}>
              <div className={styles.questAreaLike}>
                <img src={ThumbsUpGrayImg} alt='thumbsUpGray' className={styles.thumbs} />
                <span className={styles.likeCount}>0</span>
                <img src={ThumbsDownGrayImg} alt='thumbsDownGray' className={styles.thumbs} />
                <img src={CheckGrayImg} alt='checkGray' className={styles.whetherCheck} />
              </div>
              <div className={styles.questAreaMain}>
                <span className={styles.questContents}>
                  소금빵이 너무 먹고 싶은데 성신여대 입구 주변에 맛있는 곳이 있을까요? ㅜㅜ 너무 먹고
                  <br />
                  싶어요
                </span>
                {/* <div className={styles.questTag}>소금빵</div> */}
                <QuestTag />
              </div>
            </div>
            <LineLong />
          </div>
          <div className={styles.answerCont}>
            <div className={styles.answerTitle}>답변 1</div>
            <input className={styles.answerInput} placeholder='Person1님, 답변을 작성해보세요.' />
            <div className={styles.answer}>
              <Answer />
              <LineShort />
              <Answer />
              <LineShort />
              <Answer />
              <LineShort />
            </div>
          </div>
        </main>
        <Aside />
      </div>
    </div>
  );
}
export default CommunityQuestion;
