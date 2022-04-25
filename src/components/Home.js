import { React, useState, useEffect } from "react";
import "../App.css";
import { styled } from "@mui/system";
import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Paper,
  Button,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import ProjectIcon from "@mui/icons-material/AssuredWorkload";
import { ScrollToTop } from "react-simple-scroll-up";
import AppbarHead from "./SubComponents/AppbarHead";
import logo from "../images/homepageImage/one.svg";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Footer from "./SubComponents/Footer";
import Carousel from "react-simply-carousel";
import Colors from "../constants/Colors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DvrIcon from "@mui/icons-material/Dvr";
import GroupIcon from "@mui/icons-material/Group";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import EduMob from "../images/homepageImage/edumob.png";
import EduSys from "../images/homepageImage/edusys.png";
import DevMob from "../images/homepageImage/devmob.png";
import DevSys from "../images/homepageImage/devsys.png";
import SmaSys from "../images/homepageImage/smasys.png";
import SmaMob from "../images/homepageImage/smamob.png";
import AniSys from "../images/homepageImage/anisys.png";
import AniMob from "../images/homepageImage/animob.png"
import RBI from "../images/RBI.svg";
import SlideWrapper from "./SlideWrapper";

const titleContent = [
  {
    title: "2D",
    icon: logo,
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "3D",
    icon: logo,
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Graphics Design",
    icon: logo,
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Software Development",
    icon: logo,
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Mobile App Development",
    icon: logo,
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const clientsLogo = [RBI, RBI, RBI, RBI, RBI, RBI, RBI, RBI];

const slideImage = [
  {
    pcImg: SmaSys,
    mobImg: SmaMob,
    slideText: "Smart Class",
    
  },
  {
    pcImg: DevSys,
    mobImg: DevMob,
    slideText: "Development",
    
  },
  { pcImg: EduSys, mobImg: EduMob, slideText: "Education" },
  { pcImg: AniSys, mobImg: AniMob, slideText: "Animation" },
];

const NoOfDataList = [
  {
    count: "25+",
    text: "No.of Projects",
    icon: (
      <DvrIcon style={{ width: 50, height: 50, color: Colors.MAIN_COLOR }} />
    ),
  },
  {
    count: "50+",
    text: "No.of Clients",
    icon: (
      <HowToRegIcon
        style={{ width: 50, height: 50, color: Colors.MAIN_COLOR }}
      />
    ),
  },
  {
    count: "70+",
    text: "No.of Employees",
    icon: (
      <GroupIcon style={{ width: 50, height: 50, color: Colors.MAIN_COLOR }} />
    ),
  },
];

export default function Home() {
  // const Centered = (theme) => ({
  //   position: "absolute",
  //   top: "50%",
  //   left: { xs: "50%", sm: "50%", md: "75%", lg: "75%", xl: "75%" },
  //   fontSize: "36px",
  //   fontWeight: "bold",
  //   transform: `translate(-50%, -50%)`,
  //   [theme.breakpoints.down("md")]: {
  //     fontSize: "18px",
  //   },
  // });

  // const Container = styled("div")(({ theme }) => ({
  //   position: "relative",
  //   textAlign: "center",
    
  // }));

  const TypographyStyle1 = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "white",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
  }));

  const OurProductsSection = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
  }));


   





  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  console.log(width);
  console.log(height);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    console.log("dsd");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Home" }} />
      <SlideWrapper>
        <Slider          
          autoplay={true}
          arrows={false}
          dots={true}
          pauseOnHover={false}
          appendDots={dots => <ul style={{marginBottom:20}} >{dots}</ul>} 
          customPaging={i => (
            <div className="ft-slick__dots--custom">
              <div className="loading" />
            </div>
          )}
          speed={100}
          slidesToShow={1}
          slidesToScroll={1}
          adaptiveHeight={false}
        >
          {slideImage.map((item) => (            
              <img
                src={width < 800 ? item.mobImg : item.pcImg}
                style={{
                     
                  width: "100%",
                  height: width < 600 ? 600 : null,

                }}
              />               
          ))}
        </Slider>
      </SlideWrapper>

      <AnimationOnScroll animateOnce duration={3} animateIn="animate__fadeIn">
        <div
          style={{
            marginTop: 50,
            display: "flex",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Typography
            align="center"
            variant="h4"
            sx={{ color: Colors.MAIN_COLOR }}
          >
            Meet Netcom...
          </Typography>
        </div>

        <div style={{ marginTop: 20 }}>
          <TypographyStyle1>
            <Typography sx={{ fontSize: 16, textAlign: "justify" }}>
              {" "}
              <span style={{ fontWeight: "bold", color: Colors.MAIN_COLOR }}>
                Netcom Computers
              </span>{" "}
              have installed more than 300 and above eSmart Class Room in
              Government and Government aided schools. We have already
              implemented the Smart Class Room Pilot Project in 3 Government
              Higher Secondary Schools namely, Maranthai School at Tirunelveli
              District, Mallankinaru School at Virudhunagar District and
              Thummanathy school at Nilgiris District. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.{" "}
            </Typography>
          </TypographyStyle1>
        </div>
      </AnimationOnScroll>

      <div
        style={{
          marginTop: 50,
          display: "flex",
          justifyContent: "center",
          marginBottom: 30,
        }}
      >
        <AnimationOnScroll animateOnce duration={3} animateIn="animate__fadeIn">
          <Typography
            align="center"
            variant="h4"
            sx={{ color: Colors.MAIN_COLOR }}
          >
            Our Services
          </Typography>
        </AnimationOnScroll>
      </div>

      <OurProductsSection>
        {titleContent.map((text, index) => (
          <div style={{ width: 600, height: 300 }}>
            <AnimationOnScroll
              animateOnce
              duration={3}
              animateIn="animate__fadeIn"
            >
              <div>
                <img src={text.icon} height={150} width={150} />
                <Typography style={{ marginTop: 10 }} variant="h5">
                  {text.title}
                </Typography>
                <Typography
                  style={{ marginTop: 10 }}
                  align="justify"
                  variant="subtitle2"
                >
                  {text.content}
                </Typography>
                <Typography
                  style={{
                    marginTop: 15,
                    color: Colors.MAIN_COLOR,
                    cursor: "pointer",
                  }}
                  align="justify"
                  variant="body2"
                >
                  Read More
                </Typography>
              </div>
            </AnimationOnScroll>
          </div>
        ))}
      </OurProductsSection>

      <div
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "center",
          backgroundColor: Colors.LIGHT_COLOR,
        }}
      >
        <div
          style={{
            width: "67%",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {NoOfDataList.map((data) => (
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                width: 250,
                marginTop: 30,
                marginBottom: 30,
              }}
            >
              {data.icon}
              <Typography variant="h4"> {data.count} </Typography>
              <Typography variant="subtitle1"> {data.text}</Typography>
            </div>
          ))}
        </div>
      </div>

      <div style={{ paddingLeft: "10%", paddingRight: "10%", marginTop: 15 }}>
        <Paper elevation={0}>
          <div
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            <Typography
              align="center"
              variant="h4"
              sx={{ color: Colors.MAIN_COLOR }}
            >
              Our Honourable Clients
            </Typography>
          </div>
          <Slider
            style={{ padding: 20 }}
            autoplay={true}
            slidesToShow={width <= 500 ? 1 : width <= 1030 ? 2 : 4}
            slidesToScroll={1}
            touchMove
          >
            {clientsLogo.map((item, index) => (
              <img width={100} height={100} src={item} />
            ))}
          </Slider>
        </Paper>
      </div>
      <Footer />
    </div>
  );
}
