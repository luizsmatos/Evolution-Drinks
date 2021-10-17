import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import DetailsDrinks from '../pages/DetailsDrinks';

function Content() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/drinks/:id/:name" component={DetailsDrinks} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Content;
