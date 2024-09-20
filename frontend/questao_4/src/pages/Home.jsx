import React from 'react'
import Header from '../components/header/Header'
import './Home.css'
import Footer from '../components/footer/Footer'
const Home = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className="column">
            <h1>Gestão inteligente com a sol - IA</h1>
            <p>Uma gestão acompanhada por uma IA capaz de analisar
              o processo e gerar atividades internas</p>
        </div>
        <div className="column">
            <h1>Jurimetria - Analítico</h1>
            <p>Otimize suas decisões com dados reais e precisos. Aumente sua capacidade
              atráves da nossa ferramente exclusiva de geolocalização</p>
          </div>
        <div className="column">
            <h1>Automações</h1>
            <p>Geração de peça, protocolo de petições e documentos, monitoramento de movimentações
              e expedientes. Seu processo 100% automatizado. </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
