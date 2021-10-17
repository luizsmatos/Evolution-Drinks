import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import DetailsDrinks from '../pages/DetailsDrinks';
import DetailsIngredient from '../pages/DetailsIngredient';

function Content() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/drink/:id/:name" component={DetailsDrinks} />
      <Route path="/ingredient/:name" component={DetailsIngredient} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Content;
