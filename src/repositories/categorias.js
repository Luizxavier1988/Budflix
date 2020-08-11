import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias?_embed=videos`;

function getAllWithVideos() {
  return fetch(URL_CATEGORIES)
    .then(async (respostaDoServidor) => {
      const resposta = await respostaDoServidor.json();

      return resposta;
    });
}

export default {
  getAllWithVideos,
};
