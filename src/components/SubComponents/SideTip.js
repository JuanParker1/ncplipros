import React from "react";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from '@mui/icons-material/Email';
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default function SideTip() {

  const SideStyle = styled("div")(({ theme }) => ({
    position: "fixed",
    right: 0,
    transform:`translateY(-50%)`,
    backgroundColor: "#5463FF",
    color: "white",
    padding: "0.5%",
    display: "flex",
    cursor:'pointer',
    justifyContent:'center',
    '& .myText':{
        display: "none",
    },
    "&:hover .myText": {
      display: "flex",
    },
    
    '.myText':{
        marginRight:'0.5%' , whiteSpace:'nowrap',
    }
  }));
  
  
  return (
    <div>
      {/* call stuff */}
      <SideStyle  style={{top: "45%",}} onClick={() => { window.open("tel:7538862862" , "_self")}}>
        <CallIcon  />
        <Typography className="myText" > Call Us </Typography>
      </SideStyle>


      <SideStyle style={{top: "55%",}} onClick={() => { window.open("mailto:career@ncpli.com" , "_self")}}>
        <MailIcon  />
        <Typography className="myText"> Mail Us </Typography>
      </SideStyle>


    </div>
  );
}
