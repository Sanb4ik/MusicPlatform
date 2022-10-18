import React from 'react';
import styles from '../styles/Home.module.css'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import {useRouter} from 'next/router';

const Sidebar = () => {
  const router = useRouter()

  const GotoAllTraks =()=>{
    router.push('/tracks/all')
  }

  const GotoCreateTraks =()=>{
    router.push('/tracks/create')
  }

    return (
        <div className={styles.sidebar}>
        <div className={styles.name}>
          <h1>Music</h1>
        </div>
        <div className={styles.buttons}>
          <HomeIcon className={styles.icon}/><p className={styles.description}>Home</p>
          <SearchIcon className={styles.icon}/><p className={styles.description}>Search</p>
          <FavoriteIcon className={styles.icon}/><p className={styles.description}>Liked Songs</p>
          <AllInclusiveIcon onClick={GotoAllTraks} className={styles.icon}/><p className={styles.description} >All</p>
          <NoteAddIcon onClick={GotoCreateTraks} className={styles.icon}/><p className={styles.description} >Create</p>
        </div>
      </div>
    );
};

export default Sidebar;