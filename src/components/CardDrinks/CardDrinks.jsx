import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Button, CardActions, Rating,
} from '@mui/material';
import AppContext from '../../AppContext/Context';

function CardDrinks(props) {
  const [value, setValue] = useState(0);
  const { setNameDrink } = useContext(AppContext);
  const { drink: { strDrink, strDrinkThumb, idDrink } } = props;
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
      <CardActions style={styles.cardActions}>
        <Link
          to={`/drink/${idDrink}/${encodeURIComponent(strDrink)
            .replaceAll('%20', '-')}`}
        >
          <Button
            onClick={() => { setNameDrink(strDrink); }}
            size="small"
            color="primary"
          >
            Mais Informações
          </Button>
        </Link>
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
    idDrink: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardDrinks;
