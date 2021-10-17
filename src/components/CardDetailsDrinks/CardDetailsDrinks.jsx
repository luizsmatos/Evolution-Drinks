import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  CardActionArea, CardActions, Button,
} from '@mui/material';
import './CardDetailsDrinks.css';

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

function CardDetailsDrinks(props) {
  const { drink, name } = props;

  const renderIngredient = (measure, ingredient) => {
    const isMeasure = measure;
    return isMeasure && (
      <td>
        <div>
          <img
            src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`}
            alt="ingredient"
            className="image-ingredient"
          />
        </div>
        {isMeasure
            && <p className="title-drink">{`${measure}` && `${ingredient}`}</p>}
      </td>
    );
  };
  const renderButton = (text) => (
    <Button size="small" color="primary">
      {text}
    </Button>
  );

  return (
    <div className="container-details">
      <table>
        <tbody>
          <tr>
            <td className="td-drink">
              <h4
                className="title-drink"
              >
                {decodeURIComponent(name).replaceAll('-', ' ')}
              </h4>
            </td>
            <td className="td-ingredient"><h4 className="title-drink">Ingredientes</h4></td>
          </tr>
          <tr>
            <td className="content-drink">
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={styles.media}
                  image={drink.strDrinkThumb}
                  alt={drink.strDrink}
                />
                <CardContent style={styles.cardContent}>
                  <Typography style={styles.typography} gutterBottom variant="overline" component="div">
                    <p>Instruções:</p>
                    {drink.strInstructions}
                  </Typography>
                </CardContent>
                <CardActions />
              </CardActionArea>
              <div className="container-buttons">
                { renderButton(drink.strCategory)}
                { renderButton(drink.strAlcoholic)}
                { renderButton(drink.strGlass)}
              </div>
            </td>
            <td className="content-ingredient">
              <table>
                <tbody>
                  <tr>
                    <tr className="td-ingredient">
                      { renderIngredient(drink.strMeasure1, drink.strIngredient1)}
                      { renderIngredient(drink.strMeasure2, drink.strIngredient2)}
                      { renderIngredient(drink.strMeasure3, drink.strIngredient3)}
                    </tr>
                    <tr className="td-ingredient">
                      { renderIngredient(drink.strMeasure4, drink.strIngredient4)}
                      { renderIngredient(drink.strMeasure5, drink.strIngredient5)}
                      { renderIngredient(drink.strMeasure6, drink.strIngredient6)}
                    </tr>
                    <tr className="td-ingredient">
                      { renderIngredient(drink.strMeasure7, drink.strIngredient7)}
                      { renderIngredient(drink.strMeasure8, drink.strIngredient8)}
                      { renderIngredient(drink.strMeasure9, drink.strIngredient9)}
                    </tr>
                    <tr className="td-ingredient">
                      { renderIngredient(drink.strMeasure10, drink.strIngredient10)}
                      { renderIngredient(drink.strMeasure11, drink.strIngredient11)}
                      { renderIngredient(drink.strMeasure12, drink.strIngredient12)}
                    </tr>
                    <tr className="td-ingredient">
                      { renderIngredient(drink.strMeasure13, drink.strIngredient13)}
                      { renderIngredient(drink.strMeasure14, drink.strIngredient14)}
                      { renderIngredient(drink.strMeasure15, drink.strIngredient15)}
                    </tr>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

CardDetailsDrinks.propTypes = {
  name: PropTypes.string.isRequired,
  drink: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CardDetailsDrinks;
