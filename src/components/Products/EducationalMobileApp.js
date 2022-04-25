import { React, useEffect } from "react";

import { styled } from "@mui/system";
import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Button,
  
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "../SubComponents/AppbarHead";
import ReactPlayer from "react-player";

import HomeSD from "../../images/gilgalintro.png";
import OrderSD from "../../images/gilgalsec.png";
import orderUser from "../../images/smart_Tailor_App/orderUser.png";
import SDApp from "../../images/smart_Tailor_App/SDApp.svg";

import reactLogo from "../../images/mernLogo/reactLogo.svg";
import nodeLogo from "../../images/mernLogo/nodeLogo.svg";
import expressLogo from "../../images/mernLogo/expressLogo.svg";
import andriodLogo from "../../images/mernLogo/androidLogo.svg";
import mongoLogo from "../../images/mernLogo/mango db.svg";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/LocalPhone";


import fbLogo from "../../images/socialmedia_icon/facebook.png";
import twLogo from "../../images/socialmedia_icon/twitter.png";
import linLogo from "../../images/socialmedia_icon/linkedin.png";
import ytLogo from "../../images/socialmedia_icon/youtube.png";
import FormSubmit from "../SubComponents/FormSubmit";

export default function EducationalMobileApp() {
  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));

  const DivStyle1 = styled("div")(({ theme }) => ({
    display: "flex",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      flexDirection: "column",
      justifyContent: "center",
    },
    [theme.breakpoints.up("md")]: {
      width: "67%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("lg")]: {
      width: "82%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("xl")]: {
      width: "67%",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  }));
  const DivStyle2 = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
  }));
  const DivStyle3 = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0 auto",
    },
    [theme.breakpoints.up("md")]: {
      width: "32%",
    },
  }));

  const DivStyle4 = styled("div")(({ theme }) => ({
    margin: "0 auto",
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "67%",
    },
  }));

  const contains = [
    "Learn with Video Classes",
    "Question and Answers",
    "Model Question Papers for all Subjects",
    "Choice Based Questions",
    "Clear doubts anytime and anywhere",
    "Language Support",
    "Learn from Anywhere",
    "Device Support",
  ];
  const websiteTechnology = [
    { text: "React JS", image: reactLogo },
    { text: "Node JS", image: nodeLogo },
    { text: "Express JS", image: expressLogo },
    { text: "MongoDB", image: mongoLogo },
  ];
  const mobileTechnology = [
    { text: "Android", image: andriodLogo },
    { text: "Node JS", image: nodeLogo },
    { text: "Express JS", image: expressLogo },
    { text: "MongoDB", image: mongoLogo },
  ];

 

  const logos = [fbLogo, twLogo, linLogo, ytLogo];


  useEffect(() => {
    
    window.scrollTo(0,0)
       
    }, [])

  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Products" }} />
      <BreadcrumbStyle>
        <Card elevation={6}>
          <CardContent>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link
                underline="hover"
                color="inherit"
                href="/"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {" "}
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" /> Home{" "}
              </Link>
              <Typography color="text.primary">Products</Typography>
              <Typography color="text.primary">
                Educational Mobile App (Gilgal)
              </Typography>
            </Breadcrumbs>
          </CardContent>
        </Card>
      </BreadcrumbStyle>

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25 }}>
        {/* 67% middle of page */}
        <DivStyle1>
          {/* Left Side */}
          <DivStyle2>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito" }}
            >
              {" "}
              <span style={{ fontWeight: "bold", color: "green" }}>
                {" "}
                Gilgal{" "}
              </span>{" "}
              is an online learning app personalized for CBSE, ICSE & State
              Board students. <br />
              <br />
              We cover a very wide range of syllabus from CBSE Board, ICSE, and
              State Boards for Tamil Medium and English Medium.
            </Typography>

            <Typography
              variant="h5"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              How students can use the app
            </Typography>

            <ul>
              {contains.map((text) => (
                <li style={{ marginTop: 7 }}>{text}</li>
              ))}
            </ul>
            <Typography
              variant="h5"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              {contains[0]}
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 2 }}
            >
              • You can watch each topic and understand concepts together with
              videos.<br/><br/>• Our Video lectures cover all topics & chapters from the
              CBSE and State Board syllabus.<br/><br/>•Each Videos comes with lot of
              animations helps Students to understand concepts in an attractive
              manner
            </Typography>

         
            <Typography
              variant="h5"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              {contains[1]}
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 2 }}
            >
              
              • Learn 2 marks Questions with Answers of each and every subject in the Class.<br/><br/>
              • Every Important Concepts will be covered in the 2 marks Questions. 

            </Typography>
            <Typography
              variant="h5"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              {contains[2]}
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 2 }}
            >
              
              • Revised Question Papers of every Subject in the Class will be provided. 
 

            </Typography>      

            <Typography
              variant="h5"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              {contains[3]}
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 2 }}
            >
              
              • You can test your Knowledge of every Subject with the interactive Choice Based 1 mark Questions with solutions.


            </Typography>  

            <Typography
              variant="h5"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              {contains[4]}
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 2 }}
            >
              
              • Connect with tutors to clear your doubts in real-time and learn better.

<br/><br/>
              • Comes with 24*7 chat support and dedicated ask from the expert section. 

            </Typography>   


            <Typography
              variant="h5"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              {contains[5]}
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 2 }}
            >
              
              • Learn in both Tamil and English Language.

            </Typography> 

            <Typography
              variant="h5"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              {contains[6]}
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 2 }}
            >
              
              • You can learn in your Comfort Zone or wherever you wish.

            </Typography> 

            <Typography
              variant="h5"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              {contains[7]}
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 2 }}
            >
              
              • Gilgal App is available in Mobiles, Tablets and  Desktops.

            </Typography>          

            <Typography
              variant="h6"
              style={{ marginTop: 7, fontWeight: "600", fontFamily: "nunito" }}
            >
              Admin App and Tailors App Technology used{" "}
            </Typography>
            <ul>
              {websiteTechnology.map((obj) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 7,
                  }}
                >
                  <img src={obj.image} style={{ width: "27px" }} />
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "nunito", alignItems: "center" }}
                  >
                    {" "}
                    {obj.text}
                  </Typography>
                </div>
              ))}
            </ul>

            
            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 2 }}
            >
              {" "}
              <span style={{ fontWeight: "bold", color: "green" }}>
                {" "}
                Customer Mobile Application{" "}
              </span>{" "}
              is the Mobile Android application . Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.{" "}
            </Typography>

            <Typography
              variant="body1"
              sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 1 }}
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </Typography>

            <Typography
              variant="h6"
              style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
            >
              Customer Mobile App Technology used
            </Typography>

            <ul>
              {mobileTechnology.map((obj) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 7,
                  }}
                >
                  <img src={obj.image} style={{ width: "27px" }} />
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "nunito", alignItems: "center" }}
                  >
                    {" "}
                    {obj.text}
                  </Typography>
                </div>
              ))}
            </ul>
          </DivStyle2>

          {/* Ride Side */}
          <DivStyle3>
            <Typography
              variant="h6"
              style={{ marginBottom: 10, fontFamily: "nunito" }}
            >
              Smart Tailoring Web Application Demo
            </Typography>

            {/* React Player Div */}
            <div style={{ position: "relative", paddingTop: " 56.25%" }}>
              <ReactPlayer
                width="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
                height="100%"
                config={{
                  file: { attributes: { controlsList: "nodownload" } },
                }}
                url={"https://gdurl.com/NAfp"}
                controls
              ></ReactPlayer>
            </div>
            {/* React Player Div */}

            <Typography
              variant="body1"
              style={{ marginTop: 25, marginBottom: 10, fontFamily: "nunito" }}
            >
              Please mail us to get the free demo for smart tailoring app:
              <span
                style={{ color: " #3B7CFE", cursor: "pointer" }}
                onClick={() => {
                  window.open("mailto:career@ncpli.com");
                }}
              >
                career@ncpli.com
              </span>
            </Typography>

            <AnimationOnScroll
              animateIn="animate__fadeInRight"
              animateOnce={true}
              duration={2}
            >
              <div style={{ position: "relative", marginTop: 10 }}>
                <img
                  width="100%"
                  style={{ top: 0, left: 0 }}
                  height="150%"
                  src={HomeSD}
                ></img>
              </div>
            </AnimationOnScroll>

            <div style={{ position: "relative", marginTop: 10 }}>
              <img
                width="100%"
                style={{ top: 0, left: 0 }}
                height="100%"
                src={OrderSD}
              ></img>
            </div>

            <div style={{ position: "relative", marginTop: 10 }}>
              <img
                width="100%"
                style={{ top: 0, left: 0 }}
                height="100%"
                src={orderUser}
              ></img>
            </div>
            <Typography
              variant="body1"
              style={{ marginTop: 10, fontFamily: "nunito" }}
            >
              Smart Tailoring Mobile Application Screenshots{" "}
            </Typography>

            <div style={{ position: "relative", marginTop: 10 }}>
              <img
                width="100%"
                style={{ top: 0, left: 0 }}
                height="100%"
                src={SDApp}
              ></img>
            </div>
          </DivStyle3>
        </DivStyle1>
      </div>

      <div style={{ width: "100%", marginTop: 25 }}>
        <DivStyle4>
          <Typography
            variant="h5"
            style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
          >
            Need this Product? Contact us:
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 1 }}
          >
            {" "}
            If you like and want this product, Please feel free to contact us.
            Also we can add/update new features and design changes in this
            product if you want.
          </Typography>

          <Typography
            variant="body1"
            sx={{ textAlign: "justify", fontFamily: "nunito", marginTop: 1 }}
          >
            To discuss about this product and our other services, please mail us
            on
            <span
              style={{ color: " #3B7CFE", cursor: "pointer" }}
              onClick={() => {
                window.open("mailto:career@ncpli.com");
              }}
            >
              {" "}
              career@ncpli.com
            </span>{" "}
            or call
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open("tel:04622585979");
              }}
            >
              {" "}
              0462 - 2585979{" "}
            </span>
          </Typography>
          <Button
            style={{
              backgroundColor: "#ED514A",
              color: "white",
              fontWeight: "600",
              fontFamily: "nunito",
              marginTop: 15,
              textTransform: "none",
              width: 150,
            }}
          >
            Requested a Demo
          </Button>
        </DivStyle4>
      </div>

      <div style={{ width: "100%", marginTop: 25 }}>
        <div
          style={{
            width: "67%",
            margin: "0 auto",
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            style={{ marginTop: 20, fontWeight: "600", fontFamily: "nunito" }}
          >
            Submit a Query
          </Typography>
        </div>
      </div>

      {/* Full vertical page */}
      <div style={{ width: "100%", marginTop: 25, marginBottom: 50 }}>
        {/* 67% middle of page */}
       
          {/* Left Side */}
          
          <FormSubmit/>

          
        
      </div>
    </>
  );
}
