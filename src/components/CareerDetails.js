import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import SideTip from "./SubComponents/SideTip";
import Footer from "./SubComponents/Footer";

export default function CareerDetails() {

    const location = useLocation()

    const [details, setDetails ] = useState({})

  useEffect(() => {
    setDetails(location.state.details)
  }, [])
  

  const DetailsRoot = styled("div")(({theme})=>({
    display: "flex", flexDirection: "column", width: "60%", margin:'2% 0%',
    [theme.breakpoints.down('sm')]:{
        width:'90%'
    },
    [theme.breakpoints.down('md')]:{
        width:'85%'
    },
    [theme.breakpoints.between('sm','md')]:{
        width:'80%',
    }
  }))

  const DetailsDiv = styled("div")(({theme})=>({
    display:'flex' , flexDirection:'column' ,  margin:'2% 0%'
  }))



  return (
   <>

   <SideTip/>

<div style={{ display: "flex", justifyContent:'center'  }}>


{/* details root */}
<DetailsRoot>
 
  <Typography variant="h5" style={{fontWeight:'bold' ,textAlign:'center' ,}}> {details.title} </Typography>

  {/* job description */}
    
    <DetailsDiv >
    <Typography variant="h6" style={{ whiteSpace:'nowrap'}}>Job Description:</Typography>

    <Typography
      variant="body2"
      style={{ color: "#010101", textAlign: "justify", }}
    >
      {" "}
      {details.description}
    </Typography>
  </DetailsDiv>
  {/* duties */}
  <DetailsDiv>
    <Typography variant="h6">Responsibilities and Duties:</Typography>

    {details.duties?.map((data,i) => (
      <Typography
      key={i}
        variant="body2"
        style={{ color: "#010101", textAlign: "justify" , marginLeft:'1%' , padding:'1%'}}
      > 
        <span style={{fontWeight:'bolder'}}>{" ✔ "}</span>
        {data}
      </Typography>
    ))}
   </DetailsDiv>

  {/* skill set */}
  <DetailsDiv>
    <Typography variant="h6">
      Required Experience, Skills and Qualifications:
    </Typography>

    {details.skillSet?.map((data,i) => (
      <Typography
      key={i}
        variant="body2"
        style={{ color: "#010101", textAlign: "justify" , marginLeft:'0.5%' , padding:'0.5%' }}
      >
        {" • "}
        {data}
      </Typography>
    ))}


      

  </DetailsDiv>

</DetailsRoot>



</div>

<Footer/>
   </>
  );
}
