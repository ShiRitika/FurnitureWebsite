import * as React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import LikeImage1 from "../assets/LikeImage1.png";
import LikeImage2 from "../assets/LikeImage2.png";
import LikeImage3 from "../assets/LikeImage3.png";

const useStyles = makeStyles({
  sofaImage: {
    height: "13rem",
    width: "100%",
  },
  dollar: {
    color: "#a10606",
    fontWeight: "bolder",
    fontSize: "15px",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function LikeProductImages() {
  const classes = useStyles();

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item>
            <div>
              <img src={LikeImage1} alt="" className={classes.sofaImage} />
            </div>
            <Typography variant="body">
              Bly Microfiber / Microsuedo 56 Armless
              {" "}
              <br />
              Loveseat
              <br />
              <br />
              <span className={classes.dollar}>$167</span>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div>
              <img src={LikeImage2} alt="" className={classes.sofaImage} />
            </div>
            <Typography variant="body">
              Bly Microfiber / Microsuedo 56 Armless
              {" "}
              <br />
              Loveseat
              <br />
              <br />
              <span className={classes.dollar}>$167</span>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div>
              <img src={LikeImage3} alt="" className={classes.sofaImage} />
            </div>
            <Typography variant="body">
              Bly Microfiber / Microsuedo 56 Armless
              {" "}
              <br />
              Loveseat
              <br />
              <br />
              <span className={classes.dollar}>$167</span>
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LikeProductImages;
