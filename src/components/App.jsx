import { useEffect, useState } from "react";
import "../scss/App.scss";
import getCharacterApi from "../services/charactersApi";
import Header from "./Header";
import Filters from "./Filters/Filters";
import CharactersList from "./CharactersList";
import { Route, Routes, matchPath, useLocation } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filteredName, setFilteredName] = useState("");

  useEffect(() => {
    getCharacterApi().then((characterData) => {
      setCharacters(characterData);
    });
  }, []);

  const handleChangeName = (value) => {
    setFilteredName(value);
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filteredName.toLowerCase());
  });

  const { pathname } = useLocation();
  const characterRoute = matchPath("/character/:idChar", pathname);
  const idChar = characterRoute ? parseInt(characterRoute.params.idChar) : null;

  const charDetailData = characters.find(
    (character) => character.id === idChar
  );

  console.log;
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  filterName={handleChangeName}
                  nameValue={filteredName}
                />
                <CharactersList charactersData={filteredCharacters} />
              </>
            }
          />
          <Route
            path="/character/:idChar"
            element={<CharacterDetail character={charDetailData} />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
