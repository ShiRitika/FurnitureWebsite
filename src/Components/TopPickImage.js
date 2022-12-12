import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TopPickImage1 from '../assets/TopPickImage1.png';
import TopPickImage2 from '../assets/TopPickImage2.png';
import TopPickImage3 from '../assets/TopPickImage3.png';

const useStyles = makeStyles({
  sofaImage: {
    height: '13rem',
    width: '100%',
  },
  dollar: {
    color: '#a10606',
    fontWeight: 'bolder',
    fontSize: '15px',
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const TopPickImages = () => {
  const classes = useStyles();

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <div>
              <img src={TopPickImage1} alt="" className={classes.sofaImage} />
            </div>
            <Typography variant="body">
              Bly Microfiber / Microsuedo 56" Armless
              {' '}
              <br />
              Loveseat
              <br />
              <br />
              <span className={classes.dollar}>$367</span>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div>
              <img src={TopPickImage2} alt="" className={classes.sofaImage} />
            </div>
            <Typography variant="body">
              Bly Microfiber / Microsuedo 56" Armless
              {' '}
              <br />
              Loveseat
              <br />
              <br />
              <span className={classes.dollar}>$467</span>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div>
              <img src={TopPickImage3} alt="" className={classes.sofaImage} />
            </div>
            <Typography variant="body">
              Bly Microfiber / Microsuedo 56" Armless
              {' '}
              <br />
              Loveseat
              <br />
              <br />
              <span className={classes.dollar}>$378</span>
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopPickImages;
