import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  sofaImage: {
    cursor: 'pointer',
  },
  showSofaImage: {
    width: '100%',
  },
});

const StandardImageList = (props) => {
  const classes = useStyles();
  const image = props.img;

  const [mainImage, setMainImage] = useState(image[0].mainImg);

  return (
    <div>
      <div className={classes.BigImageContent}>
        <img id="image1" src={mainImage} alt="" className={classes.showSofaImage} />
      </div>
      <ImageList cols={4}>
        <ImageListItem>
          <img src={image[0].img1} alt="" className={classes.sofaImage} onClick={() => setMainImage(image[0].img1)} />
        </ImageListItem>
        <ImageListItem>
          <img src={image[0].img2} alt="" className={classes.sofaImage} onClick={() => setMainImage(image[0].img2)} />
        </ImageListItem>
        <ImageListItem>
          <img src={image[0].img3} alt="" className={classes.sofaImage} onClick={() => setMainImage(image[0].img3)} />
        </ImageListItem>
        <ImageListItem>
          <img src={image[0].img4} alt="" className={classes.sofaImage} onClick={() => setMainImage(image[0].img4)} />
        </ImageListItem>
      </ImageList>
    </div>
  );
}

export default StandardImageList;
