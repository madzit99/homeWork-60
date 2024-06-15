import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { MessageType } from "../types";

const initialState: MessageType = {
  author: "",
  message: "",
  datetime: "",
};

const ChatForm = () => {
  const [message, setMessage] = useState<MessageType>(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setMessage((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    console.log(message);
  };

  return (
    <Box component="form" onSubmit={onSubmit}>
      <Grid container spacing={2} direction="column">
        <Grid item xs>
          <TextField
            value={message.message}
            fullWidth
            multiline
            rows={3}
            id="message"
            label="Введите сообщение"
            name="message"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs>
          <TextField
            value={message.author}
            fullWidth
            id="author"
            label="Введите имя"
            name="author"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs>
          <Button variant="contained" type="submit">Отправить</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatForm;
