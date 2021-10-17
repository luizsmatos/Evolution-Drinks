import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import api from '../services/api';
import CardDetailsIngredient from '../components/CardDetailsIngredient/CardDetailsIngredient';

function DetailsIngredient(props) {
  const [detailsIngredient, setDetailsIngredient] = useState([]);
  const { match: { params: { name } } } = props;
  const decodeIngredient = decodeURIComponent(name).replaceAll('+', ' ');

  const getDetailsIngredient = async (ingredient) => {
    try {
      const request = await api.get(`filter.php?i=${ingredient}`);
      const { data: { drinks } } = request;
      return setDetailsIngredient(drinks);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getDetailsIngredient(decodeIngredient);
  }, []);

  return (
    <>
      <Header />
      <section>
        <CardDetailsIngredient
          ingredient={detailsIngredient}
          name={decodeIngredient}
        />
      </section>
    </>
  );
}

DetailsIngredient.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
};

export default DetailsIngredient;
