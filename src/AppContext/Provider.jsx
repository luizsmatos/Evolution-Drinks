import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';
import api from '../services/api';

const AppProvider = ({ children }) => {
  const [drinksAlcoholic, setDrinksAlcoholic] = useState([]);
  const [drinksNonAlcoholic, setDrinksNonAlcoholic] = useState([]);

  const getDrinksAlcoholic = async () => {
    try {
      const request = await api.get('filter.php?a=Alcoholic');
      const { data: { drinks } } = await request;
      return setDrinksAlcoholic(drinks);
    } catch (error) {
      return error;
    }
  };

  const getDrinksNonAlcoholic = async () => {
    try {
      const request = await api.get('filter.php?a=Non_Alcoholic');
      const { data: { drinks } } = await request;
      return setDrinksNonAlcoholic(drinks);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getDrinksAlcoholic();
    getDrinksNonAlcoholic();
  }, []);

  return (
    <AppContext.Provider value={{ drinksAlcoholic, drinksNonAlcoholic }}>
      { children }
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes
    .oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default AppProvider;
