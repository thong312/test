import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
  },
  ul: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  li: {
    marginLeft: theme.spacing(2),
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <nav>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </li>
          <li className={classes.li}>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </li>
          <li className={classes.li}>
            <Link to="/news" className={classes.link}>
              News
            </Link>
          </li>
          <li className={classes.li}>
            <Link to="/about-us" className={classes.link}>
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;



