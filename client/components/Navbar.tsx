import * as React from 'react';
import { useRouter } from 'next/router';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Container } from '@mui/material';
import cl from '../styles/globals.module.css'


const drawerWidth = "20%";

export default function Navbar() {
  const router = useRouter();

  const toSearch = (e) => {
    e.preventDefault()
    router.push('/tracks/search')
  }

  const toHome = (e) => {
    e.preventDefault()
    router.push('/')
  }

  const toLikedSongs = (e) => {
    e.preventDefault()
    router.push('/tracks/search')
  }

  return (
    <Container  sx={{ display: "flex", position: "absolute", font: {cl},
    height: "100px", }}
   >
     
      <Drawer
        sx={{
          
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            minWidth: '15%',
           // width: drawerWidth,
            boxSizing: "border-box",
            background: "gray",
            display: "flex",
           //flexDirection: "row",
           //alignItems: "end",
          },
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        
        <Divider />
        <List>  
          <ListItem >
            <h1 style={{ marginLeft:"auto", marginRight:"auto"}}>Music</h1>
          </ListItem>
        </List>
        <List > {/*sx={{display: "flex", flexDirection: "row"}} */}
          <ListItem disablePadding>
            <ListItemButton onClick={toHome}>
              <ListItemIcon>
                <HomeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={toSearch}>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary={"Search"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={toLikedSongs}>
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary={"Liked Songs"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Container>
  );
}
