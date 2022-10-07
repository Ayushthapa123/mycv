
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
            sx: { width: "70%",padding:"20px"
          },
          }}
      >
        <List className={styles.list}>
      
         
{/* <hr/> */}
           


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
  

        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", fontSize:'large',}}
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