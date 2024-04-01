import { useEffect, useState } from "react";
import "../scss/App.scss";
import getCharacterApi from "../services/charactersApi";
import Header from "./Header";
import Filters from "./Filters/Filters";
import CharactersList from "./CharactersList";
import CharacterDetail from "./CharacterDetail";
import { Route, Routes, matchPath, useLocation } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [filteredName, setFilteredName] = useState("");
  const [filteredSpecie, setFilteredSpecie] = useState("");
  const [filteredStatus, setFilteredStatus] = useState([]);

  useEffect(() => {
    getCharacterApi().then((characterData) => {
      setCharacters(characterData);
    });
  }, []);

  const handleChangeName = (value) => {
    setFilteredName(value);
  };

  const handleChangeSpecie = (value) => {
    setFilteredSpecie(value);
  };

  const handleChangeStatus = (value, isChecked) => {
    if (isChecked) {
      setFilteredStatus([...filteredStatus, value]);
    } else {
      setFilteredStatus(
        filteredStatus.filter((status) => {
          return status !== value;
        })
      );
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filteredName.toLowerCase());
    })
    .filter((character) => {
      return character.species.toLowerCase().includes(filteredSpecie);
    })
    .filter((character) => {
      return filteredStatus.length > 0
        ? filteredStatus.includes(character.status.toLowerCase())
        : true;
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
              <div className="main__characters">
                <Filters
                  filterName={handleChangeName}
                  filterSpecie={handleChangeSpecie}
                  filterStatus={handleChangeStatus}
                  nameValue={filteredName}
                  spevieValue={filteredSpecie}
                  statusValue={filteredStatus}
                />
                <CharactersList
                  charactersData={filteredCharacters}
                  searchName={filteredName}
                />
              </div>
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
