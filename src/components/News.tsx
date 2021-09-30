import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import React from 'react';
import { useGetNewsQuery } from '../services/NewsApi';
import Loader from './Loader';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 200,
    /* maxWidth: 345, */
  },
  image: {
    maxHeight: 200,
    /* maxWidth: 200, */
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  gridContainer: {
    justify: 'center',
    paddingLeft: '40px',
    paddingRight: '40px',
  },
}));
const News = () => {
  const classes = useStyles();
  const { data } = useGetNewsQuery({
    newsCategory: 'Sports',
    count: 10,
  });
  /* console.log(data); */
  if (!data?.value) return <Loader />;
  return (
    <Grid container spacing={4} className={classes.gridContainer}>
      {data.value.map(
        (
          news: {
            url: string;
            name: string;
            description: string;
            datePublished: string;

            image: {
              thumbnail: {
                contentUrl?: string;
              };
            };
            provider: {
              name: string;
              image: {
                thumbnail: {
                  contentUrl?: string;
                };
              };
            };
          },
          index: React.Key | null | undefined
        ) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card className={classes.root} variant="outlined">
              <CardActionArea>
                <a href={news.url} target="_blank" rel="noreferrer">
                  <CardMedia
                    component="img"
                    className={classes.image}
                    image={news?.image?.thumbnail?.contentUrl}
                    alt="news"
                  />
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      {`${news.name.substring(0, 40)}...`}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {`${news.description.substring(0, 80)}...`}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Typography variant="body2" component="p">
                      {moment(news.datePublished).fromNow()}
                    </Typography>
                  </CardActions>
                </a>
              </CardActionArea>
            </Card>
          </Grid>
        )
      )}
    </Grid>
  );
};
export default News;

/* <Row gutter={[24, 24]}>
  {data.value.map(
    (
      news: {
        url: string;
        name: string;
        description: string;
        datePublished: string;

        image: {
          thumbnail: {
            contentUrl?: string;
          };
        };
        provider: {
          name: string;
          image: {
            thumbnail: {
              contentUrl?: string;
            };
          };
        };
      },
      index: React.Key | null | undefined
    ) => (
      <Col xs={24} sm={12} lg={8} key={index}>
        <Card hoverable className="news-card">
          <a href={news.url} target="_blank" rel="noreferrer">
            <div className="news-image-container">
              <Title className="news-title" level={4}>
                {news.name}
              </Title>
              <img
                style={{ maxHeight: '100px', maxWidth: '200px' }}
                src={news?.image?.thumbnail?.contentUrl}
                alt="news"
              />
            </div>
            <p>{news.description}</p>
            <div className="provider-container">
              <Text>{moment(news.datePublished).fromNow()}</Text>
            </div>
          </a>
        </Card>
      </Col>
    )
  )}
</Row>; */
