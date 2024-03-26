import styles from './Question.module.scss';
import LineLong from '../LineLong';
import QuestTag from '../QuestTag';

import UnResolvedImg from '../../../assets/images/unResolved.svg';
import ThumbsUpOutlineImg from '../../../assets/images/thumbsUpOutline.svg';
import EyeImg from '../../../assets/images/eye.svg';
import ChatImg from '../../../assets/images/chat.svg';

function Question() {
  return (
    <div className={styles.container}>
      <LineLong />
      <div className={styles.top}>
        <img src={UnResolvedImg} alt='unResolved' className={styles.whetherResolved} />
        성신여대 입구 맛있는 소금빵 맛집 궁금해요
      </div>
      <div className={styles.main}>
        <div className={styles.content}>
          소금빵이 너무 먹고 싶은데 성신여대 입구 주변에 맛있는 곳이 있을까요? ㅜㅜ 너무 먹고 싶어요
        </div>
        <div className={styles.tages}>
          <QuestTag />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.infoLeft}>Person1 13분 전</div>
        <div className={styles.infoRight}>
          <div className={styles.info}>
            <img src={ThumbsUpOutlineImg} alt='ThumbsUpOutlineImg' className={styles.infoImg} />
            <p>0</p>
          </div>
          <div className={styles.info}>
            <img src={EyeImg} alt='EyeImg' className={styles.infoImg} />
            <p>6</p>
          </div>
          <div className={styles.info}>
            <img src={ChatImg} alt='ChatImg' className={styles.infoImg} />
            <p>2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
