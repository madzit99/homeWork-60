import { Container, Grid } from "@mui/material";
import ChatForm from "./Components/ChatForm";

function App() {
  return (
    <Container maxWidth='md'>
      <Grid container direction="column">
        <Grid item xs={9}>
          Сообщения
        </Grid>
        <Grid item xs={3}>
          <ChatForm/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
