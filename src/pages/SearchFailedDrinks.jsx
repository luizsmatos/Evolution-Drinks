import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import CardDrinks from '../components/CardDrinks/CardDrinks';
import api from '../services/api';
import Loading from '../components/Loading/Loading';

const buttonsAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
function Drinks() {
  const [letterDrinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFetching, setFetching] = useState(false);

  const getLetterDrinks = async (letter) => {
    try {
      const request = await api.get(`search.php?f=${letter}`);
      const { data: { drinks } } = request;
      setDrinks(drinks);
      setFetching(true);
      return setLoading(false);
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <Header />
      <section className="content-letter">
        { buttonsAlphabet.map((button) => (
          <div>
            <button
              className="button-search"
              type="button"
              onClick={() => { getLetterDrinks(button); }}
            >
              {button}
            </button>
            <span className="title-search">/</span>
          </div>
        )) }
      </section>
      { loading && <h4 className="title-drink">Ops, Nenhum Drink foi achado!</h4> }
      <section className="container-drinks">
        { loading || !isFetching ? <Loading /> : letterDrinks.map((drink) => (
          <CardDrinks key={drink.idDrink} drink={drink} />))}
      </section>
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
