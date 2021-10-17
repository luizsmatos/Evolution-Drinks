import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardDetailsDrinks from '../components/CardDetailsDrinks/CardDetailsDrinks';
import Header from '../components/Header/Header';
import api from '../services/api';

function DetailsDrinks(props) {
  const [detailsDrink, setDetailsDrink] = useState([]);
  const { match: { params: { id, name } } } = props;

  const getDetailsDrink = async (idDrink) => {
    try {
      const request = await api.get(`lookup.php?i=${idDrink}`);
      const { data: { drinks } } = request;
      return setDetailsDrink(drinks);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getDetailsDrink(id);
  }, []);

  return (
    <>
      <Header />
      <section>
        { detailsDrink.map((drink) => (
          <CardDetailsDrinks key={drink.idDrink} drink={drink} name={name} />))}
      </section>
    </>
  );
}

DetailsDrinks.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default DetailsDrinks;
