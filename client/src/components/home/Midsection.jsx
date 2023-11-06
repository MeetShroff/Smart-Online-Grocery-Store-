
import { imageURL } from "../../constants/Data";
import React from "react";
import { Grid } from "@mui/material";

const Midsection = () => {
  return (
    <Grid item lg={12} sm={12} md={12} xs={12} container>
      {imageURL.map((image) => (
        <Grid key={image.id} item lg={4} sm={12} md={4} xs={12} >
        <img src={image.url}  alt="" width={405} height={250} style={{padding:'5px', backGroundColor:'white'}} />
        </Grid>
      ))
      }
    </Grid>
  );
};

export default Midsection;
