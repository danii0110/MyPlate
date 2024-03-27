import styles from './CommunityHeader.module.scss';

function CommunityHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>묻고 답해요</div>
      <div className={styles.titleSub}>당신이 원하는 것을 질문해보세요.</div>
    </div>
  );
}

export default CommunityHeader;
