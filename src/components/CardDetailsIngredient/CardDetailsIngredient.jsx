import React from 'react';
import PropTypes from 'prop-types';
import './CardDetailsIngredient.css';
import CardDrinks from '../CardDrinks/CardDrinks';

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
                    <tr key={drink.idDrink}>
                      <td>
                        <CardDrinks drink={drink} />
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
  ingredient: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
};

export default CardDetailsIngredient;
