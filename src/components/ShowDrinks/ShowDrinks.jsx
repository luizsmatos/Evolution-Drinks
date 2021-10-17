import React, { useContext, useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { Pagination } from '@mui/material';
import Loading from '../Loading/Loading';
import AppContext from '../../AppContext/Context';
import CardDrinks from '../CardDrinks/CardDrinks';
import './ShowDrinks.css';

// const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function ShowDrinks() {
  const { drinksAlcoholic, drinksNonAlcoholic, loading } = useContext(AppContext);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(14);

  const newDrinks = () => {
    setMin(min >= 42 ? 0 : min + 14);
    setMax(max >= 56 ? 14 : max + 14);
  };

  return (
    <>
      <section className="container-search">
        <div className="form-search">
          <InputGroup className="">
            <FormControl
              placeholder="Faça sua pesquisa!"
              aria-label="Faça sua pesquisa!"
              aria-describedby="basic-addon2"
            />
            <Button variant="primary" id="button-addon2">
              Pesquisar
            </Button>
          </InputGroup>
        </div>
      </section>
      <div className="container-search">
        <Pagination
          size="large"
          count={4}
          variant="text"
          color="primary"
          onChange={() => newDrinks()}
        />
      </div>
      <section className="container-drinks">
        { loading ? <Loading /> : drinksAlcoholic.slice(min, max).map((element) => (
          <CardDrinks key={element.idDrink} drink={element} />
        ))}
        { drinksNonAlcoholic.slice(min, max).map((element) => (
          <CardDrinks key={element.idDrink} drink={element} />
        ))}
      </section>
    </>
  );
}

export default ShowDrinks;
