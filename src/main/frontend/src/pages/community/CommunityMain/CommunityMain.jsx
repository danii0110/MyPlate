import { useNavigate } from 'react-router-dom';
import styles from './CommunityMain.module.scss';
import Question from './Question';
import Aside from '../Aside';
import CommunityHeader from '../CommunityHeader';

function CommunityMain() {
  const navigate = useNavigate();

  const onClickWriteBtn = () => {
    navigate('/community/post'); // TODO: navigate 수정
  };

  return (
    <div className={styles.container}>
      <CommunityHeader />
      <div className={styles.subCont}>
        <div className={styles.main}>
          <button type='button' className={styles.writeBtn} onClick={onClickWriteBtn}>
            글쓰기
          </button>
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
