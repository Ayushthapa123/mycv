
import React, { useState } from "react";
import Link from 'next/link';

import styles from './sass/drawer.module.scss';



import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
<div className={styles.mview} id='nav' >


 <div className={styles.logo}>
 <Link href='/'><a>
            Ayush Thapa
          {/* <img src='/logo.png' alt='logo' className={styles.logo}/> */}
          </a></Link>
  </div>

<div className={styles.dcontainer}>

      <Drawer
      className={styles.drawer}
       
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
            sx: { width: "70%",padding:"20px",backgroundColor:"rgb(27,27,27)"
          },
          }}
      >
<div className={styles.list}>
<ul>
  <li><Link href='/'><a>Home</a></Link></li>
  <li><Link href='/blogs'><a>Blogs</a></Link></li>
  <li><Link href='/mylab'><a>My Lab</a></Link></li>
</ul>

</div>

{/* 
        <List className={styles.list}>
          
            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/'><a>Home</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/'><a>Blogs</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <ListItemText><Link href='/'><a>My Lab</a></Link></ListItemText>
              </ListItemIcon>
            </ListItemButton>
  
        </List> */}


      </Drawer>
      <IconButton
        sx={{ fontSize:'large',}}
        onClick={() => setOpenDrawer(!openDrawer)}
        
      >
        <MenuIcon sx={{ transform: "scale(1.4)", color:"white"}}/>
      </IconButton>


      </div>
  </div>
    </React.Fragment>
  );
};

export default DrawerComp;