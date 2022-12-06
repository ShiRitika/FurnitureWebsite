import * as React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Chair1Image from "../assets/Chair1.png";
import Chair2Image from "../assets/Chair2.png";
import Chair3Image from "../assets/Chair3.png";
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

function ChairImages() {
  const classes = useStyles();

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container>
        <Grid item xs={4}>
          <Item>
            <div>
              <img src={Chair1Image} alt="" className={classes.sofaImage} />
            </div>
            <Typography variant="body">
              Bly Microfiber / Microsuedo 56" Armless <br></br>
              Loveseat
              <br></br>
              <br></br>
              <span className={classes.dollar}>$268</span>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div>
              <img src={Chair2Image} alt="" className={classes.sofaImage} />
            </div>
            <Typography variant="body">
              Bly Microfiber / Microsuedo 56" Armless <br></br>
              Loveseat
              <br></br>
              <br></br>
              <span className={classes.dollar}>$257</span>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <div>
              <img src={Chair3Image} alt="" className={classes.sofaImage} />
            </div>
            <Typography variant="body">
              Bly Microfiber / Microsuedo 56" Armless <br></br>
              Loveseat
              <br></br>
              <br></br>
              <span className={classes.dollar}>$297</span>
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ChairImages;
