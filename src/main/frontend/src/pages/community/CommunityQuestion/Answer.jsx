import styles from './Answer.module.scss';

import ProfileImg from '../../../assets/images/profile.svg';
import ThumbsUpGrayImg from '../../../assets/images/thumbsUpGray.svg';
import ThumbsDownGrayImg from '../../../assets/images/thumbsDownGray.svg';

function Answer() {
  return (
    <div className={styles.container}>
      <div className={styles.likes}>
        <img src={ThumbsUpGrayImg} alt='thumbsUpGray' className={styles.thumbs} />
        <span className={styles.likeCount}>0</span>
        <img src={ThumbsDownGrayImg} alt='thumbsDownGray' className={styles.thumbs} />
      </div>
      <div className={styles.main}>
        <div className={styles.ansTitle}>
          <img src={ProfileImg} alt='profile' className={styles.profile} />
          <span className={styles.nickname}>Person2</span>
          <span className={styles.date}>24.03.18</span>
        </div>
        <div className={styles.ansText}>이씨네 빵집 소금빵이 제일 유명해요~ 추천드립니다.</div>
        <div className={styles.ansBtn}>
          <button type='button'>답글달기</button>
        </div>
      </div>
    </div>
  );
}

export default Answer;
