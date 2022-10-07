import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';
import { Box,Button } from '@mui/material';


import { useRouter } from 'next/router';



export default function IconBreadcrumbs(props) {

    const { asPath, pathname } = useRouter();
    console.log(useRouter);
  return (
    <Box role="presentation" sx={{
        padding:3,
       
    }}>
      <Breadcrumbs aria-label="breadcrumb">
          
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
        
          <a>
              
              <Button startIcon={<HomeIcon/>}>HOME</Button>
          </a>
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/blogs"
        ><a>
         <Button startIcon={<NoteAltIcon/>}>BLOGS</Button>
          </a>
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          {props.slug}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
}
