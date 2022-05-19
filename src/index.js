import React from "react";
import { render } from "react-dom";
import { makeStyles } from "@mui/styles";
//import Button from "@material-ui/core/Button";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles((theme) => ({
  largeIcon: {
    width: "50px",
    height: "50px"
  },
  RoundedButton: {
    width: "170px",
    height: "170px",
    borderRadius: "50%",
    backgroundColor: "transparent"
  }
}));
const App = () => {
  const classes = useStyles();
  return (
    <>
      <Button
        RoundedButton
        variant="primary"
        color="primary"
        className={classes.RoundedButton}
      >
        <MenuIcon color="primary" className={classes.largeIcon} />
      </Button>

      <Box sx={{ borderRadius: "50%" }}>ddd123</Box>
    </>
  );
};

render(<App />, document.getElementById("root"));
