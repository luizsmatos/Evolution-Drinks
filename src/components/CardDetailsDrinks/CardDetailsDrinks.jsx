import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Button } from '@mui/material';
import './CardDetailsDrinks.css';
import { stylesDetails } from '../../helpers/styles';
import AppContext from '../../AppContext/Context';

function CardDetailsDrinks(props) {
  const { drink, name } = props;
  const { setNameDrink } = useContext(AppContext);
  const decodeName = decodeURIComponent(name).replaceAll('+', ' ');
  const encodeIngredient = (ingredient) => encodeURIComponent(ingredient).replaceAll('%20', '+');

  const renderButton = (text) => (
    <Button size="small" color="primary">
      {text}
    </Button>
  );

  const renderIngredient = (measure, ingredient) => {
    const isIngredient = ingredient;

    return isIngredient && (
      <td>
        <div>
          <img
            src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`}
            alt="ingredient"
            className="image-ingredient"
          />
          <Link to={`/ingredient/${encodeIngredient(ingredient)}`}>
            <Button onClick={() => { setNameDrink(ingredient); }} size="small" color="primary">
              {`${measure === null ? '' : measure}  ${ingredient}`}
            </Button>
          </Link>
        </div>
      </td>
    );
  };

  return (
    <div className="container-details">
      <table>
        <tbody>
          <tr>
            <td className="td-drink">
              <h4
                className="title-drink"
              >
                {decodeName}
              </h4>
            </td>
            <td className="td-ingredient"><h4 className="title-drink">Ingredientes</h4></td>
          </tr>
          <tr>
            <td className="content-drink">
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={stylesDetails.media}
                  image={drink.strDrinkThumb}
                  alt={drink.strDrink}
                />
                <CardContent style={stylesDetails.cardContent}>
                  <Typography style={stylesDetails.typography} gutterBottom variant="overline" component="div">
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
