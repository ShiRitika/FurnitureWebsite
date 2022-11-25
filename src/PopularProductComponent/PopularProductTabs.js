import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SofaImages from "./Sofa";
import TableImages from "./Table";
import ChairImages from "./Chair";
import BedImages from "./Bed"; 
import DecoreImages from './Decore';
import LightningImages from './Lightning';

function ProductTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Sofa" value="1" />
            <Tab label="Table" value="2" />
            <Tab label="Chair" value="3" />
            <Tab label="Bed" value="4" />
            <Tab label="Lightning" value="5" />
            <Tab label="Decore" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <SofaImages />
        </TabPanel>
        <TabPanel value="2"><TableImages /></TabPanel>
        <TabPanel value="3"><ChairImages/></TabPanel>
        <TabPanel value="4"><BedImages/></TabPanel>
        <TabPanel value="5"><LightningImages/></TabPanel>
        <TabPanel value="6"><DecoreImages /></TabPanel>
      </TabContext>
    </Box>
  );
}

export default ProductTabs;
