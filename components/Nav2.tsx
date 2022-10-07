import React, { useState } from "react";
import DrawerComp from "./Drawer";


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

const Header = () => {
  const [value, setValue] = useState('1');
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));


  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <AppBar elevation={0} className={styles.nav2}
       sx={{  padding:5,

    
    }} >
        <Toolbar>
        <img src='/logo.png' alt='logo' className={styles.logo}/>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="primary"
                textColor="inherit"
                value={value}
                onChange={handleChange}
              >
                <Tab label="Home" value='1' href="/"/>
                <Tab label="Blogs" value='2' href="/blogs"/>
                <Tab label="Services" value='3' href="/#services"/>
              </Tabs>
              <Button sx={{ marginLeft: "auto", color: "white" }} variant="outlined" endIcon={<CallIcon />} href='/contact'>
                Free Consultency
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;