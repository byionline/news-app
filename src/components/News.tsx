import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Link,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import React from 'react';
import { useGetNewsQuery } from '../services/NewsApi';
import Loader from './Loader';

const useStyles = makeStyles(theme => ({
  root: { minWidth: 200 /* maxWidth: 345, */ },
  image: {
    /*maxHeight: 200, maxWidth: 200, */ width: '100%',
    height: '164px',
    overflow: 'hidden',
  },
  description: {
    maxHeight: '4.3em',
    color: '#111',
    fontSize: '20px',
    fontWeight: 'bold',
    letterSpacing: '-.2px',
    lineHeight: '1.4',
  },
  title: { fontSize: 14 },
}));

const News = () => {
  const classes = useStyles();
  const { data } = useGetNewsQuery({ newsCategory: 'Sports', count: 10 });
  /* console.log(data); */ if (!data?.value) return <Loader />;
  return (
    <Grid container spacing={2} justifyContent="center">
      {data.value.map(
        (
          news: {
            url: string;
            name: string;
            description: string;
            datePublished: string;
            image: { thumbnail: { contentUrl?: string } };
            provider: {
              name: string;
              image: { thumbnail: { contentUrl?: string } };
            };
          },
          index: React.Key | null | undefined
        ) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Card className={classes.root} variant="outlined">
              <CardActionArea>
                <Link
                  href={news.url}
                  underline="none"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardMedia
                    component="img"
                    className={classes.image}
                    image={news?.image?.thumbnail?.contentUrl}
                    alt="news"
                  />
                  <CardContent>
                    {/* <Typography className={classes.title} color="textSecondary" gutterBottom > {`${news.name.substring(0, 40)}...`} </Typography> */}
                    <Typography variant="body2" className={classes.description}>
                      {`${news.description.substring(0, 55)}...`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Typography variant="body2" component="p">
                      {moment(news.datePublished).fromNow()}
                    </Typography>
                  </CardActions>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        )
      )}
    </Grid>
  );
};
export default News;
