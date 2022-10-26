import React from "react";
import "./App.css";
import Container from "./components/Container";
import CountriesCapitals from "./components/CountriesCapitals";
import Header from "./components/Header";

function App() {

  let dados = {
    Brasil: "Brasilia",
    Bolivia: "La paz",
    Inglaterra: "Londres",
    Argentina: "Buenos aires",
    Alemanha: "Berlim",
    Peru: "Lima"
  }

  return (
    <>
      <Header />
      <Container>
        <CountriesCapitals countriescapitalslist={dados} />
      </Container>
    </>
  );
}

export default App;
