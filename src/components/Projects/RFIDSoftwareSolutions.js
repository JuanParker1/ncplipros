import React from "react";
import { styled } from "@mui/system";
import {
  Typography,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Divider,
  Box,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import AppbarHead from "../SubComponents/AppbarHead";
import image7 from "../../images/RfidImages/undrawonlinreading_.svg";
import image1 from "../../images/RfidImages/undrawsetupwizard.svg";
import image2 from "../../images/RfidImages/undrawsoftwareengineer.svg";
import image3 from "../../images/RfidImages/undrawoperatingsystem.svg";
import image4 from "../../images/RfidImages/undraw_social_networking_re_i1ex.svg";
import image6 from "../../images/RfidImages/undraw_quality_time_wiyl.svg";
import image9 from "../../images/RfidImages/undraw_mention_re_k5xc.svg";
import image10 from "../../images/RfidImages/undraw_setup_analytics_re_foim.svg";
import image11 from "../../images/RfidImages/undraw_location_tracking_re_n3ok.svg";
import image12 from "../../images/RfidImages/undraw_server_cluster_jwwq.svg";
import image13 from "../../images/RfidImages/undraw_secure_server_re_8wsq.svg";
import image5 from "../../images/RfidImages/undrawprojectl.svg";
import { ScrollToTop } from "react-simple-scroll-up";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Root = styled("div")(({ theme }) => ({
  width: "70%",
  [theme.breakpoints.down("md")]: {
    width: "95%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
  [theme.breakpoints.up("lg")]: {},
}));

const cartitem1 = (theme) => ({
  width: "30%",
  padding: "10px 0px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: "10px",
  },

  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("lg")]: {},
});

const cartitem2 = (theme) => ({
  width: "30%",
  padding: "10px 0px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: "10px",
  },

  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("lg")]: {},
});

const cartitem3 = (theme) => ({
  width: "30%",
  padding: "10px 0px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: "10px",
  },

  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("lg")]: {},
});

const cartitem4 = (theme) => ({
  width: "49%",
  padding: "10px 0px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: "10px",
  },

  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("lg")]: {},
});

const cartitem5 = (theme) => ({
  width: "24%",
  padding: "10px 0px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: "10px",
  },

  [theme.breakpoints.up("sm")]: {},
  [theme.breakpoints.up("lg")]: {},
});

const rfidpoints = [
  "Uses electromagnetic fields toautomatically identify and track tags attached to objects.",
  "An RFID system consists of a tiny radio transponder, a radio receiver and transmitter.",
  "When triggered by an electromagnetic interrogation pulse from a nearby RFID reader device, the tag transmits digital data, usually an identifying inventory number, back to the reader.",
  "This number can be used to track inventory goods. The tags contain electronically stored information.",
  "Passive tags collect energy from a nearby RFID reader's interrogating radio waves.",
  "We are using this RFID technology in E-Library, Animal Migration, Forest, Shopping malls.",
];

export default function SoftwareSolutions() {
  const BreadcrumbStyle = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
  }));
  return (
    <>
      <ScrollToTop bgColor="green" symbol="&#8593;" strokeFillColor="white" />
      <AppbarHead dataParent={{ appBtnText: "Contact" }} />
      <BreadcrumbStyle>
        <Card sx={{ width: 400, height: 50 }}>
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

              <Typography color="text.primary">SoftwareSolutions</Typography>
            </Breadcrumbs>
          </CardContent>
        </Card>
      </BreadcrumbStyle>

      <br />
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Root>
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="h4"
                style={{ borderBottom: "4px solid green" }}
              >
                Radio-frequency identification (RFID)
              </Typography>
            </div>
            <Divider></Divider>
            <br />
            {rfidpoints.map((text) => (
              <div style={{display:'flex',flexDirection:'row',justifyContent:'left',alignItems:'center'}} >
                <ArrowForwardIcon
                  fontSize="small"
                  style={{ verticalAlign: "middle", marginBottom: "5px",marginRight:"5px" }}
                />
                <Typography
                  variant="subtitle1"
                  style={{ textAlign: "justify" }}
                  gutterBottom
                >
                  {text}
                </Typography>
              </div>
            ))}
          </div>
          <br />

          {/* Netcom Projects */}

          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="h4"
                style={{ borderBottom: "4px solid green" }}
              >
                NETCOM PROJECTS
              </Typography>
            </div>
            <Divider></Divider>
            <br />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Card elevation={3} sx={cartitem1}>
                <div>
                  <Box
                    component="img"
                    sx={{ height: "250px", width: "100%" }}
                    alt="Second Image Place"
                    src={image7}
                  />
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    margin: "0px 20px",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    BOOKS MANAGEMENT IN LIBRARY:
                  </Typography>
                </div>

                <Typography
                  variant="body2"
                  style={{ textAlign: "justify", margin: "0px 20px" }}
                  gutterBottom
                >
                  Netcom have implemented E-Library Projects in Madurai, Trichy
                  and Coimbatore district libraries. We executed delivery,
                  Installation, RFID tagging and Integration in all these
                  libraries. The details of RFID Implementation are as follows{" "}
                </Typography>
              </Card>

              <Card elevation={3} sx={cartitem1}>
                <div>
                  <Box
                    component="img"
                    sx={{ height: "250px", width: "100%" }}
                    alt="Second Image Place"
                    src={image9}
                  />
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    margin: "0px 20px",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    RFID Tagging:
                  </Typography>
                </div>
                <Typography
                  variant="body2"
                  style={{ textAlign: "justify", margin: "0px 20px" }}
                  gutterBottom
                >
                  We have completed 4,50,000 books in tagging.
                </Typography>
              </Card>

              <Card elevation={3} sx={cartitem1}>
                <div>
                  <Box
                    component="img"
                    sx={{ height: "250px", width: "100%" }}
                    alt="Second Image Place"
                    src={image10}
                  />
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    margin: "0px 20px",
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Hand Held Reader:
                  </Typography>
                </div>
                <Typography
                  variant="body2"
                  style={{ textAlign: "justify", margin: "0px 20px" }}
                  gutterBottom
                >
                  We have installed the Hand held reader application which is
                  used to check the stocks and locate the scanned and missing
                  books.{" "}
                </Typography>
              </Card>
            </div>
            <br />

            {/* Development Software */}

            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  variant="h4"
                  style={{ borderBottom: "4px solid green" }}
                >
                  Development Software
                </Typography>
              </div>
              <Divider></Divider>
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "5px",
                }}
              >
                <Card elevation={3} sx={cartitem2}>
                  <div>
                    <Box
                      component="img"
                      sx={{ height: "250px", width: "100%" }}
                      alt="Second Image Place"
                      src={image1}
                    />
                  </div>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      margin: "0px 20px",
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Tagging Station:
                    </Typography>
                  </div>

                  <Typography
                    variant="body2"
                    style={{ textAlign: "justify", margin: "0px 20px" }}
                    gutterBottom
                  >
                    As part of RFID Project, the Tagging station application is
                    used to update the books to RFID database. This application
                    is used to read the RFID tag ID and the data's are stored in
                    the KOHA Server, there by entering access code we can fetch
                    the required books.{" "}
                  </Typography>
                </Card>

                <Card elevation={3} sx={cartitem2}>
                  <div>
                    <Box
                      component="img"
                      sx={{ height: "250px", width: "100%" }}
                      alt="Second Image Place"
                      src={image2}
                    />
                  </div>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      margin: "0px 20px",
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Circular Station :
                    </Typography>
                  </div>
                  <Typography
                    variant="body2"
                    style={{ textAlign: "justify", margin: "0px 20px" }}
                    gutterBottom
                  >
                    The Circular Station application helps to view the details
                    of the Users of the Library to issue / return the books and
                    renew the issue dates of the books borrowed by the members.
                  </Typography>
                </Card>

                <Card elevation={3} sx={cartitem2}>
                  <div>
                    <Box
                      component="img"
                      sx={{ height: "250px", width: "100%" }}
                      alt="Second Image Place"
                      src={image3}
                    />
                  </div>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      margin: "0px 20px",
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      OPAC (Kiosk Machine):
                    </Typography>
                  </div>
                  <Typography
                    variant="body2"
                    style={{ textAlign: "justify", margin: "0px 20px" }}
                    gutterBottom
                  >
                    Online Public Access Catalog (OPAC) is used by the library
                    members as search engine. The users can search / locate the
                    books by using this application. We have implemented the
                    OPAC in Kiosk machine for the users to be more accessible.{" "}
                  </Typography>
                </Card>
              </div>
            </div>
            <br />

            {/* RFID Server */}
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  variant="h4"
                  style={{ borderBottom: "4px solid green" }}
                >
                  RFID Server
                </Typography>
              </div>
              <Divider></Divider>
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "5px",
                }}
              >
                <Card elevation={3} sx={cartitem3}>
                  <div>
                    <Box
                      component="img"
                      sx={{ height: "250px", width: "100%" }}
                      alt="Second Image Place"
                      src={image11}
                    />
                  </div>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      margin: "0px 20px",
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Track Lib Server:
                    </Typography>
                  </div>

                  <Typography
                    variant="body2"
                    style={{ textAlign: "justify", margin: "0px 20px" }}
                    gutterBottom
                  >
                    Track Library Server plays a vital role and is an important
                    server of the RFID Project. The administration management is
                    been optimized here in the server and the application is
                    used for the following: User Management Work Stations
                    Tagging details Stock details Backup Server
                  </Typography>
                </Card>

                <Card elevation={3} sx={cartitem3}>
                  <div>
                    <Box
                      component="img"
                      sx={{ height: "250px", width: "100%" }}
                      alt="Second Image Place"
                      src={image12}
                    />
                  </div>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      margin: "0px 20px",
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Multisocket Server:
                    </Typography>
                  </div>
                  <Typography
                    variant="body2"
                    style={{ textAlign: "justify", margin: "0px 20px" }}
                    gutterBottom
                  >
                    The implementation of Multi socket Server serves has
                    connector to connect all the implementation software and the
                    database.
                  </Typography>
                </Card>

                <Card elevation={3} sx={cartitem3}>
                  <div>
                    <Box
                      component="img"
                      sx={{ height: "250px", width: "100%" }}
                      alt="Second Image Place"
                      src={image13}
                    />
                  </div>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      margin: "0px 20px",
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      Anti-Theft Gate:
                    </Typography>
                  </div>
                  <Typography
                    variant="body2"
                    style={{ textAlign: "justify", margin: "0px 20px" }}
                    gutterBottom
                  >
                    The Anti-The Gate is used to monitor the entry / exit
                    passage of the members. As the name depicts, books will not
                    be allowed to carry out from the library premises without
                    permission of the librarian, during which a message with a
                    beep sound and red light alerts the Library officials. The
                    Library members get the permission to borrow books when the
                    green indicator blinks after reading the RFID tag
                    confirmation. This device can read 100 books within a
                    distance of 5metres.
                  </Typography>
                </Card>
              </div>
            </div>
            <br />

            {/* NETCOM RFID SOLUTIONS */}
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  variant="h4"
                  style={{ borderBottom: "4px solid green" }}
                >
                  NETCOM RFID SOLUTIONS
                </Typography>
              </div>
              <Divider></Divider>
              <br />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "15px",
                }}
              >
                <Card elevation={5} sx={cartitem4}>
                  <div style={{ display: "flex" }}>
                    <Typography
                      variant="h6"
                      style={{
                        margin: "0px 20px",
                        borderBottom: "2px solid green",
                      }}
                    >
                      ANIMAL MIGRATION
                    </Typography>
                  </div>
                  <br />
                  <Typography
                    variant="body2"
                    style={{ textAlign: "justify", margin: "0px 20px" }}
                    gutterBottom
                  >
                    Netcom RFID in Animal Migration is the great potential for
                    Radio Frequency Identification (RFID) technology to benefit
                    the study ofbirds and other wildlife, the cost of RFID
                    systems can be prohibitive to those with a very
                    modestresearch budget. To those researchers, we offer our
                    design for a RFID data logging system that can be used in
                    association with birdfeeders, nest boxes, or anywhere birds
                    may congregate, to monitor the activity of individual birds
                    bearing RFID tags. Radio tracking involves attaching a small
                    radio transmitter to the animal.This can track the locations
                    and movement of the tagged animals without recapturing them
                    using this RFID technology. RFID ear tags provide superior
                    solutions for animal identification, independent of the
                    field of application and the size of the animal. For
                    livestock, animal identification is necessary for
                    guaranteeing food chain security and food traceability. RFID
                    tags for animals represent one of the uses of RFID. RFID has
                    become crucial in animal identification management. An
                    implantable RFID tag or transponder can also be used for
                    animal identification.{" "}
                  </Typography>
                </Card>

                <Card elevation={5} sx={cartitem4}>
                  <div style={{ display: "flex" }}>
                    <Typography
                      variant="h6"
                      style={{
                        margin: "0px 20px",
                        borderBottom: "2px solid green",
                      }}
                    >
                      SHOPPING MALLS
                    </Typography>
                  </div>
                  <br />
                  <Typography
                    variant="body2"
                    style={{ textAlign: "justify", margin: " 0px 20px" }}
                    gutterBottom
                  >
                    NETCOM project is based on RFID technology used for uniquely
                    identifying and handling various products in a Shopping
                    mall. The software system is made for thebilling counters
                    with the help of which tracing and billing is made fast and
                    easy. Each individual product is uniquely identified and
                    classified based on its RFID. This is an RFID tag that is
                    attached to the product s that it can be easily scanned and
                    even related data can be entered into the system. The system
                    allows for fast and easy billing procedure. The RFID tag
                    when scanned, allows the billing person to get product
                    specific data into the database and then also sum up the
                    product prices in order to generate the final bill for a
                    customer. The system then stores all these bills generated
                    in its database for further reference. The system provides
                    specific reports of sales along with products.
                    Implementation of RFID in supermarkets allows customers to
                    obtain information about the goods they collect when they
                    are doing the shopping. In Shopping Malls, RFID technology
                    can help retailers manage and track inventory. This enables
                    the consumers satisfaction, reducing time requirement for
                    payment and also the manpower required at markets or malls
                    by instantly payoff their entire purchase upon arrival at
                    the payment counter, increasing customer. These RFID tags to
                    automate the checkout process by building a system that
                    could read the RFID signals of all the objects that would be
                    placed in proximity to an antenna platform. This eliminates
                    the need for barcode scanning of each individual item,
                    making checkout a significantly faster experience. The tags
                    are little in size and so it can be easily pasted on
                    products.
                  </Typography>
                </Card>

                <Card elevation={5} sx={cartitem4}>
                  <div style={{ display: "flex" }}>
                    <Typography
                      variant="h6"
                      style={{
                        margin: "0px 20px",
                        borderBottom: "2px solid green",
                      }}
                    >
                      SOFTWARE DEVELOPMENT
                    </Typography>
                  </div>
                  <br />
                  <Typography
                    variant="body2"
                    style={{ textAlign: "justify", margin: "0px 20px" }}
                    gutterBottom
                  >
                    Netcom Computer provides software product and application
                    development solutions to large established companies as well
                    as startups. All services include product visualization,
                    prototyping, design, implementation, maintenance and
                    customer support. Our Motto is to Develop and implement
                    software solutions to stream line and automate business
                    processes to provide optimal, sustainable and scalable
                    technology solutions to minimize risk with greater
                    accessibility to key business functions across spectrum of
                    technology platforms We have the extensive expertise,
                    experience and resources to develop web applications and
                    customized software solutions. We provide web solutions with
                    totally focus and plan on software development as per client
                    requirement with minimal cost as per the global market. Our
                    motto is high professional quality of work hence our path is
                    growth in performance with effective in work. We focus in
                    providing innovate and high superiority solutions to help
                    our clients in advance an edge over their business
                    competitors. We include a wide range of solutions from web
                    solutions, desktop to Mobile solutions. We deliver high
                    quality solutions at spirited cost bringing cost efficiency
                    to the client organization. Our software development experts
                    gain a strong understand your idea, target users, and
                    monetization strategy before offering you a wide range of
                    software solutions.We improve business agility and
                    efficiency by building cutting-edge mobile and web software
                    solutions{" "}
                  </Typography>
                </Card>

                <Card elevation={5} sx={cartitem4}>
                  <div style={{ display: "flex" }}>
                    <Typography
                      variant="h6"
                      style={{
                        margin: "0px 20px",
                        borderBottom: "2px solid green",
                      }}
                    >
                      NETCOM PROJECT
                    </Typography>
                  </div>
                  <br />
                  <Typography
                    variant="subtitle2"
                    style={{ textAlign: "justify", margin: "0px 20px" }}
                    gutterBottom
                  >
                    Trade Mark Search Engine Project – MIT – Anna University{" "}
                  </Typography>
                  <br />
                  <Typography
                    variant="body2"
                    style={{ textAlign: "justify", margin: "0px 20px" }}
                    gutterBottom
                  >
                    We have developed Trade Mark Search Engine Project for Anna
                    University, Coimbatore. A Trademark search engine database
                    is created which updates the database and alter the damaged
                    trademark images. The characters, symbols, leer and whatever
                    seen in the image should be classified according to Vienna
                    Classification and stored as data in SQL Server database
                    along the corresponding fields. The image should also be
                    stored in separate folder and should be linked to database.
                    The Vienna Classification is the Table of 29 categories and
                    divisions with explanatory notes about the symbols and leers
                    seen in the image.{" "}
                  </Typography>
                </Card>
              </div>
            </div>

            <br />

            <Typography
              variant="subtitle2"
              style={{ textAlign: "justify", margin: "0px 20px" }}
              gutterBottom
            >
              How do we work?
            </Typography>

            {/* METHODOLOGIES  */}
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  variant="h4"
                  style={{ borderBottom: "4px solid green" }}
                >
                  METHODOLOGIES
                </Typography>
              </div>
              <Divider></Divider>
              <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "15px",
                }}
              >
                <Card elevation={5} sx={cartitem5}>
                  <div>
                    <Box
                      component="img"
                      sx={{ height: "250px", width: "100%" }}
                      alt="Second Image Place"
                      src={image5}
                    />
                  </div>
                  <br />
                  <Typography variant="h6" style={{ margin: "0px 20px" }}>
                    Project Methodologies:
                  </Typography>
                  <br />
                  <Typography
                    variant="body2"
                    style={{ textAlign: "justify", margin: "0px 20px" }}
                    gutterBottom
                  >
                    We strongly believe in agile work processes and implement
                    weekly scrum during the project lifecycle in close
                    coordination with our clients.{" "}
                  </Typography>
                </Card>
                <Card elevation={5} sx={cartitem5}>
                  <div>
                    <Box
                      component="img"
                      sx={{ height: "250px", width: "100%" }}
                      alt="Second Image Place"
                      src={image4}
                    />
                  </div>
                  <br />
                  <Typography variant="h6" style={{ margin: "0px 20px" }}>
                    Communication:
                  </Typography>
                  <br />
                  <Typography
                    variant="body2"
                    style={{ textAlign: "justify", margin: " 0px 20px" }}
                    gutterBottom
                  >
                    We always keep our clients communicated through our daily
                    status reports and weekly stakeholders meetings thus making
                    it sure that all concerned entities reflect on the same
                    page. Our project team is directly accessible to our clients
                    through email, calls etc.
                  </Typography>
                </Card>

                <Card elevation={5} sx={cartitem5}>
                  <div>
                    <Box
                      component="img"
                      sx={{ height: "250px", width: "100%" }}
                      alt="Second Image Place"
                      src={image6}
                    />
                  </div>
                  <br />
                  <Typography variant="h6" style={{ margin: "0px 20px" }}>
                    Quality:
                  </Typography>
                  <br />
                  <Typography
                    variant="body2"
                    style={{ textAlign: "justify", margin: "0px 20px" }}
                    gutterBottom
                  >
                    We have an extensive quality management system, wherein we
                    dedicated Quality Analysts to the projects undertaken. Our
                    quality team works as an independent unit and makes sure
                    that the deliverables meet clients’ satisfaction.{" "}
                  </Typography>
                </Card>

                <Card elevation={5} sx={cartitem5}>
                  <div>
                    <Box
                      component="img"
                      sx={{ height: "250px", width: "100%" }}
                      alt="Second Image Place"
                      src={image7}
                    />
                  </div>
                  <br />
                  <Typography variant="h6" style={{ margin: "0px 20px" }}>
                    Transparency:
                  </Typography>
                  <br />
                  <Typography
                    variant="body2"
                    style={{ textAlign: "justify", margin: "0px 20px" }}
                    gutterBottom
                  >
                    We utilize industry focused project management tools and
                    version controllers, allowing direct access to our clients.
                  </Typography>
                </Card>
              </div>
            </div>
            <br />
          </div>
        </Root>
      </div>
    </>
  );
}
