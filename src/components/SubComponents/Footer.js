import "animate.css/animate.min.css";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { styled } from "@mui/material/styles";

import ArrowIcon from "@mui/icons-material/ArrowForward";
import LocationIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import MapImg from "../../images/Footer/3.jpg";


import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { useNavigate } from "react-router-dom";


const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${MapImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}));

const SubContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  padding: "30px",
  flexWrap: "wrap",
  width: "80%",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    width: "95%",
  },
}));

const BGColor = styled("div")(({ theme }) => ({
  backgroundColor: `rgb(6,68,32, .6)`,
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

const SubContainerItem = styled("div")(({ theme }) => ({
  width: "300px",
  margin: "15px",
}));

const SocialMediaLogo = styled("div")(({ theme }) => ({
  border: "1px solid #fff",
  borderRadius: "5px",
  cursor: "pointer",
  display: "inline-block",
  textAlign: "center",
  margin: "5px",
  padding: "1px",
  width: "30px",
  height: "30px",
  "&:hover": {
    backgroundColor: "#019267",
    transition: "0.6s ease",
  },

  [theme.breakpoints.down("sm")]: {
    margin: "3px",
    padding: "2px",
  },
}));

const SiteMap = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "nowrap",
  color: "white",
  cursor: "pointer",
  "&:hover": {
    color: "#49FF00",
    transition: "0.5s",
  },
}));

export default function Footer() {
  const navigate = useNavigate();

  const socialMedia = [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/",
    },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://www.twitter.com/",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/",
    },
    {
      icon: <WhatsAppIcon />,
      link: "https://api.whatsapp.com/send/?phone=%2B91**********&text&app_absent=0",
    },
  ];

  const siteMap = [
    {
      text: "Smart Class Room",
      link: "/smart-class",
    },
    {
      text: "Netcom Digital Content",
      link: "/2d-3d-animations",
    },
    {
      text: "Language Lab",
      link: "/ll",
    },
    {
      text: "Call Soft",
      link: "/call-soft-project",
    },
    {
      text: "Assessment",
      link: "/a",
    },
    {
      text: "Skill Development & Training",
      link: "/software-solution",
    },
    {
      text: "Kiosk Project",
      link: "/kiosk-project",
    },
  ];

  return (
    <MainContainer>
      <BGColor>
        <SubContainer>
          {/* text with icons */}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <SubContainerItem>
              <Typography variant="body1" style={{ color: "white" }}>
                Netcom Computers Pvt Ltd is an Information Technology based
                company in Education and Training.
              </Typography>

              {socialMedia.map((data,i) => (
                <SocialMediaLogo key={i}> 
                  <AnimationOnScroll
                    animateOnce={true}
                    animateIn="animate__lightSpeedInLeft"
                  >
                    <IconButton
                      style={{ height: "30px", width: "30px", color: "white" }}
                      onClick={() => window.open(data.link)}
                    >
                      {data.icon}
                    </IconButton>

                  </AnimationOnScroll>
                </SocialMediaLogo>
              ))}
            </SubContainerItem>
          </AnimationOnScroll>

          {/* siteMap */}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <SubContainerItem>
              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  color: "white",
                  whiteSpace: "nowrap",
                }}
              >
                SITE MAP
              </Typography>

              {siteMap.map((data , i ) => (
                <SiteMap key={i}
                  onClick={() => {
                    navigate(data.link);
                  }}
                >
                  <ArrowIcon />
                  <Typography
                    variant="subtitle2"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {" "}
                    {data.text}{" "}
                  </Typography>
                </SiteMap>
              ))}
            </SubContainerItem>
          </AnimationOnScroll>
          {/* HEAD OFFICE */}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <SubContainerItem>
              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  color: "white",
                }}
              >
                HEAD OFFICE
              </Typography>

              <div style={{ display: "flex", color: "white" }}>
                <LocationIcon style={{ marginRight: 15 }} />
                <Typography>
                  {" "}
                  No. 1/1, Nathan Street, Adikalapuram, Murugankurichi,
                  Palayamkottai, Tirunelveli - 02
                </Typography>
              </div>

              <div style={{ display: "flex", color: "white" }}>
                <MailIcon style={{ marginRight: 15 }} />
                <Typography
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open("mailto:career@ncpli.com","_self");
                  }}
                >
                  career@ncpli.com
                </Typography>
                {/* mailto:xyz@yourapplicationdomain.com?subject=Me&body=Hello! */}
              </div>

              <div style={{ display: "flex", color: "white" }}>
                <PhoneIcon style={{ marginRight: 15 }} />
                <Typography
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open("tel:04622585979","_self");
                  }}
                >
                  {" "}
                  0462 - 2585979{" "}
                </Typography>
              </div>
            </SubContainerItem>
          </AnimationOnScroll>

          {/* CORPORATE OFFICE */}
          <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
            <SubContainerItem>
              <Typography
                variant="subtitle1"
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                  color: "white",
                }}
              >
                CORPORATE OFFICE
              </Typography>

              <div style={{ display: "flex", color: "white" }}>
                <LocationIcon style={{ marginRight: 15 }} />
                <Typography>
                  No. 5/3, Second Floor, Kush Kumar Road, Nungambakkam, Chennai
                  - 600 034.
                </Typography>
              </div>

              <div style={{ display: "flex", color: "white" }}>
                <MailIcon style={{ marginRight: 15 }} />
                <Typography
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open("mailto:career@ncpli.com","_self");
                  }}
                >
                  career@ncpli.com
                </Typography>
              </div>

              <div style={{ display: "flex", color: "white" }}>
                <PhoneIcon style={{ marginRight: 15 }} />
                <Typography
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open("tel:04442125369","_self");
                  }}
                >
                  {" "}
                  044 - 42125369
                </Typography>
              </div>
            </SubContainerItem>
          </AnimationOnScroll>
        </SubContainer>
      </BGColor>

      {/* <ColoredLine color={"white"} /> */}

      <div
        style={{
          textAlign: "center",
          backgroundColor: `rgb(6,68,32, .8)`,
          width: "100%",
        }}
      >
        <p
          style={{
            color: "white",
            margin: "auto",
            fontSize: "12px",
            padding: 10,
          }}
        >
         ©{" "}
           {new Date().getFullYear()} All rights reserved
          <span
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "12px",
              cursor: "pointer",
            }}
          >
            {" | "}
            Netcom Computers Pvt Ltd
          </span>
        </p>
      </div>
    </MainContainer>
  );
}

