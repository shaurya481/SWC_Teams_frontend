import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import sql_logo from "../src/images/Unknown.png"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  img: {
    objectFit: "contain",
  }
});

export default function CardComponent() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={sql_logo}
          title="Project"
          className={classes.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            SQL
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}