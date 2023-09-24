import {
  Box,
  Typography,
  Stack,
  Avatar,
  Badge,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { faker } from "@faker-js/faker";
import StyledBadge from "./StyledBadge";
import {
  ArrowDownLeft,
  ArrowDownRight,
  ArrowUpRight,
  Phone,
} from "phosphor-react";

const CallLogElement = ({ online, incoming, missed }) => {
  const theme = useTheme();

  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.paper,
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
          {online ? (
            <Stack>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  src={faker.image.avatar()}
                  alt={faker.name.fullName()}
                />
              </StyledBadge>
            </Stack>
          ) : (
            <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
            {/* <Typography variant="caption">{msg}</Typography> */}
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              {incoming ? (
                <ArrowDownLeft color={missed ? "red" : "green"} />
              ) : (
                <ArrowUpRight color={missed ? "red" : "green"} />
              )}
              <Typography variant="caption">Yesterday 21:24</Typography>
            </Stack>
          </Stack>
        </Stack>
        <IconButton>
          <Phone color="green" />
        </IconButton>
      </Stack>
    </Box>
  );
};

const CallElement = () => {
  return <></>;
};
export { CallElement, CallLogElement };
