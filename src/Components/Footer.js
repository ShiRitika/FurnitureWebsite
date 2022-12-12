import React from 'react';
import '../App.css';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

const useStyle = makeStyles({
  bigContainer: {
    position: 'relative',
    zIndex: 1,
  },
  mainContainer: {
    width: '98%',
    marginRight: 'auto',
    minHeight: '700px',
    position: 'relative',
    zIndex: 2,
    backgroundColor: '#e3d2c9',
    top: 0,
    right: 0,
    padding: '2rem 10rem 2rem 10rem',
    display: 'flex',
  },
  mainContent: {
    width: '24.5%',
    boxSizing: 'border-box',
    padding: '1rem',
    '& svg': {
      fontSize: '2.5rem',
    },
    '& h6': {
      fontSize: '1rem',
      paddingTop: '1rem',
      paddingBottom: '0.5rem',
    },
  },
  FooterIcon: {
    width: '1000rem',
    height: '100rem',
    border: '1px solid black',
  },
  blueContainer: {
    display: 'flex',
    minHeight: '250px',
    zIndex: 3,
    backgroundColor: '#1E2547',
    width: '98%',
    bottom: 0,
    right: 0,
    position: 'absolute',
    color: 'white',
    padding: '4rem 8rem 4rem 8rem',
  },
  blueContent: {
    width: '24.5%',
    boxSizing: 'border-box',
    padding: '1rem',
  },
  furnContainer: {
    backgroundColor: '#1E2547',
    width: '5rem',
    height: '5rem',
    border: '2px solid #ff7043',
    color: '#ff7043',
    padding: '20px 21px 20px 17px',
    letterSpacing: '4px',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  text: {
    paddingBottom: '2.5rem',
  },
  Icon: {
    marginTop: '1rem',
    marginBottom: '2.5rem',
    margin: '3rem 0.5rem 0rem 0.5rem',
    cursor: 'pointer',
  },
  linkItem: {
    display: 'block',
    paddingBottom: '1rem',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
  },
  copyrightSection: {
    zIndex: 4,
    backgroundColor: '#1E2547',
    width: '98%',
    bottom: 0,
    right: 0,
    position: 'absolute',
    color: 'white',
    textAlign: 'center',
    padding: '1.5rem',
  },
  copyrightText: {
    margin: 'auto',
  },
  heart: {
    color: '#ff7043',
    paddingTop: '10px',
  },
  ritika: {
    color: '#ff7043',
  },
});

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.bigContainer}>
      <div className={classes.mainContainer}>
        <div className={classes.mainContent}>
          <LocalShippingIcon className={classes.UpperFooterIcon} />
          <Typography variant="h6" className={classes.likeProductHead}>
            Fast & Free Delivery
          </Typography>
          <Typography variant="body1">Free delivery on all orders</Typography>
        </div>
        <div className={classes.mainContent}>
          <PhonelinkLockIcon className={classes.UpperFooterIcon} />
          <Typography variant="h6" className={classes.likeProductHead}>
            Secure Payment
          </Typography>
          <Typography variant="body1">Free delivery on all orders</Typography>
        </div>
        <div className={classes.mainContent}>
          <CurrencyExchangeIcon className={classes.UpperFooterIcon} />
          <Typography variant="h6" className={classes.likeProductHead}>
            Money Back Guarantee
          </Typography>
          <Typography variant="body1">Free delivery on all orders</Typography>
        </div>
        <div className={classes.mainContent}>
          <SupportAgentIcon className={classes.UpperFooterIcon} />
          <Typography variant="h6" className={classes.likeProductHead}>
            Online Support
          </Typography>
          <Typography variant="body1">Free delivery on all orders</Typography>
        </div>
      </div>
      <div className={classes.blueContainer}>
        <div className={classes.blueContent}>
          <div className={classes.furnContainer}>F U R N</div>
          <Typography variant="body2" className={classes.text}>
            suspendises varius enim ros eros elementum tristique. Duis curses,
            mi quis viverra arnare, eros dolar enterdum nulla
          </Typography>
          <TwitterIcon className={classes.Icon} />
          <FacebookOutlinedIcon className={classes.Icon} />
          <LocalParkingOutlinedIcon className={classes.Icon} />
        </div>
        <div className={classes.blueContent}>
          <Typography variant="subtitle1" className={classes.text}>
            Quick Links
          </Typography>
          <li className={classes.linkItem}>
            <a className={classes.link} href="#">
              Image Licensin
            </a>
          </li>
          <li className={classes.linkItem}>
            <a className={classes.link} href="#">
              Style Guide
            </a>
          </li>
          <li className={classes.linkItem}>
            <a className={classes.link} href="#">
              Privacy policy
            </a>
          </li>
        </div>
        <div className={classes.blueContent}>
          <Typography variant="subtitle1" className={classes.text}>
            Shop Category
          </Typography>
          <li className={classes.linkItem}>
            <a className={classes.link} href="#">
              Image Licensin
            </a>
          </li>
          <li className={classes.linkItem}>
            <a className={classes.link} href="#">
              Style Guide
            </a>
          </li>
          <li className={classes.linkItem}>
            <a className={classes.link} href="#">
              Privacy policy
            </a>
          </li>
        </div>
        <div className={classes.blueContent}>
          <Typography variant="subtitle1" className={classes.text}>
            Partners
          </Typography>
          <li className={classes.linkItem}>
            <a className={classes.link} href="#">
              Image Licensin
            </a>
          </li>
          <li className={classes.linkItem}>
            <a className={classes.link} href="#">
              Style Guide
            </a>
          </li>
          <li className={classes.linkItem}>
            <a className={classes.link} href="#">
              Privacy policy
            </a>
          </li>
        </div>
      </div>
      <div className={classes.copyrightSection}>
        <Typography variant="body2" className={classes.copyrightText}>
          Copyright &copy; 2022 All rights reserved | This template is made with
          {' '}
          <FavoriteIcon className={classes.heart} />
          by
          {' '}
          <span className={classes.ritika}>Ritika</span>
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
