import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { Fab } from '@mui/material';
import Loading from '../Loading/Loading';
import AppContext from '../../AppContext/Context';
import CardDrinks from '../CardDrinks/CardDrinks';
import './ShowDrinks.css';

function ShowDrinks() {
  const { drinksAlcoholic, drinksNonAlcoholic, loading } = useContext(AppContext);
  const [value, setValue] = useState('');
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(14);
  const encodeSearch = encodeURIComponent(value).replaceAll('%20', '+');

  const newDrinks = () => {
    setMin(min >= 42 ? 0 : min + 14);
    setMax(max >= 56 ? 14 : max + 14);
  };

  return (
    <section className="content">
      <div className="container-search">
        <div className="form-search">
          <InputGroup className="">
            <FormControl
              placeholder="Faça sua pesquisa!"
              aria-label="Faça sua pesquisa!"
              aria-describedby="basic-addon2"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Link to={`/search/${encodeSearch}`}>
              <Button variant="dark" id="button-addon2">
                Pesquisar
              </Button>
            </Link>
          </InputGroup>
        </div>
      </div>
      <div className="container-search">
        <Fab onClick={() => newDrinks()} variant="extended">
          Explorar Novos Drinks
        </Fab>
      </div>
      <div className="container-drinks">
        { loading ? <Loading /> : drinksAlcoholic.slice(min, max).map((element) => (
          <CardDrinks key={element.idDrink} drink={element} />
        ))}
        { drinksNonAlcoholic.slice(min, max).map((element) => (
          <CardDrinks key={element.idDrink} drink={element} />
        ))}
      </div>
    </section>
  );
}

export default ShowDrinks;
