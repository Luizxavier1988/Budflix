import React, { useState, useEffect } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos[0].videos[0]);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Cyberpunk (de Cyber(netic) + punk) é um subgênero alternativo de ficção científica, conhecido por seu enfoque de 'Alta tecnologia e baixa qualidade de vida' (High tech, Low life) e toma seu nome da combinação de cibernética e punk alternativo. Mescla ciência avançada, como as tecnologias de informação e a cibernética junto com algum grau de desintegração ou mudança radical no sistema civil vigente. O movimento que incluí pintura, escultura, poesia, teatro, música, arquitetura, cinema e gastronomia."
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />

            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {/*       {dadosIniciais.length >= 1 && (
      <>
        <BannerMain
          videoTitle={dadosIniciais[0].videos[0].titulo}
          url={dadosIniciais[0].videos[0].url}
          videoDescription="Cyberpunk (de Cyber(netic) + punk) é um subgênero alternativo de ficção científica, conhecido por seu enfoque de 'Alta tecnologia e baixa qualidade de vida' (High tech, Low life) e toma seu nome da combinação de cibernética e punk alternativo. Mescla ciência avançada, como as tecnologias de informação e a cibernética junto com algum grau de desintegração ou mudança radical no sistema civil vigente. O movimento que incluí pintura, escultura, poesia, teatro, música, arquitetura, cinema e gastronomia."
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais[0]}
        />
      </>
      )}

      { <Carousel
        category={dadosInicias.categorias[1]}
      />
      <Carousel
        category={dadosInicias.categorias[2]}
      />
      <Carousel
        category={dadosInicias.categorias[3]}
      />
      <Carousel
        category={dadosInicias.categorias[4]}
      /> } */}

    </PageDefault>
  );
}

export default Home;
