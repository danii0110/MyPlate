import React from 'react';
import styles from './Community.module.scss';

// import CommunityQuestion from '../community/CommunityQuestion/CommunitQuestion';
import CommunityMain from '../pages/community/CommunityMain/CommunityMain';
// import CommunityWrite from '../pages/community/CommunityWrite/CommunityWrite';

function Community() {
  return (
    <div className={styles.container}>
      {/* <CommunityQuestion /> */}
      <CommunityMain />
      {/* <CommunityWrite /> */}
    </div>
  );
}
export default Community;
