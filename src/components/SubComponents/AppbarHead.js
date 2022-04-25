import { React, useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import logo from "../../images/logo/Logo.png";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Colors from "../../constants/Colors";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import { borderBottom } from "@mui/system";

export default function AppbarHead(props) {
  const navigate = useNavigate();
  const [dataFromParents] = useState(props.dataParent);
  const menuItemStyle = (theme) => ({

    
    margin:'2%',

    '&:focus':{
      backgroundColor:'white'
    },
    
    "&:hover": {
      // backgroundColor: "green",
      color:'white',
      borderRadius: '10px',
      background: '#2f9836',
      boxShadow: `inset 5px 5px 8px #226f27,
                  inset -1px -1px 8px #3cc145`
    },
    transition:'0.3s'
  });

  const menuIconStyle = () => ({
    color: Colors.MAIN_COLOR,
    display: { lg: "none", xl: "none" },
  });

  const menuStyle = (text) => ({        
    color: dataFromParents.appBtnText === text ? Colors.MAIN_COLOR : "black",
    textTransform: "capitalize",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "white",
      color: Colors.MAIN_COLOR,
    },
    display: { xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" },
    marginLeft: { md: 2 },
    marginRight: { md: 2 },
    // [theme.breakpoints.down("md")]: {
    //   display: "none",
    // },

    // [theme.breakpoints.up("md")]: {

    //   marginLeft: 2,
    //   marginRight: 2,
    // },
  });

  const menuToolBarStyle = (theme) => ({
    backgroundColor: "white",

    [theme.breakpoints.down("md")]: {
      paddingLeft: "5%",
      paddingRight: "5%",
    },
    [theme.breakpoints.up("xl")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
       
    },
  });
  const [open, setopen] = useState(false);

  const [project, setproject] = useState(null);

  const menuItem = [
    {
      menutitle: "Home",
      link: "/",
    },
    {
      menutitle: "About Us",
      link: "/about",
    },
    {
      menutitle: "Projects",
      link: "",
    },
    {
      menutitle: "Products",
      link: "",
    },
    {
      menutitle: "Services",
      link: "",
    },
    {
      menutitle: "Portfolio",
      link: "/portfolio",
    },
    {
      menutitle: "Career",
      link: "/carrer",
    },
    {
      menutitle: "Contact",
      link: "/contact",
    },
  ];

  const projectsItem = [
    {
      subMenuName: "Smart Class Room",
      subMenuLink: "/smart-class",
    },

    {
      subMenuName: "EMIS Software Solutions",
      subMenuLink: "/emis-sofware-solutions",
    },
    {
      subMenuName: "Language Lab",
      subMenuLink: "/language-lab",
    },
    {
      subMenuName: "Call Soft",
      subMenuLink: "/call-soft-project",
    },
    {
      subMenuName: "Assessment",
      subMenuLink: "/assessment-project",
    },
    {
      subMenuName: "Skill Development & Training",
      subMenuLink: "/skill-develoment-&-training",
    },{
      subMenuName:"ICT/Hi-Tech Lab",
      subMenuLink:"/ict"
    },
    {
      subMenuName:"E-Content Development",
      subMenuLink:"/e-content-development"
    },
   
    {
      subMenuName: "Kiosk Projects",
      subMenuLink: "/kiosk-project",
    },
    {
      subMenuName: "RFID Solutions",
      subMenuLink: "/software-solution",
    },
  ];

  const productItem = [
    { subMenuName: "Smart Tailor Shop", subMenuLink: "/smart-tailor-shop" },
    { subMenuName: "Online Cab Booking System", subMenuLink: "/online-cab-booking-system" },
    { subMenuName: "EMIS", subMenuLink: "/product-emis" },
    { subMenuName: "Educational Mobile App(Gilgal)", subMenuLink: "/educational-mobile-app" },
    {
      subMenuName: "Assessment Tool",
      subMenuLink: "/product-assessment-tool",
    },
  ];

  const servicesItem = [
    { subMenuName: "Short Film", subMenuLink: "" },
    { subMenuName: "Desktop Applications", subMenuLink: "" },
    { subMenuName: "Mobile Applications", subMenuLink: "" },
    { subMenuName: "Service Maintenance and Management", subMenuLink: "" },
    { subMenuName: "Cloud Storage Management", subMenuLink: "" },
    { subMenuName: "Customized Software Development", subMenuLink: "" },
  ];

  const [mySubMenu, setMySubMenu] = useState([]);

  console.log(mySubMenu);

  const handleClick = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(!open);
  };

  const handleChangeMenu = (text, e, tt) => {
    for (let index = 0; index < tt.length; index++) {
      if (tt[index].menutitle === text.menutitle && tt[index].link !== "") {
        navigate(tt[index].link);
        setopen(false);
      } else {
        handleHover(text, e);
      }
    }
  };

  const handleHover = (text, e) => {
    console.log({ text });

    if (text.menutitle === "Projects") {
      console.log(text);
      setMySubMenu(projectsItem);
      console.log(e.currentTarget);
      setproject(e.currentTarget);
    } else if (text.menutitle === "Products") {
      setMySubMenu(productItem);
      setproject(e.currentTarget);
    } else if (text.menutitle === "Services") {
      console.log(text);
      setMySubMenu(servicesItem);
      setproject(e.currentTarget);
    } else if (
      text.menutitle === "Home" ||
      text.menutitle === "About Us" ||
      text.menutitle === "Portfolio" ||
      text.menutitle === "Career" ||
      text.menutitle === "Contact"
    ) {
      setproject(null);
    }
  };

  const handleHoverMI = (text, e) => {
    console.log({ text });

    if (text.menutitle === "Projects") {
      console.log(text);
      setMySubMenu(projectsItem);
      console.log(e.currentTarget);
    } else if (text.menutitle === "Products") {
      setMySubMenu(productItem);
    } else if (text.menutitle === "Services") {
      console.log(text);
      setMySubMenu(servicesItem);
    } else if (
      text.menutitle === "Home" ||
      text.menutitle === "About Us" ||
      text.menutitle === "Portfolio" ||
      text.menutitle === "Career" ||
      text.menutitle === "Contact"
    ) {
      setproject(null);
    }
  };

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClickSubmenu = (text, ls) => {
    for (let index = 0; index < ls.length; index++) {
      if (ls[index].subMenuName === text.subMenuName) {
        navigate(ls[index].subMenuLink);
        setproject(null);
        setopen(false);
        setExpanded(false);
        break;
      }
    }
  };

  const TypographyStyle1 = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("md")]: {
      width: "92vw",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "60vw",
    },
    [theme.breakpoints.up("md")]: {
      width: "60vw",
    },
    [theme.breakpoints.up("lg")]: {
      width: "75vw",
    },
  }));

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar sx={menuToolBarStyle}>
          <div style={{ flex: 1 }}>
            <img src={logo} height="100px" />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",              
            }}
          >
            {menuItem.map((text) => (
              <Button
                disableRipple
                size="large"
                style={{whiteSpace:'nowrap'}}
                sx={() => menuStyle(text.menutitle)}
                onClick={(e) => handleChangeMenu(text, e, menuItem)}
                onMouseOver={(e) => handleHover(text, e)}
              >
                {text.menutitle}
                {text.menutitle === "Projects" ||
                text.menutitle === "Services" ||
                text.menutitle === "Products" ? (
                  <ArrowDropDownIcon />
                ) : null}
              </Button>
            ))}
            <Menu
              style={{ zIndex: 1, marginTop: "25px"}}
              transitionDuration={700}
              anchorEl={project}
              open={Boolean(project)}
              onMouseLeave={() => {
                setproject(null);
              }}
              onClose={() => {
                setproject(null);
              }}
              MenuListProps={{
                onMouseLeave: () => {
                  setproject(null);
                },
              }}
            >
              {mySubMenu.map((text) => (
                <MenuItem
                  sx={menuItemStyle}
                  onClick={(e) => {
                    handleClickSubmenu(text, mySubMenu);
                  }}
                >
                  {text.subMenuName}
                </MenuItem>
              ))}
            </Menu>
          </div>

          <div>
            <IconButton size="small" sx={menuIconStyle} onClick={handleClick}>
              <MenuIcon />
            </IconButton>

            <Drawer anchor="top" open={open} onClose={handleClose}>
              {menuItem.map((data, i) =>
                data.link === "" ? (
                  <Accordion                  
                    expanded={expanded === i}
                    onChange={handleChange(i)}
                    onClick={(e) => handleHoverMI(data, e)}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography sx={{ width: "33%", flexShrink: 0 }}>
                        {data.menutitle}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {mySubMenu.map((text) => (
                        <ListItem button>
                          <ListItemText
                            primary={text.subMenuName}
                            onClick={(e) => {
                              handleClickSubmenu(text, mySubMenu);
                            }}
                          />
                        </ListItem>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  <ListItem button sx={{ borderBottom: "1px solid #ddd"}}>
                    <ListItemText 
                      primary={data.menutitle}
                      onClick={(e) => handleChangeMenu(data, e, menuItem)}
                    />
                  </ListItem>
                )
              )}
            </Drawer>

            {/* <Menu
              open={open}
              onClose={handleClose}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              style={{ marginTop: 100 }}
            >
              {" "}
              {menuItem.map((text) => (
                <MenuItem onClick={(e) => handleChangeMenu(text,e,menuItem)}>{text.menutitle}</MenuItem>
              ))}{" "}
            </Menu> */}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
