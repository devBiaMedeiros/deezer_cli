/**
 *  Funcao para buscar musicas de um artista na API Deezer
 */
const searchSongs = async (artist) => {   

   /* Aqui a variavel response recebe o retorno da API Deezer */
  
   const response = await fetch(                                  // Aqui utilizamos o fetch para fazer a requisicao na API Deezer
    `https://api.deezer.com/search/track?q=${artist}`,           // A URL da API Deezer com o artista que queremos buscar
    {                                                            // É definido o metodo Get para buscar as musicas do artista
      method: "GET",
    }
  )
     /* Poderiamos reduzir removendo a linha abaixo que converte e colocando ao lado da funcao fetch() um .then convertendo. ex: fetch('url.com').then(resposta = resposta.json()) */
  const dataConvertido = await response.json();                            // Aqui convertemos a resposta da API para JSON pq o fetch() retorna um objeto Response (com dados tecnicos da API). 
                                                                           //  Por isso convertemos para json para obter os dados REAIS (conteudo que esperamos).

  if (dataConvertido.error) {                                                 // Verificamos se houve algum erro na requisicao              
    console.log(`Erro ao encontrar a musica do artista`)
  } else {                                                         // caso nao de erro, vamos fazer um map para percorrer cada objeto do array de musicas (retorno da API. ex [{musica 1}, {Musica 2}]) 
    const songs = dataConvertido.data.map((song, indice) => {                 // e organizar um objeto separado com titulo, musica, artista, link e etc.
      return console.log(`MUSICA ${indice}: `, {
        Titulo: song.title,
        Artista: song.artist.name,
        Album: song.album.title,
        Link: song.link
      })
    })
  }
};
 searchSongs("ludimila")