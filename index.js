const prompt = require("prompt-sync")();

const searchSongs = async (artist) => {
  const response = await fetch(
    `https://api.deezer.com/search/track?q=${artist}`,
    {
      method: "GET",
    }
  );
  const dataConvertido = await response.json();

  if (dataConvertido.error) {
    console.log(`Erro ao encontrar a musica do artista`);
  } else {
    dataConvertido.data.map((song, indice) => {
      return console.log(`MUSICA ${indice}: `, {
        Titulo: song.title,
        Artista: song.artist.name,
        Album: song.album.title,
        Link: song.link,
      });
    });
  }
};
const musico = prompt("Digite seu artista: ");
searchSongs(musico);
