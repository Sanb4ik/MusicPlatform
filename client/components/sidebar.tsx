import React from 'react';
import styles from '../styles/Home.module.css'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import {useRouter} from 'next/router';

const Sidebar = () => {
  const router = useRouter()
    return (
        <div className={styles.sidebar}>
        <div className={styles.name}>
          <h1>Music</h1>
        </div>
        <div className={styles.buttons}>
          <HomeIcon className={styles.icon}></HomeIcon><p className={styles.description}>Home</p>
          <SearchIcon className={styles.icon}>Search</SearchIcon><p className={styles.description}>Search</p>
          <FavoriteIcon className={styles.icon}>Liked </FavoriteIcon><p className={styles.description}>Liked Songs</p>
        </div>
      </div>
    );
};

export default Sidebar;