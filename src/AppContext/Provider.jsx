import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';
import api from '../services/api';

const AppProvider = ({ children }) => {
  const [drinksAlcoholic, setDrinksAlcoholic] = useState([]);
  const [drinksNonAlcoholic, setDrinksNonAlcoholic] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nameDrink, setNameDrink] = useState('');

  const getDrinksAlcoholic = async () => {
    try {
      const request = await api.get('filter.php?a=Alcoholic');
      const { data: { drinks } } = request;
      setDrinksAlcoholic(drinks);
      return setLoading(false);
    } catch (error) {
      return error;
    }
  };

  const getDrinksNonAlcoholic = async () => {
    try {
      const request = await api.get('filter.php?a=Non_Alcoholic');
      const { data: { drinks } } = request;
      setDrinksNonAlcoholic(drinks);
      return setLoading(false);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getDrinksAlcoholic();
    getDrinksNonAlcoholic();
  }, []);

  const state = {
    drinksAlcoholic,
    drinksNonAlcoholic,
    loading,
    nameDrink,
    setNameDrink,
  };

  return (
    <AppContext.Provider value={state}>
      { children }
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes
    .oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default AppProvider;
