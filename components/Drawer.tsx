import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


import styles from './sass/drawer.module.scss';

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
            sx: { width: "70%", backgroundColor:"white"},
          }}

          className={styles.drawer}
      >
        <List sx={{color:"whitesmoke"}} className={styles.list}>
      
            <ListItemButton>
              <ListItemIcon>
                <ListItemText sx={{color:'black',fontFamily:`'Anton', sans-serif;`}}>Home</ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText sx={{color:'black'}}>Blogs</ListItemText>
              </ListItemIcon>
            </ListItemButton>
     
            <ListItemButton>
              <ListItemIcon>
                <ListItemText sx={{color:'black'}}>Services</ListItemText>
              </ListItemIcon>
            </ListItemButton>


    
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto", marginTop:"-30px" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;