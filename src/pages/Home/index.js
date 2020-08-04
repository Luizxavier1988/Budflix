import React from 'react';
import Menu from '../../components/Menu'
import dadosInicias from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={dadosInicias.categorias[0].videos[0].titulo}
        url={dadosInicias.categorias[0].videos[0].url}
        videoDescription={"Cyberpunk (de Cyber(netic) + punk) é um subgênero alternativo de ficção científica, conhecido por seu enfoque de 'Alta tecnologia e baixa qualidade de vida' (High tech, Low life) e toma seu nome da combinação de cibernética e punk alternativo. Mescla ciência avançada, como as tecnologias de informação e a cibernética junto com algum grau de desintegração ou mudança radical no sistema civil vigente. O movimento que incluí pintura, escultura, poesia, teatro, música, arquitetura, cinema e gastronomia."}

/>
      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[0]}
      />
      <Carousel
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
      />
      <Footer/>
    </div>
  )
}

export default Home;
