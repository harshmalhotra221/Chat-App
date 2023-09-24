import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  Timeline,
} from "./MsgTypes";

const Message = ({ menu, ChangebackgroundColor }) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              // Timeline
              return <Timeline el={el} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  // img msg
                  return (
                    <MediaMsg
                      el={el}
                      menu={menu}
                      ChangebackgroundColor={ChangebackgroundColor}
                    />
                  );
                  break;
                case "doc":
                  // Doc msg
                  return (
                    <DocMsg
                      el={el}
                      menu={menu}
                      ChangebackgroundColor={ChangebackgroundColor}
                    />
                  );
                  break;
                case "link":
                  // link msg
                  return (
                    <LinkMsg
                      el={el}
                      menu={menu}
                      ChangebackgroundColor={ChangebackgroundColor}
                    />
                  );
                  break;
                case "reply":
                  // reply msg
                  return (
                    <ReplyMsg
                      el={el}
                      menu={menu}
                      ChangebackgroundColor={ChangebackgroundColor}
                    />
                  );
                  break;

                default:
                  // text msg
                  return (
                    <TextMsg
                      el={el}
                      menu={menu}
                      ChangebackgroundColor={ChangebackgroundColor}
                    />
                  );
                  break;
              }
              break;
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
