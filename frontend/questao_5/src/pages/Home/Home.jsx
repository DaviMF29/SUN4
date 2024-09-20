import React from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Cards from '../../components/cards/Cards'
import Form from '../../components/forms/Form'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="Home-container">
        <div className="Item">
          <div className="Image">
            <img src="law.png" alt="" />
          </div>
          <div className="Info">
            <div className="Tittle">
              <h1>Acompanhamento de processos</h1>
              <p>
                Tenha controle total sobre suas ações judiciais de forma autônoma<br />
              </p>
            </div>
          </div>
        </div>
        <div className="Item">
          <div className="Image">
            <img src="notification.png" alt="" />
          </div>
          <div className="Info">
            <div className="Subtittle">
              <h1>Monitoramento Jurídico</h1>
              <p>
                Fique atualizado sobre o andamento dos seus processos sem complicações.<br />
              </p>
            </div>
          </div>
        </div>
        <div className="Item">
          <div className="Image">
            <img src="question.png" alt="" />
          </div>
          <div className="Info">
            <div className="About">
              <h1>O que é o Processei?</h1>
              <p>
                Plataforma que permite acompanhar processos judiciais diretamente, sem advogados.<br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Img"></div>
      <div id="cards">
        <Cards />
      </div>
      <Form />
      <Footer />
    </div>


  )
}

export default Home
