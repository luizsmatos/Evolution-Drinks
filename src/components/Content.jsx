import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import DetailsDrinks from '../pages/DetailsDrinks';
import DetailsIngredient from '../pages/DetailsIngredient';
import SearchSuccessDrinks from '../pages/SearchSuccessDrinks';
import SearchFailedDrinks from '../pages/SearchFailedDrinks';

function Content() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/drink/:id/:name" component={DetailsDrinks} />
      <Route path="/ingredient/:name" component={DetailsIngredient} />
      <Route path="/search/:name" component={SearchSuccessDrinks} />
      <Route path="/search/" component={SearchFailedDrinks} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Content;
