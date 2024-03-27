const getCharacterApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const parsedCharacters = data.results.map((character) => {
        return {
          id: character.id,
          photo: character.image,
          name: character.name,
          species: character.species,
          origin: character.origin.name,
          episodes: character.episode.length,
          status: character.status,
        };
      });
      return parsedCharacters;
    });
};
export default getCharacterApi;
