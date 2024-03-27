import { useEffect, useState } from "react";
import "../scss/App.scss";
import getCharacterApi from "../services/charactersApi";
import Header from "./Header";
import Filters from "./Filters/Filters";
import CharactersList from "./CharactersList";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filteredName, setFilteredName] = useState("");

  useEffect(() => {
    getCharacterApi().then((characterData) => {
      setCharacters(characterData);
    });
  });

  const handleChangeName = (value) => {
    setFilteredName(value);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filteredName.toLowerCase());
  });
  return (
    <>
      <Header />
      <main>
        <Filters filterName={handleChangeName} />
        <CharactersList charactersData={filteredCharacters} />
      </main>
    </>
  );
}

export default App;
