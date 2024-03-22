import styles from './Aside.module.scss';
import AsideCont from './AsideCont';

function Aside() {
  return (
    <aside>
      <div className={styles.title}>주간 인기글</div>
      <AsideCont />
      <AsideCont />
      <AsideCont />
      <AsideCont />
    </aside>
  );
}

export default Aside;
