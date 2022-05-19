import React from "react";
import { render } from "react-dom";
//import Button from "@material-ui/core/Button";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

import MenuIcon from "@mui/icons-material/Menu";

const App = () => {
  const [open, setOpen] = React.useState(false);
  const handleOnClose = () => {
    setOpen(false);
  };
  const handleButtonClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Button
        onClick={handleButtonClick}
        sx={{
          width: "270px",
          height: "270px",
          borderRadius: "50% !important"
        }}
        color="success"
        variant="contained"
      >
        <MenuIcon
          sx={{
            width: "90% !important",
            height: "90% !important"
          }}
        />
      </Button>
      <Drawer
        transitionDuration={{ enter: 400, exit: 400 }}
        anchor="right"
        open={open}
        onClose={handleOnClose}
      >
        {
          <Box sx={{ width: "300px", padding: "20px" }}>
            Salam1
            <hr />
            Salam2
            <hr />
            Salam3
          </Box>
        }
      </Drawer>
    </>
  );
};

render(<App />, document.getElementById("root"));
