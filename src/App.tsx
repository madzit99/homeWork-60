import { Container, Grid } from "@mui/material";
import ChatForm from "./Components/ChatForm";
import Messages from "./Components/Messages";
import { useEffect, useState } from "react";
import { MessageType } from "./types";
import axios from "axios";

const App = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const fetchMessages = async () => {
    const response = await axios.get('http://146.185.154.90:8000/messages');
    setMessages(response.data);
  }

  useEffect(() => {
    fetchMessages();
  }, []);



  return (
    <Container maxWidth="md">
      <Grid container direction="column">
        <Grid item xs={9}>
          <Messages messages={messages}/>
        </Grid>
        <Grid item xs={3}>
          <ChatForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
