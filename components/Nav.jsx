import React, { useState,useEffect } from "react";
import DrawerComp from "./Drawer";
import Link from 'next/link'


import styles from './sass/nav.module.scss'


import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";

const Nav = () => {
  const [value, setValue] = useState('1');
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };













  return (
    <React.Fragment>
      <AppBar elevation={0}  
       sx={{ background: "transparent",
       padding:1,
       
    
    }} >
 

          {/* <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} /> */}
          {isMatch ? (
            <>
            
              <DrawerComp />
              
            </>
          ) : (
            <>
<nav className={styles.nav} id="nav">
<div className={styles.logo}>
          <Link href='/'><a>
            Ayush Thapa
          {/* <img src='/logo.png' alt='logo' className={styles.logo}/> */}
          </a></Link>
    </div>

<div className={styles.lists}>
            <ul>
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/blogs'>Blogs</Link></li>
              <li><Link href='/mylab'>My Lab</Link></li>
             
            </ul>
    </div>

      
    </nav>   
            </>
          )}
        
      </AppBar>
    </React.Fragment>
  );
};

export default Nav;