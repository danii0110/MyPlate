import React from 'react';
import styles from './Community.module.scss';

// import CommunityQuestion from './CommunityQuestion/CommunitQuestion';
// import CommunityMain from './CommunityMain/CommunityMain';
import CommunityWrite from './CommunityWrite/CommunityWrite';

function Community() {
  return (
    <div className={styles.container}>
      {/* <CommunityQuestion /> */}
      {/* <CommunityMain /> */}
      <CommunityWrite />
    </div>
  );
}
export default Community;
