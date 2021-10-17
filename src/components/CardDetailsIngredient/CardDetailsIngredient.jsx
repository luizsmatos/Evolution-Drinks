import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  CardActionArea, CardActions,
} from '@mui/material';
import './CardDetailsIngredient.css';

const styles = {
  media: {
    height: '220px',
  },
  cardContent: {
    backgroundColor: 'rgb(33,37,41)',
  },
  typography: {
    color: 'white',
  },
  cardActions: {
    backgroundColor: 'rgb(33,37,41)',
  },
};

function CardDetailsIngredient(props) {
  const { ingredient, name } = props;

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <h4
                className="title-drink"
              >
                {name}
              </h4>
            </td>
            <td><h4 className="title-drink">Drinks</h4></td>
          </tr>
          <tr>
            <td className="show-ingredient">
              <img
                src={`https://www.thecocktaildb.com/images/ingredients/${name}.png`}
                alt="ingredient"
                className="img-ingredient"
              />
            </td>
            <td>
              <table>
                <tbody className="content-drinks">
                  { ingredient.map((drink) => (
                    <tr>
                      <td>
                        <CardActionArea key={drink.idDrink}>
                          <CardMedia
                            component="img"
                            style={styles.media}
                            image={drink.strDrinkThumb}
                            alt={drink.strDrink}
                          />
                          <CardContent style={styles.cardContent}>
                            <Typography style={styles.typography} gutterBottom variant="overline" component="div">
                              {drink.strDrink}
                            </Typography>
                          </CardContent>
                          <CardActions />
                        </CardActionArea>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

CardDetailsIngredient.propTypes = {
  ingredient: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardDetailsIngredient;
