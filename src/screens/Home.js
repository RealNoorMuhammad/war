import React from "react";
import Header from "../components/Header";
import homeChildsPic from "../images/homeChildsPic.png";
import black from "../images/blacktor.png";
import red from "../images/redtor.png";
import rainBow from "../images/rainBow.png";
import Grid from "@mui/material/Grid";

function Home() {
  return (
    <div className="home">
      {" "}
      {/* This css code is  use for the height of the home Page*/}
      <Header hClass={"hPosAbsolute "} />
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
       
      {/* THIS JAVASCRIPT CODE IS FOR Background Image we have on the Home Page*/}{" "}
      {/* THIS JAVASCRIPT CODE IS FOR Header on the Home Page*/}
      <Grid container className="footerDiv" px={{ xs: 1, sm: 4 }}>
        {" "}
        {/* THIS JAVASCRIPT CODE IS FOR the Bottom text  we have on the Home Page*/}
        <Grid item md={6} my={2}>
          <div className="blueprintBottomSMText">
            {" "}
            {/* THIS JAVASCRIPT CODE IS FOR Background Image we have on the Home Page*/}
            © 2022, WarLand
            <br /> We’re all gonna be WarLand
          </div>
        </Grid>
      </Grid>
     
    </div>
  );
}

export default Home;
