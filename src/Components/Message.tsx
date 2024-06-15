import React from "react";
import { MessageType } from "../types";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

const Message: React.FC<MessageType> = ({ author, message, datetime }) => {
  return (
    <Grid item xs>
      <Card sx={{width: "100%"}}>
        <CardHeader sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4">{author}</Typography>
          <Typography variant="h6">{datetime}</Typography>
        </CardHeader>
        <CardContent>
          <Typography variant="h6">{message}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Message;
