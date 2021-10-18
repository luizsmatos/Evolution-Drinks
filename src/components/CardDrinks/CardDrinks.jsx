import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Rating } from '@mui/material';
import AppContext from '../../AppContext/Context';
import { stylesCard } from '../../helpers/styles';

function CardDrinks(props) {
  const [value, setValue] = useState(0);
  const { setNameDrink } = useContext(AppContext);
  const { drink: { strDrink, strDrinkThumb, idDrink } } = props;
  const encodeName = encodeURIComponent(strDrink).replaceAll('%20', '+');
  return (
    <Card className="card-drinks" sx={stylesCard.card}>
      <CardMedia
        component="img"
        style={stylesCard.media}
        image={strDrinkThumb}
        alt={strDrink}
      />
      <CardContent style={stylesCard.cardContent}>
        <Typography style={stylesCard.typography} gutterBottom variant="overline" component="div">
          {strDrink}
        </Typography>
      </CardContent>
      <CardActions style={stylesCard.cardActions}>
        <Link
          to={`/drink/${idDrink}/${encodeName}`}
        >
          <Button
            onClick={() => { setNameDrink(strDrink); }}
            size="small"
            color="inherit"
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
