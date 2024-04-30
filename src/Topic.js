import { AppBar } from '@mui/material';
import themes from './topics.json';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
const Topic = (props) => {

  const { topic } = props;

  const selectedTopic = themes.find((theme) => theme.topic_name === topic);

  return (
    <AppBar
      component="div"
      color="primary"
      position="static"
      elevation={0}
      sx={{ zIndex: 0 }}
    >
      <Toolbar>
        <Grid container spacing={1} alignItems={"center"}>
          <Grid item xs >
            <Typography  variant="h2" component="h1" sx={{ textAlign: 'left' }} marginTop={3} marginBottom={3}>
              {topic && selectedTopic.main_topic}
            </Typography>
          </Grid>
          <Grid item >
            <Typography  variant="h6" component="h1">
              {topic && selectedTopic.desc}
            </Typography>

          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>


  );
};

export default Topic;
