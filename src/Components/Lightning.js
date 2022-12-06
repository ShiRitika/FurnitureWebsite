import * as React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Lightning1Image from "../assets/Lightning1.png";
import Lightning2Image from "../assets/Lightning2.png";
import Lightning3Image from "../assets/Lightning3.png";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  sofaImage: {
    height: "13rem",
    width: "20rem",
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
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function LightningImages() {
  const classes = useStyles();

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container>
        <Grid item xs={4}>
          <Item>
            <div>
              <img src={Lightning1Image} alt="" className={classes.sofaImage} />
            </div>
            <Typography variant="body">
              Bly Microfiber / Microsuedo 56" Armless <br></br>
              Loveseat
              <br></br>
              <br></br>
              <span className={classes.dollar}>$167</span>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div>
              <img src={Lightning2Image} alt="" className={classes.sofaImage} />
            </div>
            <Typography variant="body">
              Bly Microfiber / Microsuedo 56" Armless <br></br>
              Loveseat
              <br></br>
              <br></br>
              <span className={classes.dollar}>$197</span>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div>
              <img src={Lightning3Image} alt="" className={classes.sofaImage} />
            </div>
            <Typography variant="body">
              Bly Microfiber / Microsuedo 56" Armless <br></br>
              Loveseat
              <br></br>
              <br></br>
              <span className={classes.dollar}>$157</span>
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LightningImages;
