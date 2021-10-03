import { Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { News } from '../components';

const useStyles = makeStyles(theme => ({
  /* container: { paddingTop: theme.spacing(10), padding: '80px 15px 30px 15px', marginTop: '80px', }, */ h2: {
    fontSize: '20px',
    padding: 0,
    marginBottom: '24px',
    width: '100%',
    fontWeight: 'bold',
    lineHeight: '1.4',
    color: '#444',
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" className={classes.h2}>
        Top stories
      </Typography>
      <News />
    </> /*  <Container className={classes.container}> <Box mt={10}> <Typography variant="h2" className={classes.h2}> Top stories </Typography> </Box> <News /> </Container> */
  );
};
export default HomePage;
