import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AssignmentIcon from "@material-ui/icons/Assignment";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const drawerWidth = 240;
const [open, setOpen] = React.useState(true),

const handleClick = () => {
  setOpen(!open);
};
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
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
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
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { disOpen } = context;
        const { toggledisOpen } = context;
        console.log(toggledisOpen);
        console.log(disOpen);
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
                <Typography variant="h6" noWrap>
                  Desi Tadka
                </Typography>
                <ExitToAppIcon
                  className={disOpen ? classes.exit1 : classes.exit2}
                />
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
              <Divider />
              <List>
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                  <ListItem>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                  </ListItem>
                </Link>
                <Divider />
                <ListItem>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
            <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
                <ListItem>
                  <ListItemIcon>
                    <MenuBookIcon />
                  </ListItemIcon>
                  <ListItemText>MenuBook</ListItemText>
                </ListItem>
              </List>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText>Orders</ListItemText>
              </ListItem>
              <Divider />

              <ListItem>
                <ListItemIcon>
                  <FormatListBulletedIcon />
                </ListItemIcon>
                <ListItemText>Restaurant List</ListItemText>
              </ListItem>
              <Divider />

              <ListItem>
                <ListItemIcon>
                  <InsertDriveFileIcon />
                </ListItemIcon>
                <ListItemText>Invoice</ListItemText>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <AccountBalanceIcon />
                </ListItemIcon>
                <ListItemText>Sales</ListItemText>
              </ListItem>
            </Drawer>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}
export default Navbar;
