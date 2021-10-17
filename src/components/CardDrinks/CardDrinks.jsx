import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Button, CardActionArea, CardActions, Rating,
} from '@mui/material';

export default function CardDrinks(props) {
  const [value, setValue] = useState(0);
  const { drink: { strDrink, strDrinkThumb } } = props;
  const styles = {
    card: {
      width: 245,
      margin: '10px',
      backgroundColor: 'rgb(33,37,41)',
    },
    media: {
      height: '220px',
    },
    cardContent: {
      backgroundColor: 'rgb(33,37,41)',
    },
    typography: {
      maxHeight: '33px',
      color: 'white',
    },
    cardActions: {
      backgroundColor: 'rgb(33,37,41)',
    },
  };
  return (
    <Card className="card-drinks" sx={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={styles.media}
          image={strDrinkThumb}
          alt={strDrink}
        />
        <CardContent style={styles.cardContent}>
          <Typography style={styles.typography} gutterBottom variant="overline" component="div">
            {strDrink}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={styles.cardActions}>
        <Button size="small" color="primary">
          Mais Informações
        </Button>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </CardActions>
    </Card>
  );
}

CardDrinks.propTypes = {
  drink: PropTypes.shape({
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired,
};
