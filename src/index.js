import React from "react";
import { render } from "react-dom";
//import Button from "@material-ui/core/Button";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import MenuIcon from "@mui/icons-material/Menu";

const App = () => {
  return (
    <>
      <Button sx={{width: "170px",height: "170px",borderRadius: "50%",backgroundColor: "transparent"}}
        RoundedButton
        variant="primary"
        color="primary"
        
      >
        <MenuIcon color="primary" sx={{ width: "50px", height: "50px" }} />
      </Button>

      <Box sx={{ borderRadius: "50%" }}>ddd1234</Box>
    </>
  );
};

render(<App />, document.getElementById("root"));
