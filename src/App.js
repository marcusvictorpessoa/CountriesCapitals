import React, { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import CountriesCapitals from "./components/CountriesCapitals";
import Header from "./components/Header";

function App() {

  let dados = {
    Brasil: "Brasília",
    Inglaterra: "Londres",
    Argentina: "Buenos Aires",
    Alemanha: "Berlim",
    Peru: "Lima",
    Canada: "Ottawa",
    Chile: "Santiago"
  }

  const [data, setData] = useState({});

  function playGame() {
    setData(dados)
  }

  return (
    <>
      <Header />
      <Container>
        {Object.entries(data).length !== 0 ?
          <CountriesCapitals countriescapitalslist={data} /> :
          <Button content={'Start game'} click={() => playGame()}
          />}
      </Container>
    </>
  );
}

export default App;
