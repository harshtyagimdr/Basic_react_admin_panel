import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import GroupIcon from "@material-ui/icons/Group";
import GroupWorkIcon from "@material-ui/icons/GroupWork";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PublishIcon from "@material-ui/icons/Publish";
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import UserProfileIcon from "../../img/avatar-1.png";
import CardMedia from "@material-ui/core/CardMedia"
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from "@material-ui/core/Chip";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  exit1: {
    marginLeft: "400px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "100px",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "400px",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "400px",
    },
  },
  exit2: {
    marginLeft: "800px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "100px",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "400px",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "800px",
    },
  },
  navbarLogo: {
    borderRadius: '50%',
    lineHeight: '48px',
    padding: '8px 3px 11px 0px',
    color: 'white',
    fontSize: '24px',
    fontWeight: '100',
    letterSpacing: '-6px',
    background: 'linearGradient(#e94d16 46%, #019fe4 0%) !important',
  },
  companyName: {
    [theme.breakpoints.down("xs")]: {
      display:'none'
    }
  },
  link: {
    textDecoration: "none",
    color:'black'
  }
}));

const Navbar=(props)=> {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openTeam, setOpenTeam] = React.useState(false);
  const [openIncome, setOpenIncome] = React.useState(false);
  
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleTeam = () => {
    setOpenTeam(!openTeam);
  };
  const handleIncome = () => {
    setOpenIncome(!openIncome);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const logout = () => {
    props.logout();
    window.location.href="/";
  }



  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { disOpen } = context;
        const { toggledisOpen } = context;
        return (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => {
                    handleDrawerOpen();
                    toggledisOpen();
                  }}
                  edge="start"
                  className={clsx(classes.menuButton, {
                    [classes.hide]: open,
                  })}
                >
                  <MenuIcon />
                </IconButton>
                <div style={{overflowY:'hidden', paddingBottom:'1px', marginBottom:'2px'}}>
                  <b className={classes.navbarLogo + " companyLogo no-select"}>
                    <div
                      style={{
                        transform: "translateY(-4px)",
                        display: "inline-block",
                        marginRight: "6px",
                      }}
                    >
                      _
                    </div>
                    <div
                      style={{
                        transform: "translateY(8px) rotate(-9deg)",
                        display: "inline-block",
                        marginRight: "2px",
                      }}
                    >
                      v
                    </div>
                    M
                    <div
                      style={{
                        transform: "translateY(7px) rotate(9deg)",
                        display: "inline-block",
                        marginLeft: "2.20px",
                      }}
                    >
                      v
                    </div>
                    <div
                      style={{
                        transform: "translateY(-4px)",
                        display: "inline-block",
                        marginLeft: "6px",
                      }}
                    >
                      _
                    </div>
                  </b>
                </div>
                &nbsp;
                <Typography variant="h6" className={classes.companyName}>
                  Harroxx
                </Typography>

                <Divider orientation="vertical" flexItem style={{marginLeft:'auto', backgroundColor:'#4051b5'}} />
                <Link style={{width:'45px', color:'white'}} title="Notifications">
                <Grid item >
                  <NotificationsIcon/>
                </Grid>
                </Link>
                <Divider orientation="vertical" flexItem style={{backgroundColor:'#4051b5'}}/>
                

              </Toolbar>
            </AppBar>

            <Drawer
              variant="permanent"
              className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              })}
              classes={{
                paper: clsx({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                }),
              }}
            >
              <div className={classes.toolbar}>
                <IconButton
                  onClick={() => {
                    handleDrawerClose();
                    toggledisOpen();
                  }}
                >
                  {theme.direction === "rtl" ? (
                    <ChevronRightIcon />
                  ) : (
                    <>
                      <ChevronLeftIcon />
                    </>
                  )}
                </IconButton>
              </div>
              <Divider style={{ height: "2px" }} />
              <List>
                <ListItem style={{justifyContent:'center', flexDirection:'column'}}>
                  <ListItemIcon style={{justifyContent:'center'}}>
                  <CardMedia
                      style={{width:disOpen? '120px' : '50px', borderRadius:'50%'}}
                      component="img"
                      alt="Contemplative Reptile"
                      height={disOpen ? '120' : '50'}
                      image={UserProfileIcon}
                      title="Profile"
                    ></CardMedia>
                  </ListItemIcon>
                  {
                    disOpen ? (
                      <React.Fragment>
                        <Typography variant="subtitle1" style={{fontWeight:'bold'}}>Hi! Harsh Tyagi</Typography>
                        <Typography variant="body1">(ID: 3241485)</Typography>
                      </React.Fragment>
                    ) : ''
                  }
                </ListItem>
                <Divider style={{ height: "2px" }} />
                <Link to="/dashboard" title="Dashboard" className={classes.link}>
                  <ListItem>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                  </ListItem>
                </Link>
                <Divider style={{ height: "2px" }} />
                <Link to="/" title="KYC" className={classes.link}>
                  <ListItem>
                    <ListItemIcon>
                      <FingerprintIcon />
                    </ListItemIcon>
                    <ListItemText>KYC</ListItemText>
                  </ListItem>
                </Link>
                <Divider style={{ height: "2px" }} />
                <ListItem button onClick={handleTeam} title="Team">
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText>Team</ListItemText>
                  {openTeam ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Divider />
                <Collapse in={openTeam} timeout="auto" unmountOnExit style={{backgroundColor:'aliceblue'}}>
                  <List component="div" disablePadding>
                    <Link to="/" className={classes.link}>
                      <ListItem button className={classes.nested} title="My Team">
                        <ListItemIcon>
                          <SupervisedUserCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary=" My Team" />
                      </ListItem>
                    </Link>
                    <Divider variant="inset" />
                    <Link to="/" className={classes.link}>
                      <ListItem button className={classes.nested} title="My Upgraded Team">
                        <ListItemIcon>
                          <AssignmentIndIcon />
                        </ListItemIcon>
                        <ListItemText primary="My Upgraded Team" />
                      </ListItem>
                    </Link>
                    <Divider variant="inset" />
                    <Link to="/" className={classes.link}>
                      <ListItem button className={classes.nested} title="My Total Team">
                        <ListItemIcon>
                          <GroupWorkIcon />
                        </ListItemIcon>
                        <ListItemText primary="My Total Team" />
                      </ListItem>
                    </Link>
                    <Divider variant="inset" />
                    <Link to="/" className={classes.link}>
                      <ListItem button className={classes.nested} title="My Team Task">
                        <ListItemIcon>
                          <AssignmentTurnedInIcon />
                        </ListItemIcon>
                        <ListItemText primary="My Team Task" />
                      </ListItem>
                    </Link>
                  </List>
                </Collapse>

                <Divider style={{ height: "2px" }} />
                <ListItem button onClick={handleIncome} title="Income">
                  <ListItemIcon>
                    <AccountBalanceIcon />
                  </ListItemIcon>
                  <ListItemText>Income</ListItemText>
                  {openIncome ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Divider />
                <Collapse in={openIncome} timeout="auto" unmountOnExit style={{backgroundColor:'aliceblue'}}>
                  <List component="div" disablePadding>
                    <Link to="/" className={classes.link}>
                      <ListItem button className={classes.nested} title="Income Detail">
                        <ListItemIcon>
                          <MenuBookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Income Detail" />
                      </ListItem>
                    </Link>
                    <Divider variant="inset" />

                    <Link to="/" className={classes.link}>
                      <ListItem button className={classes.nested} title="Income Summary">
                        <ListItemIcon>
                          <FormatListBulletedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Income Summary" />
                      </ListItem>
                    </Link>

                  </List>
                </Collapse>
                <Divider style={{ height: "2px" }} />
                <Link to="/" className={classes.link} title="Upgrade">
                  <ListItem title="Upgrade">
                    <ListItemIcon>
                      <PublishIcon />
                    </ListItemIcon>
                    <ListItemText>Upgrade</ListItemText>
                  </ListItem>
                </Link>
                <Divider style={{ height: "2px" }} />
                <Link to="/" className={classes.link}>
                  <ListItem>
                    <ListItemIcon>
                      <CreditCardIcon />
                    </ListItemIcon>
                    <ListItemText>Withdraw</ListItemText>
                  </ListItem>
                </Link>

                <Divider style={{ height: "2px" }} />
                <Link to="/" className={classes.link}>
                  <ListItem title="Earn More">
                    <ListItemIcon>
                      <MonetizationOnIcon />
                    </ListItemIcon>
                    <ListItemText>Earn More</ListItemText>
                  </ListItem>
                </Link>
                <Divider style={{ height: "2px" }} />
                <a onClick={()=>logout()} style={{"cursor": "pointer"}} className={classes.link}>
                  <ListItem title="Logout">
                    <ListItemIcon>
                      <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                  </ListItem>
                </a>
              </List>
            </Drawer>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
 export default Navbar;
