import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from '@mui/material';
import Header from '../components/Header/Header';
import CardDrinks from '../components/CardDrinks/CardDrinks';
import api from '../services/api';

const buttonsAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
function Drinks() {
  const [letterDrinks, setDrinks] = useState([]);
  const [isFetching, setFetching] = useState(false);

  const getLetterDrinks = async (letter) => {
    try {
      const request = await api.get(`search.php?f=${letter}`);
      const { data: { drinks } } = request;
      setDrinks(drinks);
      return setFetching(true);
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <Header />
      <section className="content-letter">
        <ButtonGroup variant="text" aria-label="text button group">
          { buttonsAlphabet.map((button) => (
            <Button onClick={() => { getLetterDrinks(button); }}>{button}</Button>
          )) }
        </ButtonGroup>
      </section>
      { !isFetching && <h4 className="title-drink">Ops, Nenhum Drink foi achado!</h4> }
      { isFetching && (
      <section className="container-drinks">
        { letterDrinks.map((drink) => (
          <CardDrinks key={drink.idDrink} drink={drink} />))}
      </section>
      )}
    </>
  );
}

Drinks.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }),
};

Drinks.defaultProps = {
  match: PropTypes.shape({
    params: {
      name: '',
    },
  }).isRequired,
};

export default Drinks;
