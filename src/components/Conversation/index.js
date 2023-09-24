import React from "react";

import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";
import "../../CSS/Conversationindex.css";

const Conversation = () => {
  const theme = useTheme();

  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* Chat Header */}
      <Header />
      {/* Msg */}
      <Box
        className={
          theme.palette.mode === "light"
            ? "MsgBoxContainerforLightMode"
            : "MsgBoxContainerforDarkMode"
        }
        width={"100%"}
        sx={{ flexGrow: 1, height: "100%" }}
      >
        <Message menu={true} />
      </Box>
      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
