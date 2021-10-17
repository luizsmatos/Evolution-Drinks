import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import api from '../services/api';
import CardDrinks from '../components/CardDrinks/CardDrinks';
import Loading from '../components/Loading/Loading';

function Drinks(props) {
  const [searchDrinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { match: { params: { name } } } = props;
  const decodeSearch = decodeURIComponent(name).replaceAll('+', ' ');

  const getSearchDrinksOK = async (nameDrink) => {
    try {
      const request = await api.get(`search.php?s=${nameDrink}`);
      const { data: { drinks } } = request;
      setDrinks(drinks);
      return setLoading(false);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getSearchDrinksOK(decodeSearch);
  }, []);

  return (
    <>
      <Header />
      <h4 className="title-drink">Explore os Drinks!</h4>
      <section className="container-drinks">
        { loading ? <Loading /> : searchDrinks.map((drink) => (
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
